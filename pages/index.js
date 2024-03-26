import React from 'react'
import Head from 'next/head'

import Nav from '../components/nav'
import Nav2 from '../components/nav2'
import Dex from '../components/dex'
import AppComponent from '../components/load'
import { useContract } from "@thirdweb-dev/react";


const Home = (props) => {
  const { contract, isLoading } = useContract("0x4BeE778f80A4d9AC989C471E0018370ff0fe9946");
  if(isLoading){
    return(
      <>
      <AppComponent />
      </>
    )
  }
  return (
    <>
      <div className="home-container">
        <Head>
          <title>RareBay - Crazy-Fast! secure! Rare! Decentralized Exchange</title>
          <meta
            name="description"
            content="Verify, Mine, Stake, Trade, Swap, Track, Inscribe, Farm, Earn, Borrow, Lend, play! faster than ever, seamlessly anywhere anytime. "
          />
          <meta
            property="og:title"
            content="Crazy-Fast! secure! Rare! Decentralized Exchange"
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
        <Nav rootClassName="nav-root-class-name"></Nav>
        <div className="home-container1"></div>
        <Nav2 rootClassName="nav2-root-class-name"></Nav2>
        <Dex></Dex>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container1 {
            width: 100%;
            height: 66px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Home
