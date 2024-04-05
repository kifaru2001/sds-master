import React from 'react'
import Head from 'next/head'

import Form from '../components/form'
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

const SetpOne = (props) => {
  const { contract } = useContract(contractAddress);
  const { data: contractMetadata, isLoading: contractLoading } =
    useContractMetadata(contract);
  const address = useAddress();
  const { data: nfts } = useOwnedNFTs(contract, address);
  const router = useRouter();

  useEffect(() => {
    if (!nfts?.length) {
      router.push("/verify");
    }
  }, [nfts, router, address]);
  return (
    <>
      <div className="setp-one-container">
        <Head>
          <title>
            setp-one - Fast! secure! Rare! Decentralized Exchange
          </title>
          <meta
            name="description"
            content="Verify, Mine, Stake, Trade, Swap, Track, Inscribe, Farm, Earn, Borrow, Lend, play! faster than ever, seamlessly anywhere anytime. "
          />
          <meta
            property="og:title"
            content="setp-one - Crazy-Fast! secure! Rare! Decentralized Exchange"
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
        <Form rootClassName="form-root-class-name"></Form>
      </div>
      <style jsx>
        {`
          .setp-one-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(20, 20, 20, 0.86);
          }
        `}
      </style>
    </>
  )
}

export default SetpOne
