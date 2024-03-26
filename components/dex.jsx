import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { ConnectWallet } from '@thirdweb-dev/react'
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Spinner,
} from "@chakra-ui/react";
import {
  toEther,
  toWei,
  useAddress,
  useBalance,
  useContract,
  useContractMetadata,
  useContractRead,
  useContractWrite,
  useNetworkMismatch,
  useSDK,
  useSwitchChain,
  useTokenBalance,
} from "@thirdweb-dev/react";
import { ACTIVE_CHAIN, DEX_ADDRESS, TOKEN_ADDRESS } from "../const/details";
import toast, { Toaster } from "react-hot-toast";
import toastStyle from "../util/toastConfig";
import { useEffect, useState,  useMemo } from "react";
import SwapInput from "../components/input";
import { NumericFormat } from 'react-number-format';
import tokenList from "../token.json";
import { Popover, Radio, message } from "antd";
import Modal from 'react-modal';
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Ap from "../components/App" 
import Ap2 from "../components/Btc" 


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: "70%",
    borderRadius: "16px",
    background: "rgba(0, 0, 0, 0.64)",
    border: "solid 2px",
    backdropFilter: "blur(10px)",
    color:  "white",
    overflow: "auto",
    textAlign: "center",
    maxWidth: "600px",
    minWidth: "350px"
  },
};

Modal.setAppElement();





const Dex = (props) => {
  const address = useAddress();
  const [modalIsOpen, setOpen] = React.useState(false);
  const { contract: tokenContract } = useContract(TOKEN_ADDRESS, "token");
  const { contract: dexContract } = useContract(DEX_ADDRESS, "custom");
  const { data: symbol } = useContractRead(tokenContract, "symbol");
  const { data: tokenMetadata } = useContractMetadata(tokenContract);
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  const { data: nativeBalance } = useBalance();
  const [slippage, setSlippage] = useState(2.5);
  const [prices, setPrices] = useState(null);
  const [tokenOneAmount, setTokenOneAmount] = useState(null);
  const [tokenTwoAmount, setTokenTwoAmount] = useState(null);
  const [tokenOne, setTokenOne] = useState(tokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(tokenList[1]);


  const { data: contractTokenBalance } = useTokenBalance(
    tokenContract,
    DEX_ADDRESS
  );
  const isMismatched = useNetworkMismatch();
  const switchChain = useSwitchChain();

  const sdk = useSDK();
  const [contractBalance, setContractBalance] = useState("0");

  const [nativeValue, setNativeValue] = useState("0");
  const [tokenValue, setTokenValue] = useState("0");
  const [currentFrom, setCurrentFrom] = useState("native");
  const [loading, setLoading] = useState(false);
  const { mutateAsync: swapNativeToToken } = useContractWrite(
    dexContract,
    "swapEthTotoken"
  );
  const { mutateAsync: swapTokenToNative } = useContractWrite(
    dexContract,
    "swapTokenToEth"
  );
  const { mutateAsync: approveTokenSpending } = useContractWrite(
    tokenContract,
    "approve"
  );

  
 function changeAmount(e) {
    setTokenOneAmount(e.target.value);
    if(e.target.value && prices){
     tokenValue((e.target.value * prices.ratio).toFixed(2))
    }else{
     tokenValue(null);
    }
  }
  const { data: amountToGet } = useContractRead(
    dexContract,
    "getAmountOfTokens",
    currentFrom === "native"
      ? [
          toWei(nativeValue || "0"),
          toWei(contractBalance || "0"),
          contractTokenBalance?.value,
        ]
      : [
          toWei(tokenValue || "0"),
          contractTokenBalance?.value,
          toWei(contractBalance || "0"),
        ]
  );

  const fetchContractBalance = async () => {
    try {
      const balance = await sdk?.getBalance(DEX_ADDRESS);
      setContractBalance(balance?.displayValue || "0");
    } catch (err) {
      console.error(err);
    }
  };

  const executeSwap = async () => {
    setLoading(true);
    if (isMismatched) {
      switchChain(ACTIVE_CHAIN.chainId);
      setLoading(false);
      return;
    }
    try {
      if (currentFrom === "native") {
        await swapNativeToToken({ overrides: { value: toWei(nativeValue) } });
        toast( `You have successfully swapped your ${
          ACTIVE_CHAIN.nativeCurrency.symbol
        } to ${symbol || "tokens"}.`, {
          icon: "⚡",
          style: toastStyle,
          position: "bottom-center",
        });
      } else {
        // Approve token spending
        await approveTokenSpending({ args: [DEX_ADDRESS, toWei(tokenValue)] });
        // Swap!
        await swapTokenToNative({ args: [toWei(tokenValue)] });
        toast( `You have successfully swapped your ${
          symbol || "tokens"
        } to ${ACTIVE_CHAIN.nativeCurrency.symbol}.`, {
          icon: "⚡",
          style: toastStyle,
          position: "bottom-center",
        });
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      toast(`SWAP FAILED, PLEASE TRY AGAIN`, {
        icon: "⁉️",
        style: toastStyle,
        position: "bottom-center",
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContractBalance();
    setInterval(fetchContractBalance, 10000);
  }, []);

  useEffect(() => {
    if (!amountToGet) return;
    if (currentFrom === "native") {
      setTokenValue(toEther(amountToGet));
    } else {
      setNativeValue(toEther(amountToGet));
    }
  }, [amountToGet]);
  function handleSlippageChange(e) {
    setSlippage(e.target.value);
  }
  const [isOpen, setIsOpen] = useState(false);
  const [changeToken, setChangeToken] = useState(1);
  function openModal(asset) {
    setChangeToken(asset);
    setIsOpen(true);
  }

  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }

  function modifyToken(i){
    setPrices(null);
    setTokenOneAmount(null);
    setTokenTwoAmount(null);
    if (changeToken === 1) {
      setTokenOne(tokenList[i]);
      fetchPrices(tokenList[i].address, tokenTwo.address)
    } else {
      setTokenTwo(tokenList[i]);
      fetchPrices(tokenOne.address, tokenList[i].address)
    }
    setIsOpen(false);
  }

  function CoinDetails({ coin, history }) {
    // Prepare the data for the line chart
    const address = useAddress();
    const chartData = history.map(dataPoint => ({ date: new Date(dataPoint[0]), price: dataPoint[1] }));
    const priceChangeColor = coin.price_change_24h < 0 ? 'red' : 'lightgreen';
  
    return (
      <div className="coin-details">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: 'auto' }} >
          <span style={{ color: priceChangeColor, fontSize: '0.8em' }}>
            {coin.price_change_24h > 0 && '+'}{coin.price_change_24h?.toFixed(2)}%
          </span>
          <h1 style={{ margin: 0 }}>
            ${coin.current_price?.toFixed(2)}
          </h1>
        </div>
        <h2>Historical Data</h2>
        <AreaChart width={500} height={300} data={chartData}  fill="rgba(200, 200, 0, 0.5)" >   
          <Area type="monotone" dataKey="price"  />
        </AreaChart>
      </div>
    );
  }

  

  
  

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={`dex-container ${props.rootClassName} `}>
        <div className="dex-container01">
          <div className="dex-container02">
            <Link legacyBehavior href="/swap">
              <a className="dex-link">
                <div className="dex-container03">
                  <span className="dex-text">{props.text8}</span>
                </div>
              </a>
            </Link>
            <div className="dex-container04">
              <span className="dex-text01">{props.text83}</span>
            </div>
            <div className="dex-container05">
              <span className="dex-text02">{props.text831}</span>
            </div>
            <div data-thq="thq-dropdown" className="dex-thq-dropdown list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="dex-dropdown-toggle"
              >
                <svg viewBox="0 0 1024 1024" className="dex-icon">
                  <path d="M554.667 213.333l36.48 145.92 144.597-41.429 64.043 110.933-108.16 104.491 108.16 104.576-64 110.933-144.64-41.429-36.48 146.005h-128l-36.48-146.005-144.64 41.429-64.043-110.933 108.16-104.576-108.117-104.491 64-110.933 144.64 41.429 36.48-145.92h128M554.667 128h-128c-39.168 0-73.301 26.667-82.731 64.683l-15.104 60.245-59.733-17.067c-7.851-2.261-15.744-3.328-23.552-3.328-29.867 0-58.368 15.787-73.856 42.667l-64 110.933c-19.584 33.963-13.525 76.885 14.592 104.021l44.672 43.136-44.715 43.307c-28.16 27.179-34.219 70.101-14.635 104.021l64.085 110.933c15.488 26.923 43.989 42.667 73.856 42.667 7.808 0 15.701-1.067 23.552-3.243l59.691-17.109 15.104 60.373c9.472 37.76 43.605 64.427 82.773 64.427h128c39.168 0 73.301-26.667 82.731-64.683l15.104-60.331 59.691 17.067c7.851 2.261 15.744 3.285 23.552 3.285 29.867 0 58.368-15.787 73.856-42.667l64-110.933c19.584-33.963 13.525-76.8-14.592-104.021l-44.672-43.221 44.672-43.221c28.16-27.179 34.176-70.144 14.592-104.021l-64-110.933c-15.573-26.923-43.989-42.667-73.899-42.667-7.851 0-15.701 1.067-23.509 3.243l-59.733 17.109-15.104-60.288c-9.387-37.717-43.52-64.384-82.688-64.384z"></path>
                  <path d="M490.667 448c47.104 0 85.333 38.187 85.333 85.333 0 47.104-38.229 85.333-85.333 85.333s-85.333-38.229-85.333-85.333c0-47.147 38.229-85.333 85.333-85.333M490.667 405.333c-70.571 0-128 57.429-128 128s57.429 128 128 128 128-57.429 128-128-57.429-128-128-128z"></path>
                </svg>
              </div>
              <ul data-thq="thq-dropdown-list" className="dex-dropdown-list">
                <li
                  data-thq="thq-dropdown"
                  className="dex-dropdown list-item"
                ></li>
                <li data-thq="thq-dropdown" className="dex-dropdown1 list-item">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="dex-dropdown-toggle1"
                  >
                    <div className="dex-container06">
                      <span className="dex-text03">Slippage settings</span>
                    </div>
                    <div className="dex-container07">
                    </div>
                    <div className="dex-container09">
                    <Radio.Group value={slippage} onChange={handleSlippageChange} style={{background: "transparent"}}>
          <Radio.Button  style={{background: "transparent", color: "white"}} value={0.5}>0.5%</Radio.Button>
          <Radio.Button  style={{background: "transparent", color: "white"}} value={2.5}>2.5%</Radio.Button>
          <Radio.Button  style={{background: "transparent", color: "white"}} value={5}>5.0%</Radio.Button>
        </Radio.Group>
                    </div>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="dex-dropdown2 list-item"
                ></li>
              </ul>
            </div>
          </div>
          

          <Flex
          direction={currentFrom === "native" ? "column" : "column-reverse"}
         
        >
          
          <div id="native" className="dex-container10">
            <div className="dex-container11">
              <div className="dex-container12">
                <div className="dex-container13">
                  <img
                    alt={props.imageAlt}
                    src={props.imageSrc}
                    className="dex-image"
                  />
                  <span className="dex-text07">{props.text11}</span>
                </div>
              </div>
            </div>
            <div className="dex-container14">
              <div className="dex-container15">
                <div className="dex-text08">
                <NumericFormat
  value={nativeBalance?.displayValue}
  displayType="text"
  thousandSeparator={true}
  suffix={nativeBalance?.symbol}
  decimalScale={3}
style={{background: "transparent", textAlign: "end"}}
  renderText={(value, props) =>  <span className="dex-text08"
  {...props}> {value}</span>}
/>
                </div>
                <SwapInput
            current={currentFrom}
            type="native"
            max={nativeBalance?.displayValue}
            value={nativeValue}
            setValue={setNativeValue}
            tokenImage={tokenMetadata?.image}
            className="dex-textinput1"
          />
              <span className="dex-text08"   style={{background: "transprent"}}>
              <NumericFormat

              style={{background: "transparent", textAlign: "end"}}
  value={nativeBalance?.displayValue}
  displayType="text"
  thousandSeparator={true}
  prefix="$"
  decimalScale={3}
  className="dex-text08"
  renderText={(value, props) =>  <span className="dex-text08"
  {...props}>{value}</span>}
/>

               
                 
                </span>
              </div>
           
            </div>
          </div>
          <div className="dex-container16">

            <animate-on-reveal
              animation="rotateIn"
              duration="300ms"
              delay="0ms"
              iteration="2"
            >
              <button
                onClick={() =>
                  currentFrom === "native"
                    ? setCurrentFrom("token")
                    : setCurrentFrom("native")
                }
                id="reload"
                data-thq-animate-on-reveal="true"
                className="dex-container17"
              >
                <svg viewBox="0 0 1024 1024" className="dex-icon03">
                  <path d="M889.68 166.32c-93.608-102.216-228.154-166.32-377.68-166.32-282.77 0-512 229.23-512 512h96c0-229.75 186.25-416 416-416 123.020 0 233.542 53.418 309.696 138.306l-149.696 149.694h352v-352l-134.32 134.32z"></path>
                  <path d="M928 512c0 229.75-186.25 416-416 416-123.020 0-233.542-53.418-309.694-138.306l149.694-149.694h-352v352l134.32-134.32c93.608 102.216 228.154 166.32 377.68 166.32 282.77 0 512-229.23 512-512h-96z"></path>
                </svg>
              </button>
            </animate-on-reveal>
          </div>
          <div id="token" className="dex-container18">
            <div className="dex-container19">
              <div className="dex-container20">
                <div className="dex-container21">
                  <button className="dex-text12"
      onClick={openModal}            
>{props.text12}
                  </button>
                  <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Tokens"
      >
      
        <div style={{height: "auto", position: "relative", display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center", zIndex: "500"}}>
        <h1 style={{fontSize: "18x",  textShadow: "black 1px 1px 5px" }}>Token List</h1>
        <button className='button' onClick={closeModal}
        style={{background: "rgba(0, 0, 0, 0.1)", color: "white", border: "none", borderRadius: "50%"}}
        >X</button>
        </div>
        <div className="modalContent">
    {tokenList?.map((e, i) => {
            return (
              <div
                className="tokenChoice"
                key={i}
                onClick={() => modifyToken(i)}
              >
                <img src={e.img} alt={e.ticker} className="tokenLogo" />
                <div className="tokenChoiceNames">
                  <div className="tokenName">{e.name}</div>
                  <div className="tokenTicker">{e.ticker}</div>
                </div>
              </div>
            );
          })}
       </div>
      </Modal>
                  <svg viewBox="0 0 1024 1024" className="dex-icon06">
                    <path d="M298 426h428l-214 214z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="dex-container22">
              <div className="dex-container23">
              <div className="dex-text08">
                <NumericFormat
  value={tokenBalance?.displayValue}
  displayType="text"
  thousandSeparator={true}
  suffix={tokenBalance?.symbol}
  decimalScale={3}
style={{background: "transparent", textAlign: "end"}}
  renderText={(value, props) =>  <span className="dex-text08"
  {...props}> {value}</span>}
/>
                </div>
                <SwapInput
            current={currentFrom}
            type="token"
            max={tokenBalance?.displayValue}
            value={tokenValue}
            setValue={setTokenValue}
            className="dex-textinput1"
          />
           <div className="dex-text08">
                <NumericFormat
  value={tokenBalance?.displayValue}
  displayType="text"
  thousandSeparator={true}
prefix="$"
  decimalScale={3}
style={{background: "transparent", textAlign: "end"}}
  renderText={(value, props) =>  <span className="dex-text08"
  {...props}> {value}</span>}
/>
                </div>
              </div>
            </div>
          </div>
          </Flex>
          {!address ? (
            <>
    <div id="swap" className="dex-container24">
            <div className="dex-container25">
            <ConnectWallet
        theme={({
          colors: {
            modalBg: "rgba(0, 0, 0, 0.5)",
            primaryButtonText: "white",
            selectedTextColor: "#d9d9d9",
            separatorLine: "transparent",
            secondaryText: "white",
            secondaryButtonText: "#c2c2c7",
            primaryText: "#cccccc",
            borderColor: "rgba(100, 100, 100, 0.3)",
          },
        })}
        modalTitle={"RareBay Connect"}
        auth={{ loginOptional: false }}
        switchToActiveChain={true}
        modalSize={"compact"}
        modalTitleIconUrl={
          "https://rarebay.xyz/fav.ico"
        }
        showThirdwebBranding={false}
        style={{color: "white"}}
      />
            </div>
          </div>
            </>
          ) : (
            <>
    <div id="swap" className="dex-container24">
            <div className="dex-container25">
             <button
             
    
            onClick={executeSwap}
            py="7"
            fontSize="2xl"
            colorScheme="twitter"
            rounded="xl"
            isDisabled={loading}
          >
            {loading ? <div className="spinn" /> : "Swap Tokens ⇌"}
          </button>
          </div>
          </div>
            </>
          ) }
          <svg viewBox="0 0 877.7142857142857 1024" className="dex-icon10">
            <path d="M431.429 603.429c0 4.571-2.286 9.714-5.714 13.143l-189.714 189.714 82.286 82.286c6.857 6.857 10.857 16 10.857 25.714 0 20-16.571 36.571-36.571 36.571h-256c-20 0-36.571-16.571-36.571-36.571v-256c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l82.286 82.286 189.714-189.714c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l65.143 65.143c3.429 3.429 5.714 8.571 5.714 13.143zM877.714 109.714v256c0 20-16.571 36.571-36.571 36.571-9.714 0-18.857-4-25.714-10.857l-82.286-82.286-189.714 189.714c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-65.143-65.143c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l189.714-189.714-82.286-82.286c-6.857-6.857-10.857-16-10.857-25.714 0-20 16.571-36.571 36.571-36.571h256c20 0 36.571 16.571 36.571 36.571z"></path>
          </svg>

        </div>
      </div>
      <div style={{display: "flex", width: "100%", justifyContent: "center", alignItems: "center", marginTop: "-2%", boxShadow: "1px 1px 20px initial"}} className='column'>
        
      <Ap />
      <Ap2 />
      </div>
      <style jsx>
        {`
          .dex-container {
            color: var(--dl-color-gray-900);
            width: 100%;
            height: 500px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .dex-container01 {
            width: auto;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            overflow: hidden;
            position: relative;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .dex-container02 {
            width: 100%;
            height: 43px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .dex-link {
            display: contents;
          }
          .dex-container03 {
            flex: 0 0 auto;
            width: 117px;
            cursor: pointer;
            height: 40px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            transition: 0.3s;
            align-items: center;
            justify-content: center;
            text-decoration: none;
          }
          .dex-container03:hover {
            background: rgba(100, 108, 100, 0.21);
            border-radius: var(--dl-radius-radius-radius8);
          }

          .dex-text {
            color: initial;
            font-family: 'Arial Black';
          }
          .dex-container04 {
            flex: 0 0 auto;
            width: 112px;
            cursor: pointer;
            height: 39px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            transition: 0.3s;
            align-items: center;
            justify-content: center;
          }
          .dex-container04:hover {
            background: rgba(100, 108, 100, 0.21);
            border-radius: var(--dl-radius-radius-radius8);
          }

          .dex-text01 {
            color: initial;
            font-family: 'Arial Black';
          }
          .dex-container05 {
            flex: 0 0 auto;
            width: 112px;
            cursor: pointer;
            height: 39px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            transition: 0.3s;
            align-items: center;
            justify-content: center;
          }
          .dex-container05:hover {
            background: rgba(100, 108, 100, 0.21);
            border-radius: var(--dl-radius-radius-radius8);
          }

          .dex-text02 {
            color: initial;
            font-family: 'Arial Black';
          }
          .dex-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .dex-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 64px;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .dex-icon {
            fill: #909090;
            width: 33px;
            height: 37px;
            transition: 0.3s;
          }
          .dex-icon:hover {
            scale: 1.1;
          }
          .dex-dropdown-list {
            top: 0;
            right: 100%;
            width: max-content;
            height: 119px;
            display: none;
            padding: var(--dl-space-space-unit);
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #171717;
            list-style-position: inside;
          }
          .dex-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .dex-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            background: transparent;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius2);
            flex-direction: column;
          }
          .dex-dropdown-toggle1 {
            fill: #595959;
            color: #595959;
            width: 100%;
            height: 98px;
            display: inline-flex;
            background: transparent;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .dex-container06 {
            width: 100%;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .dex-text03 {
            color: #d2d2d2;
            margin-bottom: 5%;
            font-family: 'Arial Black';
          }
          .dex-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .dex-container08 {
            flex: 0 0 auto;
            width: 136px;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .dex-radiobutton {
            width: 24px;
            height: 24px;
          }
          .dex-text04 {
            width: 100%;
            cursor: pointer;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .dex-text05 {
            color: #adadad;
          }
          .dex-container09 {
            flex: 0 0 auto;
            width: 190px;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .dex-text06 {
            width: 80px;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 500;
            margin-left: 0px;
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .dex-textinput {
            width: 50px;
            height: 31px;
            text-align: center;
            border-width: 0px;
            background-color: #1c1c1c;
          }
          .dex-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .dex-container10 {
            width: 100%;
            height: 120px;
            margin: 4px;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 0px 0px 15px 0px #080808;
            align-items: center;
            border-radius: 16px;
            justify-content: space-between;
            background-color: rgba(14, 14, 14, 0.79);
          }
          .dex-container11 {
            flex: 0 0 auto;
            width: 110px;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .dex-container12 {
            width: auto;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .dex-container13 {
            width: 110px;
            height: 33px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: center;
            background-color: rgba(41, 41, 41, 0.7);
          }
          .dex-image {
            width: 17px;
            height: 19px;
            align-self: center;
            object-fit: cover;
          }
          .dex-text07 {
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
          }
          .dex-container14 {
            flex: 0 0 auto;
            width: 318px;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .dex-container15 {
            flex: 0 0 auto;
            width: 318px;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .dex-text08 {
            color: rgb(92, 92, 92);
            font-size: 12px;
            background-color: transparent;
          }
          .dex-textinput1 {
            color: gray;
            width: 318px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            padding: var(--dl-space-space-unit);
            font-size: 30px;
            text-align: right;
            font-family: 'Courier New';
            border: none;
            border-radius: 16px;
            backdop-filter: blur(10px);
            background-color: transparent;
          }
          .dex-text11 {
            color: rgb(88, 88, 88);
          }
          .dex-container16 {
            width: 100%;
            height: 0px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .dex-container17 {
            width: 40px;
            cursor: pointer;
            height: 40px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            z-index: auto;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.74);
            transition: 0.3s;
            align-items: center;
            border-color: rgba(41, 41, 41, 0.35);
            border-width: 6px;
            border-radius: var(--dl-radius-radius-round);
            backdrop-filter: blur(50px);
            justify-content: center;
            background-color: rgba(22, 22, 22, 0.72);
          }
          .dex-container17:hover {
            animation-name: rotateIn;
            animation-delay: 1s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            scale: 1.1;
          }
          .dex-icon03 {
            fill: #d9d9d9;
            width: auto;
            height: 24px;
          }
          .dex-container18 {
            width: 100%;
            height: 120px;
            margin: 4px;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 0px 0px 15px 0px #080808;
            align-items: center;
            border-radius: 16px;
            justify-content: space-between;
            background-color: rgba(14, 14, 14, 0.79);
          }
          .dex-container19 {
            flex: 0 0 auto;
            width: 110px;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .dex-container20 {
            width: 100%;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .dex-container21 {
            width: 110px;
            height: 33px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: center;
            background-color: rgba(41, 41, 41, 0.7);
          }
          .dex-text12 {
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
          }
          .dex-icon06 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            align-self: center;
          }
          .dex-container22 {
            flex: 0 0 auto;
            width: 318px;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .dex-container23 {
            flex: 0 0 auto;
            width: 318px;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .dex-text13 {
            color: rgb(92, 92, 92);
            font-size: 12px;
margin-top: 1%;
          }
          .dex-textinput2 {
            color: gray;
            width: 318px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            padding: var(--dl-space-space-unit);
            font-size: 30px;
            text-align: right;
            font-family: 'Courier New';
            border-width: 0px;
            border-radius: 16px;
            backdop-filter: blur(10px);
            background-color: transparent;
          }
          .dex-text16 {
            color: rgb(88, 88, 88);
          }
          .dex-container24 {
            width: 100%;
            height: 77px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .dex-container25 {
            width: 100%;
            cursor: pointer;
            height: 62px;
            display: flex;
            box-shadow: 5px 5px 10px 0px #0a0a0a;
            margin-top: var(--dl-space-space-twounits);
            transition: 0.3s;
            align-items: center;
            border-color: #404040;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: rgba(30, 30, 30, 0.75);
          }
          .dex-container25:hover {
            background: rgba(35, 41, 41, 0.7);
          }
          .dex-text17 {
            color: rgb(224, 224, 224);
            font-size: 20px;
            text-align: center;
            font-family: 'Exo 2';
            font-weight: 400;
            text-shadow: 0px 0px 10px;
            letter-spacing: 2px;
          }
          .dex-container26 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .dex-text18 {
            font-size: 13px;
            align-self: center;
            font-family: 'Courier New';
            margin-right: var(--dl-space-space-halfunit);
          }
          .dex-text19 {
            color: #e6e6e6;
            font-size: 13px;
            align-self: center;
            font-family: 'Courier New';
          }
          .dex-container27 {
            flex: 0 0 auto;
            width: auto;
            height: 100%;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            margin-right: 0px;
            justify-content: flex-end;
          }
          .dex-icon08 {
            fill: #5e5e5e;
            width: 24px;
            height: 24px;
          }
          .dex-text20 {
            padding: var(--dl-space-space-halfunit);
            font-size: 13px;
            font-family: 'Courier New';
          }
          .dex-text21 {
            padding: var(--dl-space-space-halfunit);
            font-size: 13px;
            font-family: 'Courier New';
          }
          .dex-icon10 {
            top: 10px;
            fill: #d9d9d9;
            right: 12px;
            width: 24px;
            cursor: pointer;
            height: 24px;
            position: absolute;
          }

          @media (max-width: 1200px) {
            .dex-container14 {
              width: 132px;
            }
            .dex-container15 {
              width: 131px;
            }
            .dex-textinput1 {
              width: 237px;
            }
            .dex-container22 {
              width: 132px;
            }
            .dex-container23 {
              width: 131px;
            }
            .dex-textinput2 {
              width: 237px;
            }
          }
          @media (max-width: 767px) {
            .dex-container10 {
              position: relative;
            }
            .dex-container14 {
              width: auto;
            }
            .dex-textinput1 {
              width: 252px;
              height: 38px;
            }
            .dex-container17 {
              position: static;
            }
            .dex-container18 {
              position: relative;
            }
            .dex-container22 {
              width: auto;
            }
            .dex-textinput2 {
              width: 252px;
              height: 38px;
            }
          }
          @media (max-width: 479px) {
            .dex-container01 {
              width: 100%;
              padding: var(--dl-space-space-unit);
            }
            .dex-container02 {
              width: 100%;
            }
            .dex-container03 {
              width: auto;
              margin: 4px;
              padding: var(--dl-space-space-unit);
            }
            .dex-text {
              color: initial;
            }
            .dex-container04 {
              width: auto;
              margin: 4px;
              padding: var(--dl-space-space-unit);
            }
            .dex-text01 {
              color: initial;
            }
            .dex-container05 {
              width: auto;
              margin: 4px;
              padding: var(--dl-space-space-unit);
            }
            .dex-text02 {
              color: initial;
            }
            .dex-dropdown-toggle {
              width: 49px;
            }
            .dex-container12 {
              height: 91px;
              align-self: center;
              justify-content: center;
            }
            .dex-container13 {
              background-color: rgba(41, 41, 41, 0.38);
            }
            .dex-text08 {
              top: 113px;
              left: var(--dl-space-space-twounits);
            }
            .dex-textinput1 {
              width: 100%;
            }
            .dex-text11 {
              top: 162px;
              color: rgb(88, 88, 88);
              right: 32px;
              width: auto;
              font-size: 16px;
            }
            .dex-container20 {
              height: 91px;
              align-self: center;
              justify-content: center;
            }
            .dex-container21 {
              background-color: rgba(41, 41, 41, 0.41);
            }
            .dex-text13 {
              top: 113px;
              left: var(--dl-space-space-twounits);
            }
            .dex-textinput2 {
              width: 100%;
            }
            .dex-text16 {
              top: 162px;
              color: rgb(88, 88, 88);
              right: 32px;
              width: auto;
              font-size: 16px;
            }
            .dex-container25 {
              width: 100%;
            }
            .dex-text18 {
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
            }
            .dex-text19 {
              color: #42ff32;
            }
            .dex-text21 {
              color: #7edbff;
            }
            .dex-icon10 {
              fill: initial;
            }
          }
        `}
      </style>
    </>
  )
}

Dex.defaultProps = {
  text15: 'Max slippage',
  imageSrc: '/core-200w.webp',
  textinputPlaceholder2: 'O.O',
  text31: '0.5%',
  text11: 'CORE',
  text14: '$0.0 ',
  text6: '0.00 USDT',
  text12: "SELECT",
  imageAlt: 'image',
  text8: 'Swap',
  text1: 'Pay',
  text831: 'Buy',
  text4: '',
  text13: 'GAS',
  text83: 'Bridge',
  text17: 'Receive.',
  rootClassName: '',
  text5: '1 CORE',
}

Dex.propTypes = {
  text15: PropTypes.string,
  imageSrc: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  text31: PropTypes.string,
  text11: PropTypes.string,
  text14: PropTypes.string,
  text6: PropTypes.string,
  text12: PropTypes.string,
  imageAlt: PropTypes.string,
  text8: PropTypes.string,
  text1: PropTypes.string,
  text831: PropTypes.string,
  text4: PropTypes.string,
  text13: PropTypes.string,
  text83: PropTypes.string,
  text17: PropTypes.string,
  rootClassName: PropTypes.string,
  text5: PropTypes.string,
  type: "native" | "token",
  tokenImage: PropTypes.string,
  current: PropTypes.string,
  setValue: PropTypes.number,
  max: PropTypes.any,
  value: PropTypes.string,
}

export default Dex
