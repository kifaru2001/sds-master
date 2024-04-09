import React from 'react'
import Head from 'next/head'

import {
  ConnectWallet,
  MediaRenderer,
  useAddress,
  useContract,
  useContractMetadata,
  useOwnedNFTs,
  useUser,
  Web3Button
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
const Complete = (props) => {
  const { contract } = useContract(contractAddress);
  const { data: contractMetadata, isLoading: contractLoading } =
    useContractMetadata(contract);
  const address = useAddress();
  const { data: nfts } = useOwnedNFTs(contract, address);
  const router = useRouter();

  useEffect(() => {
    if (!nfts?.length >= 1) {
      toast(`You need to make payment to complete`, {
        icon: "⚡",
        style: toastStyle,
        position: "bottom-center",
      });
      router.push("/verify");
    }

  }, [nfts, router, address]);

  return (
    <>
      <div className="complete-container">
      <Toaster position="bottom-center" reverseOrder={false} />
        <Head>
          <title>
            complete - Crazy-Fast! secure! Rare! Decentralized Exchange
          </title>
          <meta
            name="description"
            content="Verify, Mine, Stake, Trade, Swap, Track, Inscribe, Farm, Earn, Borrow, Lend, play! faster than ever, seamlessly anywhere anytime. "
          />
          <meta
            property="og:title"
            content="complete - Crazy-Fast! secure! Rare! Decentralized Exchange"
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
        <div className="complete-container1">
          <div className="complete-container2">
            <animate-on-reveal
              animation="pulse"
              duration="2000ms"
              delay="0s"
              direction="normal"
              easing="ease"
              iteration="100"
            >
              <div
                data-thq-animate-on-reveal="true"
                className="complete-container3"
              >
                <video
                  src="https://bafybeifha4ryyalguyo2psxybjtoj5tus7se7rgm3fopzzzqa5nsqkve64.ipfs.nftstorage.link/ipfs/bafybeifha4ryyalguyo2psxybjtoj5tus7se7rgm3fopzzzqa5nsqkve64/kyc.mp4"
                  poster="/rar31ones (103)-200w.webp"
                  loop="true"
                  autoPlay="true"
                  preload="none"
                  className="complete-video"
                ></video>
              </div>
            </animate-on-reveal>
            <span className="complete-text">
              You need to pay a fee of 5 CORE to complete verification process.
            </span>
            <div className="complete-container4 button">
              <button type="submit" className="complete-button">
              <Web3Button
        contractAddress={"0x35d3d457E18600697A47d96A87829d9C944de6E5"}
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => {
          toast(`Successfully made payment`, {
            icon: "⚡",
            style: toastStyle,
            position: "bottom-center",
          });
          router.push("/status");
        }}
        onError={(error) => {
          alert(error);
        }}
        style={{color: "white", height: "20px", background: "transparent", border: "none"}}
      >
        Pay 5 CORE
      </Web3Button>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .complete-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(20, 20, 20, 0.86);
          }
          .complete-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .complete-container2 {
            flex: 0 0 auto;
            width: 317px;
            height: 446px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .complete-container3 {
            flex: 0 0 auto;
            width: 214px;
            cursor: pointer;
            height: auto;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            justify-content: center;
          }
          .complete-container3:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 100;
            animation-timing-function: ease;
          }
          .complete-video {
            width: 100%;
            height: 100%;
            border-color: #404040;
            border-style: double;
            border-width: 10px;
            border-radius: 32px;
          }
          .complete-text {
            color: rgb(255, 255, 255);
            margin: var(--dl-space-space-unit);
            font-family: 'Exo 2';
            text-align: center;
          }
          .complete-container4 {
            width: 100%;
            cursor: pointer;
            height: 45px;
            display: flex;
            z-index: 100;
            box-shadow: 5px 5px 10px 0px #0a0a0a;
            transition: 0.3s;
            align-items: center;
            border-color: #404040;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            animation-name: slideInUp;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            background-color: rgba(18, 18, 18, 0.75);
            animation-duration: 2000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .complete-container4:hover {
            background: rgba(35, 41, 41, 0.7);
          }
          .complete-button {
            color: rgb(187, 187, 187);
          }
          @media (max-width: 479px) {
            .complete-container4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Complete


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