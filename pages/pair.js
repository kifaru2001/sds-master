import React from 'react'
import Head from 'next/head'

import Nav from '../components/nav'
import Add from '../components/add'
import Ap from "../components/App" 
import Ap2 from "../components/Btc" 


const Pair = (props) => {
  return (
    <>
      <div className="pair-container">
        <Head>
          <title>pair - Fast! secure! Rare! Decentralized Exchange</title>
          <meta
            name="description"
            content="Verify, Mine, Stake, Trade, Swap, Track, Inscribe, Farm, Earn, Borrow, Lend, play! faster than ever, seamlessly anywhere anytime. "
          />
          <meta
            property="og:title"
            content="pair - Fast! secure! Rare! Decentralized Exchange"
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
        <Nav rootClassName="nav-root-class-name7"></Nav>
        <div className="pair-container1"></div>
        <Add rootClassName="add-root-class-name"></Add>
        <div style={{display: "flex", width: "100%", justifyContent: "center", alignItems: "center", marginTop: "-2%", boxShadow: "1px 1px 20px initial"}} className='column'>
        
        <Ap />
        <Ap2 />
        </div>
      </div>
      <style jsx>
        {`
          .pair-container {
            width: 100%;
            display: flex;
            overflow: auto;
            max-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: rgba(0, 0, 0, 0.68);
          }
          .pair-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 479px) {
            .pair-container {
              max-width: 80vh;
            }
          }
        `}
      </style>
    </>
  )
}

export default Pair
