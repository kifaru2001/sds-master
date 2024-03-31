import React from 'react'
import Head from 'next/head'

import Nav from '../components/nav'
import Greetings from '../components/greetings'

const Portfolio = (props) => {
  return (
    <>
      <div className="portfolio-container">
        <Head>
          <title>
            portfolio - Crazy-Fast! secure! Rare! Decentralized Exchange
          </title>
          <meta
            name="description"
            content="Verify, Mine, Stake, Trade, Swap, Track, Inscribe, Farm, Earn, Borrow, Lend, play! faster than ever, seamlessly anywhere anytime. "
          />
          <meta
            property="og:title"
            content="portfolio - Crazy-Fast! secure! Rare! Decentralized Exchange"
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
        <Nav rootClassName="nav-root-class-name5"></Nav>
        <div className="portfolio-container1"></div>
        <div className="portfolio-container2">
          <Greetings></Greetings>
        </div>
        <div id="table" className="portfolio-container3">
          <div className="portfolio-container4">
            <svg viewBox="0 0 1024 1024" className="portfolio-icon">
              <path d="M1016.988 652.010l-256-320c-6.074-7.592-15.266-12.010-24.988-12.010h-448c-9.72 0-18.916 4.418-24.988 12.010l-256 320c-4.538 5.674-7.012 12.724-7.012 19.99v288c0 35.346 28.654 64 64 64h896c35.348 0 64-28.654 64-64v-288c0-7.266-2.472-14.316-7.012-19.99zM960 704h-224l-128 128h-192l-128-128h-224v-20.776l239.38-299.224h417.24l239.38 299.224v20.776z"></path>
              <path d="M736 512h-448c-17.672 0-32-14.328-32-32s14.328-32 32-32h448c17.674 0 32 14.328 32 32s-14.326 32-32 32z"></path>
              <path d="M800 640h-576c-17.672 0-32-14.326-32-32s14.328-32 32-32h576c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .portfolio-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-image: radial-gradient(
              circle at center,
              rgba(21, 21, 21, 0.98) 3%,
              rgba(0, 0, 0, 0.97) 83%
            );
          }
          .portfolio-container1 {
            width: 100%;
            height: 66px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .portfolio-container2 {
            width: 100%;
            height: auto;
            display: flex;
            padding: 2px;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .portfolio-container3 {
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .portfolio-container4 {
            flex: 0 0 auto;
            width: 213px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .portfolio-icon {
            fill: #d9d9d9;
            width: 257px;
            height: 82px;
            margin-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 1200px) {
            .portfolio-container2 {
              width: 100%;
              height: auto;
            }
            .portfolio-container3 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .portfolio-container2 {
              height: 1600px;
            }
            .portfolio-container3 {
              width: 100%;
              height: 569px;
            }
          }
          @media (max-width: 479px) {
            .portfolio-container1 {
              width: 100%;
            }
            .portfolio-container2 {
              width: 100%;
              height: auto;
              padding: 0px;
            }
            .portfolio-container3 {
              width: 100%;
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Portfolio
