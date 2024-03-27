import React from 'react'
import Head from 'next/head'

import Nav from '../components/nav'
import Nav2 from '../components/nav2'

const Swap = (props) => {
  return (
    <>
      <div className="swap-container">
        <Head>
          <title>Swap - Crazy-Fast! secure! Rare! Decentralized Exchange</title>
          <meta
            name="description"
            content="Verify, Mine, Stake, Trade, Swap, Track, Inscribe, Farm, Earn, Borrow, Lend, play! faster than ever, seamlessly anywhere anytime. "
          />
          <meta
            property="og:title"
            content="Swap - Crazy-Fast! secure! Rare! Decentralized Exchange"
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
        <Nav rootClassName="nav-root-class-name1"></Nav>
        <div className="swap-container1"></div>
        <Nav2 rootClassName="nav2-root-class-name1"></Nav2>
       
      </div>
      <style jsx>
        {`
          .swap-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .swap-container1 {
            width: 100%;
            height: 66px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .swap-container2 {
            width: 100%;
            height: 696px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          @media (max-width: 479px) {
            .swap-container {
              min-height: 80vh;
            }
            .swap-container2 {
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Swap
