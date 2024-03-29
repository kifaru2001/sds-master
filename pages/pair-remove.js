import React from 'react'
import Head from 'next/head'

import Nav from '../components/nav'
import Remove from '../components/remove'

const PairRemove = (props) => {
  return (
    <>
      <div className="pair-remove-container">
        <Head>
          <title>
            pair-remove - Crazy-Fast! secure! Rare! Decentralized Exchange
          </title>
          <meta
            name="description"
            content="Verify, Mine, Stake, Trade, Swap, Track, Inscribe, Farm, Earn, Borrow, Lend, play! faster than ever, seamlessly anywhere anytime. "
          />
          <meta
            property="og:title"
            content="pair-remove - Crazy-Fast! secure! Rare! Decentralized Exchange"
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
        <Nav rootClassName="nav-root-class-name9"></Nav>
        <div className="pair-remove-container1"></div>
        <Remove rootClassName="remove-root-class-name"></Remove>
      </div>
      <style jsx>
        {`
          .pair-remove-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;

          }
          .pair-remove-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 479px) {
            .pair-remove-container {
              max-width: 80vh;
            }
          }
        `}
      </style>
    </>
  )
}

export default PairRemove
