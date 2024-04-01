import React from 'react'
import Head from 'next/head'

import Intro from '../components/intro'
import Gating from '../components/gating'

const Login = (props) => {
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
        <Intro rootClassName="intro-root-class-name2"></Intro>
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
