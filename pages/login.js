import React from 'react'
import Head from 'next/head'

import Intro from '../components/intro'
import Gating from '../components/gating'
import {
  ConnectWallet,
  MediaRenderer,
  useAddress,
  useContract,
  useContractMetadata,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getUser } from "../auth.config";
import { contractAddress } from "../const/yourDetails";

import checkBalance from "../util/checkBalance";
import CoreBlockchain from "@thirdweb-dev/chains"

const Login = (props) => {
  const { contract } = useContract(contractAddress);
  const { data: contractMetadata, isLoading: contractLoading } =
    useContractMetadata(contract);
  const address = useAddress();
  const { data: nfts } = useOwnedNFTs(contract, address);
  const router = useRouter();

  useEffect(() => {
    if (nfts?.length) {
      router.push("/verify");
    }
  }, [nfts, router, address]);

  return (
    <>
      <div className="login-container">
        <Head>
          <title>
            login - Fast! secure! Rare! Decentralized Exchange
          </title>
          <meta
            name="description"
            content="Verify, Mine, Stake, Trade, Swap, Track, Inscribe, Farm, Earn, Borrow, Lend, play! faster than ever, seamlessly anywhere anytime. "
          />
          <meta
            property="og:title"
            content="login - Fast! secure! Rare! Decentralized Exchange"
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

        <div className="login-container1"></div>
        <Gating rootClassName="gating-root-class-name3"></Gating>
      </div>
      <style jsx>
        {`
          .login-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-height: 100vh;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .login-container1 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 631px;
            display: flex;
            overflow: hidden;
            align-items: center;
            justify-content: center;
          }
          @media (max-width: 1200px) {
            .login-container1 {
              height: 1039px;
            }
          }
          @media (max-width: 767px) {
            .login-container1 {
              height: 846px;
            }
          }
          @media (max-width: 479px) {
            .login-container1 {
              height: 888px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Login

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

  // Check to see if the user has an NFT
  const hasNft = await checkBalance(sdk, user.address);

  // If they have an NFT, redirect them to the home page
  if (hasNft) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  // Finally, return the props
  return {
    props: {},
  };
}