import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Nav from '../components/nav'
import {
  ConnectWallet,
  MediaRenderer,
  useAddress,
  useContract,
  useContractMetadata,
  useOwnedNFTs,
  useUser,
} from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getUser } from "../auth.config";
import { contractAddress } from "../const/yourDetails";

import checkBalance from "../util/checkBalance";
import CoreBlockchain from "@thirdweb-dev/chains"
import truncateEthAddress from 'truncate-eth-address';
import toast, { Toaster } from "react-hot-toast";
import toastStyle from "../util/toastConfig";
import AppComponent from '../components/load';
import {Shield} from '@web3uikit/icons'


const Verify = (props) => {
  const { contract } = useContract(contractAddress);
  const { data: contractMetadata, isLoading: contractLoading } =
    useContractMetadata(contract);
  const address = useAddress();
  const { data: nfts } = useOwnedNFTs(contract, address);
  const router = useRouter();

  useEffect(() => {
    if (!nfts?.length >= 1) {
      toast(`You need to Own a RAR310NE NFT to proceed`, {
        icon: "⚡",
        style: toastStyle,
        position: "bottom-center",
      });
    }

  }, [nfts, router, address]);

if (contractLoading) {
  return <AppComponent />
}
return(
    <>
      <div className="verify-container">
      <Toaster position="bottom-center" reverseOrder={false} />
        <Head>
          <title>
            Verify - Fast! secure! Rare! Decentralized Exchange
          </title>
          <meta
            name="description"
            content="Verify, Mine, Stake, Trade, Swap, Track, Inscribe, Farm, Earn, Borrow, Lend, play! faster than ever, seamlessly anywhere anytime. "
          />
          <meta
            property="og:title"
            content="Verify - Crazy-Fast! secure! Rare! Decentralized Exchange"
          />
          <meta
            property="og:description"
            content="Verify, Mine, Stake, Trade, Swap, Track, Inscribe, Farm, Earn, Borrow, Lend, play! faster than ever, seamlessly anywhere anytime. "
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/570fd2b2-89a0-4703-b4a7-3e4f1651829b/fb5a79b8-3e32-4626-b82b-b7d8be5392f1?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div className="verify-container01">
          <Nav rootClassName="nav-root-class-name11"></Nav>
        </div>
        <div className="verify-container02">
          <div className="verify-container03">
            <div className="verify-container04">
              <div className="verify-container05">
              <Shield fontSize='30px' style={{color: "white"}}/>
                <h1 className="verify-text">
             
                  RAREKYC</h1>
                <div className="verify-container06">
                  <div
                    data-thq="thq-dropdown"
                    className="verify-thq-dropdown list-item"
                  >
                    <ul
                      data-thq="thq-dropdown-list"
                      className="verify-dropdown-list"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="verify-dropdown list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="verify-dropdown-toggle"
                        >
                          <svg viewBox="0 0 1024 1024" className="verify-icon">
                            <path d="M639.778 475.892h44.21l-51.012 226.178-66.324-318.010h-106.55l-77.114 318.010-57.816-318.010h-111.394l113.092 511.88h108.838l76.294-302.708 68.256 302.708h100.336l129.628-511.88h-170.446v91.832z"></path>
                            <path d="M917.806 229.076c-22.21-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.886 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924v0zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.982 17.78 50.678 41.878 81.374 72.572v0zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.324 32 32 32h224v624z"></path>
                          </svg>
                          <span className="verify-text01">Tutorials</span>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="verify-dropdown1 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="verify-dropdown-toggle1"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="verify-icon03"
                          >
                            <path d="M1024 320l-512-256-512 256 512 256 512-256zM512 148.97l342.058 171.030-342.058 171.030-342.058-171.030 342.058-171.030zM921.444 460.722l102.556 51.278-512 256-512-256 102.556-51.278 409.444 204.722zM921.444 652.722l102.556 51.278-512 256-512-256 102.556-51.278 409.444 204.722z"></path>
                          </svg>
                          <span className="verify-text02">V1 Liquidity</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {
                     (!nfts?.length <= 0 || "") ? (
                      <>
                      <div style={{gap: 5, display: "flex"}}>
                      <Link legacyBehavior href="/mining">
                  <a className="verify-link">
                    <div className="verify-container07">
                      <svg viewBox="0 0 1024 1024" className="verify-icon05">
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                      <span className="verify-text03">Mine</span>
                    </div>
                  </a>
                </Link>
                <Link legacyBehavior href="/step-one">
                  <a className="verify-link">
                    <div className="verify-container07">
                      <svg viewBox="0 0 1024 1024" className="verify-icon05">
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                      <span className="verify-text03">Verify</span>
                    </div>
                  </a>
                </Link>
                      </div>
                   
                      </>
                    ) : (
                      <>
                          <Link legacyBehavior href="/step-one">
                  <a className="verify-link">
                    <div className="verify-container07">
                      <svg viewBox="0 0 1024 1024" className="verify-icon05">
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                      <span className="verify-text03">Verify</span>
                    </div>
                  </a>
                </Link>
                    
                      </>
                    ) 
                }
               
              </div>
              <div className="verify-container08">
               
                {
                  (!nfts?.length <= 0 || "")  ? (
                    <>
       <svg viewBox="0 0 1024 1024" className="verified-icon07" style={{fill: "rgba(200, 150, 50, 0.8)", height: "30px"}}>
                  <path d="M960 608l-288 288-96-96-64 64 160 160 352-352z"></path>
                  <path d="M448 768h320v-115.128c-67.22-39.2-156.308-66.11-256-74.26v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h448v-64z"></path>
                </svg>
                <h1 className="verify-text04" style={{color: "rgb(200, 150, 50)"}}>Eligible</h1>

<span className="verify-text05">
  <p style={{color: "rgb(200, 150, 50)"}}>{address?.slice(0, 6)}...{address?.slice(address.length - 6)}</p>
</span>
                    </>
                  ) : (
                    <>
                  

<svg
                  viewBox="0 0 1165.165714285714 1024"
                  className="verify-icon07"
                >
                  <path d="M402.286 512c-121.143 0-219.429-98.286-219.429-219.429s98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429-98.286 219.429-219.429 219.429zM1017.714 694.857l142.286 142.286c3.429 3.429 5.143 8 5.143 13.143 0 4.571-1.714 9.143-5.143 12.571l-77.714 77.714c-3.429 3.429-8 5.143-12.571 5.143-5.143 0-9.714-1.714-13.143-5.143l-142.286-142.286-142.286 142.286c-3.429 3.429-8 5.143-13.143 5.143-4.571 0-9.143-1.714-12.571-5.143l-77.714-77.714c-3.429-3.429-5.143-8-5.143-12.571 0-5.143 1.714-9.714 5.143-13.143l142.286-142.286-142.286-142.286c-3.429-3.429-5.143-8-5.143-13.143 0-4.571 1.714-9.143 5.143-12.571l77.714-77.714c3.429-3.429 8-5.143 12.571-5.143 5.143 0 9.714 1.714 13.143 5.143l142.286 142.286 142.286-142.286c3.429-3.429 8-5.143 13.143-5.143 4.571 0 9.143 1.714 12.571 5.143l77.714 77.714c3.429 3.429 5.143 8 5.143 12.571 0 5.143-1.714 9.714-5.143 13.143zM733.143 694.857l-103.429 103.429c-13.714 13.714-21.143 32.571-21.143 52 0 18.857 7.429 37.714 21.143 51.429l47.429 47.429c-8 1.143-16.571 1.714-25.143 1.714h-499.429c-91.429 0-152.571-54.857-152.571-148 0-129.143 30.286-327.429 197.714-327.429 9.143 0 15.429 4 22.286 9.714 54.857 43.429 110.857 69.714 182.286 69.714s127.429-26.286 182.286-69.714c6.857-5.714 13.143-9.714 22.286-9.714 10.857 0 21.714 1.143 32.571 3.429-18.857 18.286-30.857 33.143-30.857 60.571 0 19.429 7.429 38.286 21.143 52z"></path>
                </svg>
                      <h1 className="verify-text04">Unverified</h1>

<span className="verify-text05">
<p style={{color: "orange"}}>{address?.slice(0, 6)}...{address?.slice(address.length - 6)}</p>
</span>
<div>
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
          "https://rarebay.xyz/favicon-200h.webp"
        }
        showThirdwebBranding={false}
        style={{color: "white", borderBottom: "solid 3px gray", borderRadius: "0px", padding: "-10px"}}
      />
</div>
                    </>
                  ) 
                  
                }
              
              </div>
              <div
                data-thq="thq-dropdown"
                className="verify-thq-dropdown1 list-item"
              >
                <ul
                  data-thq="thq-dropdown-list"
                  className="verify-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="verify-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="verify-dropdown-toggle2"
                    >
                      <svg viewBox="0 0 1024 1024" className="verify-icon09">
                        <path d="M639.778 475.892h44.21l-51.012 226.178-66.324-318.010h-106.55l-77.114 318.010-57.816-318.010h-111.394l113.092 511.88h108.838l76.294-302.708 68.256 302.708h100.336l129.628-511.88h-170.446v91.832z"></path>
                        <path d="M917.806 229.076c-22.21-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.886 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924v0zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.982 17.78 50.678 41.878 81.374 72.572v0zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.324 32 32 32h224v624z"></path>
                      </svg>
                      <span className="verify-text06">Tutorials</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="verify-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="verify-dropdown-toggle3"
                    >
                      <svg viewBox="0 0 1024 1024" className="verify-icon12">
                        <path d="M1024 320l-512-256-512 256 512 256 512-256zM512 148.97l342.058 171.030-342.058 171.030-342.058-171.030 342.058-171.030zM921.444 460.722l102.556 51.278-512 256-512-256 102.556-51.278 409.444 204.722zM921.444 652.722l102.556 51.278-512 256-512-256 102.556-51.278 409.444 204.722z"></path>
                      </svg>
                      <span className="verify-text07">V3 Liquidity</span>
                    </div>
                  </li>
                </ul>
              </div>
              <a
                href="https://docs.rarebay.xyz/terms"
                target="_blank"
                rel="noreferrer noopener"
                className="verify-link1"
              >
                <span>Terms and conditions</span>
                <br></br>
              </a>
            </div>
            <div className="verify-container09">
              <div className="verify-container10">
                <div className="verify-container11">
                  <h1 className="verify-text10">About Verification</h1>
                  <svg viewBox="0 0 1024 1024" className="verify-icon14">
                    <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
                <span className="verify-text11">
                  Learn more about RareBay KYC process and verification
                  benefits.
                </span>
              </div>
              <Link legacyBehavior href="/ecosystem">
                <a className="verify-link2">
                  <div className="verify-container12">
                    <div className="verify-container13">
                      <h1 className="verify-text12">RareBay Members</h1>
                      <svg viewBox="0 0 1024 1024" className="verify-icon16">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                    <span className="verify-text13">
                      View a list of verified accounts on RareBay
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .verify-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: rgba(20, 20, 20, 0.86);
          }
          .verify-container01 {
            width: 100%;
            height: 76px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .verify-container02 {
            width: 100%;
            height: 552px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            justify-content: center;
          }
          .verify-container03 {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            gap: 20;
          }
          .verify-container04 {
            width: 1000px;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-color: #323232;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
            background-color: rgba(28, 28, 28, 0.34);
          }
          .verify-container05 {
            width: 675px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: space-between;
          }
          .verify-text {
            color: rgb(202, 202, 202);
            width: 315px;
          }
          .verify-container06 {
            flex: 0 0 auto;
            width: 223px;
            height: 53px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-halfunit);
            justify-content: flex-end;
          }
          .verify-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .verify-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            padding: var(--dl-space-space-oneandhalfunits);
            z-index: 100;
            position: absolute;
            min-width: 100%;
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            align-items: stretch;
            border-color: #252525;
            border-width: 1px;
            margin-right: 0px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #191919;
            list-style-position: inside;
          }
          .verify-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .verify-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .verify-dropdown-toggle:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .verify-icon {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .verify-text01 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-halfunit);
          }
          .verify-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .verify-dropdown-toggle1 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .verify-dropdown-toggle1:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .verify-icon03 {
            fill: #924be7;
            width: 24px;
            height: 24px;
          }
          .verify-text02 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-halfunit);
          }
          .verify-link {
            display: contents;
          }
          .verify-container07 {
            flex: 0 0 auto;
            width: 93px;
            height: 37px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: center;
            text-decoration: none;
            background-color: rgba(0, 214, 245, 0.51);
          }
          .verify-icon05 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .verify-text03 {
            color: rgb(181, 181, 181);
            margin-left: var(--dl-space-space-unit);
          }
          .verify-container08 {
            width: 100%;
            height: 50%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .verify-icon07 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .verify-text04 {
            color: rgb(255, 26, 26);
            font-size: 1.2em;
            margin-bottom: 1%;
          }
          .verify-text05 {
            color: rgb(194, 194, 194);
            display: flex;
            flex-direction: column;
            gap: 1px;
          }
          .verify-thq-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .verify-dropdown-list1 {
            top: 0;
            right: 100%;
            width: max-content;
            display: none;
            padding: var(--dl-space-space-oneandhalfunits);
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #252525;
            border-width: 1px;
            margin-right: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #191919;
            list-style-position: inside;
          }
          .verify-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .verify-dropdown-toggle2 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .verify-dropdown-toggle2:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .verify-icon09 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .verify-text06 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-halfunit);
          }
          .verify-dropdown3 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .verify-dropdown-toggle3 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .verify-dropdown-toggle3:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .verify-icon12 {
            fill: #924be7;
            width: 24px;
            height: 24px;
          }
          .verify-text07 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-halfunit);
          }
          .verify-link1 {
            color: #52b5ff;
            cursor: pointer;
            text-decoration: none;
            margin: 2%;
          }
          .verify-container09 {
            width: 1000px;
            height: 84px;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .verify-container10 {
            flex: 0 0 auto;
            width: 50%;
            height: 100px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-color: #303030;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(28, 28, 28, 0.34);
          }
          .verify-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            justify-content: center;
          }
          .verify-text10 {
            color: rgb(212, 212, 212);
            width: 323px;
            height: 30px;
            font-size: 1em;
            text-align: left;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-twounits);
          }
          .verify-icon14 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .verify-text11 {
            color: rgb(194, 194, 194);
            width: 100%;
            padding-left: var(--dl-space-space-twounits);
          }
          .verify-link2 {
            display: contents;
          }
          .verify-container12 {
            flex: 0 0 auto;
            width: 50%;
            height: 100px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            border-color: #303030;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-color: rgba(28, 28, 28, 0.34);
          }
          .verify-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            justify-content: center;
          }
          .verify-text12 {
            color: rgb(212, 212, 212);
            width: 323px;
            height: 30px;
            font-size: 1em;
            text-align: left;
          }
          .verify-icon16 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .verify-text13 {
            color: rgb(194, 194, 194);
            width: 100%;
            padding-left: var(--dl-space-space-twounits);
          }
          @media (max-width: 1200px) {
            .verify-container09 {
              width: 1014px;
            }
          }
          @media (max-width: 767px) {
            .verify-container03 {
              height: 838px;
            }
            .verify-container04 {
              width: 100%;
            }
            .verify-container05 {
              width: 100%;
              position: relative;
            }
            .verify-container06 {
              width: auto;
            }
            .verify-container09 {
              width: 100%;
              height: 292px;
              flex-direction: column;
            }
            .verify-container10 {
              width: 724px;
              height: 95px;
            }
            .verify-container11 {
              justify-content: flex-start;
            }
            .verify-text10 {
              width: 619px;
              height: 27px;
              margin-left: var(--dl-space-space-twounits);
            }
            .verify-container12 {
              width: 720px;
              height: 93px;
            }
            .verify-container13 {
              justify-content: flex-start;
            }
            .verify-text12 {
              width: 100%;
              height: 29px;
              margin-left: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .verify-container03 {
              height: 708px;
              padding: var(--dl-space-space-unit);
            }
            .verify-container04 {
              width: 100%;
            }
            .verify-text {
              font-size: 1em;
            }
            .verify-container06 {
              width: auto;
            }
            .verify-container08 {
              height: 129px;
            }
            .verify-text04 {
              font-size: 1.2em;
            }
            .verify-container09 {
              width: 100%;
              height: 298px;
            }
            .verify-container10 {
              width: 100%;
              height: 167px;
              justify-content: flex-start;
            }
            .verify-container11 {
              justify-content: center;
            }
            .verify-text10 {
              width: 278px;
              height: 51px;
              padding: var(--dl-space-space-unit);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .verify-text11 {
              color: rgb(194, 194, 194);
              width: auto;
              margin: var(--dl-space-space-unit);
              text-align: left;
              padding-left: 0px;
            }
            .verify-container12 {
              width: 100%;
              height: 50%;
              justify-content: flex-start;
            }
            .verify-container13 {
              height: 59px;
              margin-top: var(--dl-space-space-unit);
              justify-content: center;
            }
            .verify-text12 {
              width: 307px;
              height: 36px;
              padding: var(--dl-space-space-unit);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .verify-text13 {
              color: rgb(194, 194, 194);
              padding: var(--dl-space-space-unit);
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Verify

export async function getServerSideProps(context) {
  const user = await getUser(context.req);

  if (!user) {
    return {
      props: {},
    };
  }

  const secretKey = process.env.TW_SECRET_KEY;

  if (!secretKey) {
    console.log("Missing env var: TW_SECRET_KEY");
    throw new Error("Missing env var: TW_SECRET_KEY");
  }

  // Ensure we are able to generate an auth token using our private key instantiated SDK
  const PRIVATE_KEY = process.env.THIRDWEB_AUTH_PRIVATE_KEY;
  if (!PRIVATE_KEY) {
    throw new Error("You need to add an PRIVATE_KEY environment variable.");
  }

  // Instantiate our SDK
  const sdk = ThirdwebSDK.fromPrivateKey(
    process.env.THIRDWEB_AUTH_PRIVATE_KEY,
    CoreBlockchain,
    { secretKey }
  );

  return {
    props: {},
  };
}
