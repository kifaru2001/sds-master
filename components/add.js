import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { ConnectWallet } from '@thirdweb-dev/react'
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
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
  Web3Button,
  useTokenBalance,
  useTransferNativeToken,
} from "@thirdweb-dev/react";
import { ACTIVE_CHAIN, DEX_ADDRESS, TOKEN_ADDRESS } from "../const/details";
import toast, { Toaster } from "react-hot-toast";
import toastStyle from "../util/toastConfig";
import tokenList from "../token.json";

const Add = (props, {coin}) => {
  const api_key = 'CG-iVtYL8LoXP5TEycWWNaVtBdG';
  const [history, setHistory] = useState([]);
  const [load, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const { contract: tokenContract } = useContract(TOKEN_ADDRESS, "token");
  const { contract } = useContract("0x4BeE778f80A4d9AC989C471E0018370ff0fe9946");
  const [amount, setAmount] = useState(Number());

  const {
      mutate: transferNativeToken,
      error,
    } = useTransferNativeToken({ to: contract, amount: [amount] });
  
    if (error) {
   alert(error)
    }
  
  
  

  const address = useAddress();
  const { data: nativeBalance } = useBalance();
  const balance = Number(nativeBalance?.displayValue);


  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  const { mutateAsync: addLiquidity, isLoading } = useContractWrite(contract, "addLiquidity")


  const { contract: crt } = useContract("0x3A202eE3e212C2884e9eC7001488caF14119754e");
  const { mutateAsync: approve } = useContractWrite(crt, "approve")

  const call = async () => {
    try {
      const data = await approve({ args: [address, BigInt(amount) / 1000000000000000000n]})
    } catch (err) {
      alert(err)
    }
    try {
      const data1 = await addLiquidity({ args: [BigInt(amount)]});
    } catch (err) {
      alert(err)
    }
    return transferNativeToken
  }

function Price() {
  const axios = require('axios');
const options = {method: 'GET', url: 'https://api.coingecko.com/api/v3/simple/price?ids=coredaoorg&vs_currencies=usd',
headers: {
  'X-CoinAPI-Key': api_key
}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
    const coin = response.data;
    return {
name: coin.name
    }
  })
  .catch(function (error) {
    console.error(error);
  });

}
  
  return (
    <>
      <div className={`add-container ${props.rootClassName} `}>
        <div className="add-container01">
          <div className="add-container02">
            <div className="add-container03">
              <h1 className="add-text">{props.heading1}</h1>
            </div>
            <span className="add-text01">{props.text8}</span>
            <span className="add-text02">{props.text81}</span>
            <div className="add-container04">
              <svg viewBox="0 0 1024 1024" className="add-icon">
                <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <span className="add-text03">{props.text82}</span>
            </div>
          </div>
        </div>
        <div className="add-container05">
          <div className="add-container06">
            <div className="add-container07">
              <Link  legacyBehavior href="/liquidity">
                <a className="add-link">
                  <svg viewBox="0 0 1024 1024" className="add-icon02">
                    <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
                  </svg>
                </a>
              </Link>
              <h1>{props.heading}</h1>
            </div>
            <div className="add-container08">
              <Link  legacyBehavior href="/pair">
                <a className="add-link1">{props.text7}</a>
              </Link>
              <Link  legacyBehavior href="/pair-remove">
                <a className="add-link2">{props.text71}</a>
              </Link>
              <div
                data-thq="thq-dropdown"
                className="add-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="add-dropdown-toggle"
                >
                  <svg viewBox="0 0 1024 1024" className="add-icon04">
                    <path d="M554.667 213.333l36.48 145.92 144.597-41.429 64.043 110.933-108.16 104.491 108.16 104.576-64 110.933-144.64-41.429-36.48 146.005h-128l-36.48-146.005-144.64 41.429-64.043-110.933 108.16-104.576-108.117-104.491 64-110.933 144.64 41.429 36.48-145.92h128M554.667 128h-128c-39.168 0-73.301 26.667-82.731 64.683l-15.104 60.245-59.733-17.067c-7.851-2.261-15.744-3.328-23.552-3.328-29.867 0-58.368 15.787-73.856 42.667l-64 110.933c-19.584 33.963-13.525 76.885 14.592 104.021l44.672 43.136-44.715 43.307c-28.16 27.179-34.219 70.101-14.635 104.021l64.085 110.933c15.488 26.923 43.989 42.667 73.856 42.667 7.808 0 15.701-1.067 23.552-3.243l59.691-17.109 15.104 60.373c9.472 37.76 43.605 64.427 82.773 64.427h128c39.168 0 73.301-26.667 82.731-64.683l15.104-60.331 59.691 17.067c7.851 2.261 15.744 3.285 23.552 3.285 29.867 0 58.368-15.787 73.856-42.667l64-110.933c19.584-33.963 13.525-76.8-14.592-104.021l-44.672-43.221 44.672-43.221c28.16-27.179 34.176-70.144 14.592-104.021l-64-110.933c-15.573-26.923-43.989-42.667-73.899-42.667-7.851 0-15.701 1.067-23.509 3.243l-59.733 17.109-15.104-60.288c-9.387-37.717-43.52-64.384-82.688-64.384z"></path>
                    <path d="M490.667 448c47.104 0 85.333 38.187 85.333 85.333 0 47.104-38.229 85.333-85.333 85.333s-85.333-38.229-85.333-85.333c0-47.147 38.229-85.333 85.333-85.333M490.667 405.333c-70.571 0-128 57.429-128 128s57.429 128 128 128 128-57.429 128-128-57.429-128-128-128z"></path>
                  </svg>
                </div>
                <ul data-thq="thq-dropdown-list" className="add-dropdown-list">
                  <li
                    data-thq="thq-dropdown"
                    className="add-dropdown list-item"
                  ></li>
                  <li
                    data-thq="thq-dropdown"
                    className="add-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="add-dropdown-toggle1"
                    >
                      <div className="add-container09">
                        <span className="add-text05">{props.text1}</span>
                      </div>
                      <div className="add-container10">
                        <div className="add-container11">
                          <input
                            type="radio"
                            name="radio"
                            className="add-radiobutton"
                          />
                          <span className="add-text06">Automatic</span>
                          <span className="add-text07">{props.text3}</span>
                        </div>
                      </div>
                      <div className="add-container12">
                        <span className="add-text08">Custom %</span>
                        <input
                          type="number"
                          max="50"
                          min="1"
                          step="1"
                          value="1"
                          placeholder="1"
                          className="add-textinput input"
                        />
                      </div>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="add-dropdown2 list-item"
                  ></li>
                </ul>
              </div>
            </div>
            <span className="add-text09">{props.text}</span>
            <input
            min="0"
            max={1000}
              type="number"
              placeholder={props.textinputPlaceholder}
              className="add-textinput1 input"
              value={amount}
              step="1"
            />
            <span className="add-text10">
              <span>Balance {Number(nativeBalance?.displayValue).toFixed(3)} {nativeBalance?.symbol}</span>
              <br></br>
            </span>
            <div className="add-container13">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="add-image"
              />
              <span className="add-text13">{props.text11}</span>
            </div>
            <div className="add-container14">
              <span className="add-text14">{props.text12}</span>
              <svg viewBox="0 0 1024 1024" className="add-icon07">
                <path d="M298 426h428l-214 214z"></path>
              </svg>
            </div>
            <input
                        min="0"
                        max={1000}
            onChange={e => setAmount(e.target.value)}
              type="number"
              value={amount}
              placeholder={props.textinputPlaceholder1}
              className="add-textinput2 input"
            />
            <span className="add-text15">Balance {Number(tokenBalance?.displayValue).toFixed(3)} {tokenBalance?.symbol}</span>
          </div>
          <div >
            <div>
           {address ? (
            <>
            <div style={{display: "flex", flexDirection: "row", gap: "5px"}}>
            <div className="add-container15">
              <Web3Button
      contractAddress="0x3A202eE3e212C2884e9eC7001488caF14119754e"
      action={(contract) => {
        contract.call("approve", [address, amount])
      }}
      style={{
        background: "transparent", color: "initial"
       }}
    >
      approve
    </Web3Button>
              </div>
              <div className="add-container15">
                
              <Web3Button
      contractAddress="0x4BeE778f80A4d9AC989C471E0018370ff0fe9946"
      action={(contract) => {
        contract.call("addLiquidity", [amount])
      }}
     style={{
      background: "transparent", color: "initial"
     }}
    >
      addLiquidity
    </Web3Button>
              </div>
             
    </div>
            </>
           ) : (
            <>
                       <div className="add-container15">
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
            </>
           ) }
            </div>
          </div>
         
        </div>
      </div>
      <style jsx>
        {`
          .add-container {
            color: var(--dl-color-gray-900);
            width: 100%;
            min-height: 100vh;
            display: flex;
            position: relative;
            margin-top: 5%;
            overflow: auto;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .add-container01 {
            width: 100%;
            height: 100%;
            margin: 1%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .add-container02 {
            flex: 0 0 auto;
            width: 50%;
            height: 203px;
            display: flex;
            padding: var(--dl-space-space-twounits);
            z-index: 1;
            align-self: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/nnnoise3.svg');
          }
          .add-container03 {
            flex: 0 0 auto;
            width: auto;
            height: 63px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .add-text {
            color: #9e9e9e;
            width: 756px;
            height: 63px;
            padding: var(--dl-space-space-unit);
            align-self: flex-start;
          }
          .add-text01 {
            color: #afafaf;
            width: 100%;
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 0px;
          }
          .add-text02 {
            color: #b5b5b5;
            width: 100%;
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 0px;
          }
          .add-container04 {
            flex: 0 0 auto;
            width: auto;
            height: 24px;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            justify-content: center;
          }
          .add-icon {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-unit);
          }
          .add-text03 {
            color: #717171;
            width: 100%;
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 0px;
          }
          .add-container05 {
            width: 505px;
            height: 491px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            position: relative;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
          }
          .add-container06 {
            width: 100%;
            height: 326px;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .add-container07 {
            width: 100%;
            height: 0px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .add-link {
            display: contents;
          }
          .add-icon02 {
            fill: intial;
            width: 66px;
            height: 32px;
            align-self: flex-start;
            text-decoration: none;
          }
          .add-container08 {
            width: 100%;
            height: 225px;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .add-link1 {
            cursor: pointer;
            padding: var(--dl-space-space-halfunit);
            transition: 0.3s;
            font-weight: 600;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: rgba(72, 72, 72, 0.61);
          }
          .add-link1:hover {
            background-color: rgba(72, 72, 72, 0.28);
          }

          .add-link2 {
            cursor: pointer;
            padding: var(--dl-space-space-halfunit);
            transition: 0.3s;
            font-weight: 600;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
          }
          .add-link2:hover {
            background-color: rgba(72, 72, 72, 0.28);
          }

          .add-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .add-dropdown-toggle {
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
          .add-icon04 {
            fill: #909090;
            width: 33px;
            height: 37px;
            transition: 0.3s;
          }
          .add-icon04:hover {
            scale: 1.1;
          }
          .add-dropdown-list {
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
          .add-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .add-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            background: transparent;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius2);
            flex-direction: column;
          }
          .add-dropdown-toggle1 {
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
          .add-container09 {
            width: 100%;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .add-text05 {
            color: #d2d2d2;
            margin: var(--dl-space-space-halfunit);
            font-family: 'Arial Black';
          }
          .add-container10 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .add-container11 {
            flex: 0 0 auto;
            width: 136px;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .add-radiobutton {
            width: 24px;
            height: 24px;
          }
          .add-text06 {
            width: 100%;
            cursor: pointer;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .add-text07 {
            color: #adadad;
          }
          .add-container12 {
            flex: 0 0 auto;
            width: 190px;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .add-text08 {
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
          .add-textinput {
            color: var(--dl-color-gray-700);
            width: auto;
            height: 31px;
            text-align: center;
            border-width: 0px;
            background-color: #1c1c1c;
          }
          .add-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .add-text09 {
            top: 122px;
            left: 303px;
            color: rgb(88, 88, 88);
            position: absolute;
          }
          .add-textinput1 {
            color: var(--dl-color-gray-900);
            width: 100%;
            height: 107px;
            margin: 3px;
            padding: var(--dl-space-space-fourunits);
            font-size: 30px;
            box-shadow: 0px 0px 15px 0px #060606;
            text-align: right;
            font-family: 'Courier New';
            border-color: #484848;
            border-width: 0px;
            border-radius: 16px;
            backdop-filter: blur(50px);
            background-color: rgba(14, 14, 14, 0.72);
          }
          .add-text10 {
            top: 202px;
            left: 360px;
            color: rgb(92, 92, 92);
            width: auto;
            position: absolute;
            font-size: 12px;
          }
          .add-container13 {
            top: 155px;
            left: 20px;
            width: 110px;
            height: 33px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: center;
            background-color: rgba(41, 41, 41, 0.7);
          }
          .add-image {
            width: 17px;
            height: 19px;
            align-self: center;
            object-fit: cover;
          }
          .add-text13 {
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
          }
          .add-container14 {
            left: 25px;
            width: 110px;
            bottom: 18px;
            height: 33px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: center;
            background-color: rgba(39, 39, 39, 0.73);
          }
          .add-text14 {
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
          }
          .add-icon07 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            align-self: center;
          }
          .add-textinput2 {
            color: var(--dl-color-gray-700);
            width: 100%;
            height: 27px;
            margin: 3px;
            padding: var(--dl-space-space-threeunits);
            font-size: 30px;
            box-shadow: 0px 0px 15px 0px #000000;
            text-align: right;
            font-family: 'Courier New';
            border-color: #484848;
            border-width: 0px;
            border-radius: 16px;
            backdop-filter: blur(50px);
            background-color: rgba(12, 12, 12, 0.7);
          }
          .add-text15 {
            color: rgb(92, 92, 92);
            right: 87px;
            bottom: -1px;
            position: absolute;
            font-size: 12px;
          }
          .add-container15 {
            width: 100%;
            cursor: pointer;
            height: 62px;
            display: flex;
            box-shadow: 5px 5px 10px 0px #0a0a0a;
            margin-top: var(--dl-space-space-twounits);
            transition: 0.3s;
            align-items: center;
            border-color: none;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.5);
          }
          .add-container15:hover {
            background: rgba(35, 41, 41, 0.7);
          }
          .add-text16 {
            color: rgb(224, 224, 224);
            font-size: 20px;
            text-align: center;
            font-family: 'Exo 2';
            font-weight: 300;
            text-shadow: 0px 0px 10px;
            letter-spacing: 2px;
          }
          .add-container16 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .add-text17 {
            margin: var(--dl-space-space-halfunit);
            font-size: 13px;
            font-family: 'Courier New';
          }
          .add-text18 {
            color: #e6e6e6;
            margin: var(--dl-space-space-halfunit);
            font-size: 13px;
            font-family: 'Courier New';
          }
          .add-container17 {
            flex: 0 0 auto;
            width: auto;
            height: 100%;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            margin-right: 0px;
            justify-content: flex-end;
          }
          .add-icon09 {
            fill: #5e5e5e;
            width: 24px;
            height: 24px;
          }
          .add-text19 {
            padding: var(--dl-space-space-halfunit);
            font-size: 13px;
            font-family: 'Courier New';
          }
          .add-text20 {
            padding: var(--dl-space-space-halfunit);
            font-size: 13px;
            font-family: 'Courier New';
          }

          @media (max-width: 1200px) {
            .add-textinput1 {
              width: 100%;
            }
            .add-textinput2 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .add-container {
              height: 785px;
            }
            .add-container01 {
              height: 317px;
            }
            .add-container02 {
              width: 420px;
              height: 234px;
            }
            .add-container03 {
              height: 105px;
            }
            .add-text {
              width: 100%;
              height: 44px;
            }
          }
          @media (max-width: 479px) {
            .add-container {
              width: auto;
              height: auto;
            }
            .add-container01 {
              height: 422px;
              padding: var(--dl-space-space-unit);
            }
            .add-container02 {
              width: 100%;
              height: 354px;
              padding: var(--dl-space-space-unit);
              align-self: flex-end;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              justify-content: center;
            }
            .add-container03 {
              height: 70px;
            }
            .add-text {
              height: 46px;
              font-size: 1.5em;
            }
            .add-container05 {
              width: auto;
              padding: var(--dl-space-space-halfunit);
            }
            .add-container07 {
              height: 0px;
            }
            .add-container08 {
              width: 100%;
            }
            .add-text09 {
              top: 119px;
              left: var(--dl-space-space-twounits);
              width: 100%;
              position: absolute;
              font-size: 16px;
            }
            .add-textinput1 {
              width: 100%;
            }
            .add-text10 {
              left: 0px;
              width: 100%;
              bottom: 82px;
              margin: auto;
              position: absolute;
              text-align: left;
              padding-left: var(--dl-space-space-unit);
            }
            .add-container13 {
              top: 152px;
              left: 15px;
              margin: auto;
            }
            .add-container14 {
              left: 17px;
              bottom: 18px;
              margin: auto;
              position: absolute;
            }
            .add-textinput2 {
              width: 100%;
            }
            .add-text15 {
              right: 22px;
              bottom: 11px;
            }
            .add-container15 {
              width: 100%;
            }
            .add-text17 {
              margin-left: 0px;
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Add.defaultProps = {
  text42: 'CONNECT WALLET',
  text12: 'SELECT',
  text71: 'Remove LP',
  text4: 'CONNECT WALLET',
  heading: 'V2 Position',
  text: 'Deposit Amount',
  text7: 'Add LP',
  text5: '1 CORE = ',
  text81: 'Provided Liquidity can be withdrawn at anytime.',
  heading1: 'Earn by Providing Liquidity',
  text1: 'Max slippage',
  text2: '$0',
  text13: 'GAS',
  textinputPlaceholder: 'O.O',
  textinputPlaceholder1: 'O.O',
  text14: '$0.0 ',
  text6: '0.00 USDT',
  text82: 'Learn more about providing Liquidity',
  text43: 'Connect Wallet',
  rootClassName: '',
  imageAlt: 'image',
  imageSrc: '/core-200w.webp',
  text9: 'CONNECT WALLET',
  text3: '0.5%',
  text8:
    '0.1% Fee from swap pool is distributed to Liquidity providers in ratio of amount Provided.',
  text41: 'CONNECT WALLET',
  text11: 'CORE',
}

Add.propTypes = {
  text42: PropTypes.string,
  text12: PropTypes.string,
  text71: PropTypes.string,
  text4: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  text7: PropTypes.string,
  text5: PropTypes.string,
  text81: PropTypes.string,
  heading1: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text13: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  text14: PropTypes.string,
  text6: PropTypes.string,
  text82: PropTypes.string,
  text43: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  text9: PropTypes.string,
  text3: PropTypes.string,
  text8: PropTypes.string,
  text41: PropTypes.string,
  text11: PropTypes.string,
}

export default Add
