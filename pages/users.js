import React from 'react'
import Head from 'next/head'

import Nav from '../components/nav'
import Sliders from '../components/sliders'

const Users = (props) => {
  return (
    <>
      <div className="users-container">
        <Head>
          <title>
            Users - Crazy-Fast! secure! Rare! Decentralized Exchange
          </title>
          <meta
            name="description"
            content="Verify, Mine, Stake, Trade, Swap, Track, Inscribe, Farm, Earn, Borrow, Lend, play! faster than ever, seamlessly anywhere anytime. "
          />
          <meta
            property="og:title"
            content="Users - Fast! secure! Rare! Decentralized Exchange"
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
        <Nav rootClassName="nav-root-class-name6"></Nav>
        <div className="users-container01"></div>
        <div className="users-container02">
          <div className="users-container03">
            <div className="users-container04">
              <animate-on-reveal
                animation="wobble"
                duration="3s"
                delay="2s"
                direction="normal"
                easing="ease"
                iteration="1"
              >
                <h1 data-thq-animate-on-reveal="true" className="users-text">
                  3,100 RAR31ONES
                </h1>
              </animate-on-reveal>
              <h1 className="users-text1">
                <span>
                  RareBay utility NFT is a membership ticket for users.
                </span>
                <br></br>
              </h1>
              <h1 className="users-text4">
                <span>
                  NFT owners are eligible for KYC verification. Verified members
                  can list tokens, mine RareCoin and ready sell on Dex.
                </span>
                <br></br>
              </h1>
              <div className="users-container05">
                <span className="users-text7">Coming Soon</span>
                <animate-on-reveal
                  animation="shakeX"
                  duration="1000ms"
                  delay="1s"
                  direction="normal"
                  easing="ease"
                  iteration="1"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    data-thq-animate-on-reveal="true"
                    className="users-icon"
                  >
                    <path d="M725.333 341.333c0 171.136 40.405 278.187 78.976 341.333h-584.619c38.571-63.147 78.976-170.197 78.976-341.333 0-58.923 23.851-112.213 62.464-150.869s91.947-62.464 150.869-62.464 112.213 23.851 150.869 62.464 62.464 91.947 62.464 150.869zM810.667 341.333c0-82.475-33.493-157.184-87.467-211.2s-128.725-87.467-211.2-87.467-157.184 33.493-211.2 87.467-87.467 128.725-87.467 211.2c0 261.419-102.101 343.339-109.355 348.757-19.328 13.141-24.448 39.424-11.477 58.923 8.192 12.245 21.589 18.901 35.499 18.987h768c23.552 0 42.667-19.115 42.667-42.667 0-14.464-7.168-27.221-18.304-35.029-7.509-5.547-109.696-87.467-109.696-348.971zM548.907 874.581c-5.931 10.197-15.317 17.024-25.941 19.84s-22.187 1.579-32.384-4.309c-6.912-4.011-12.075-9.472-15.317-15.232-11.691-20.48-37.717-27.605-58.197-15.915s-27.605 37.717-15.915 58.197c10.667 18.731 26.581 35.115 46.635 46.763 30.549 17.749 65.493 21.376 97.109 12.971s60.117-28.928 77.824-59.477c11.819-20.395 4.864-46.507-15.488-58.325s-46.507-4.864-58.325 15.488z"></path>
                  </svg>
                </animate-on-reveal>
              </div>
            </div>
           <Sliders />
          <div id="table" className="users-container13">
            <div className="users-container14">
              <svg viewBox="0 0 1024 1024" className="users-icon2">
                <path d="M1016.988 652.010l-256-320c-6.074-7.592-15.266-12.010-24.988-12.010h-448c-9.72 0-18.916 4.418-24.988 12.010l-256 320c-4.538 5.674-7.012 12.724-7.012 19.99v288c0 35.346 28.654 64 64 64h896c35.348 0 64-28.654 64-64v-288c0-7.266-2.472-14.316-7.012-19.99zM960 704h-224l-128 128h-192l-128-128h-224v-20.776l239.38-299.224h417.24l239.38 299.224v20.776z"></path>
                <path d="M736 512h-448c-17.672 0-32-14.328-32-32s14.328-32 32-32h448c17.674 0 32 14.328 32 32s-14.326 32-32 32z"></path>
                <path d="M800 640h-576c-17.672 0-32-14.326-32-32s14.328-32 32-32h576c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
              </svg>
            </div>
            OOPS! No Items!
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .users-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .users-container01 {
            width: 100%;
            height: 66px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .users-container02 {
            width: 100%;
            height: auto;
            display: flex;
            padding: 0px;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .users-container03 {
            width: 100%;
            height: 487px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .users-container04 {
            width: 667px;
            height: 336px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
          }
          .users-text {
            color: #8c8c8c;
            width: 661px;
            height: 90px;
            font-size: 4em;
            align-self: center;
            text-align: left;
          }
          .users-text1 {
            color: rgb(165, 165, 165);
            width: 661px;
            height: 90px;
            font-size: 2.5em;
            align-self: center;
            text-align: left;
          }
          .users-text4 {
            color: rgb(208, 208, 208);
            width: 661px;
            height: 90px;
            font-size: 1.5em;
            align-self: center;
            font-style: italic;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-family: 'Noto Sans';
            font-weight: 100;
          }
          .users-container05 {
            width: 510px;
            cursor: pointer;
            height: 66px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            border-color: #191919;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: rgba(34, 34, 34, 0.5);
          }
          .users-text7 {
            color: rgb(188, 188, 188);
            font-size: 30px;
            text-align: center;
            font-family: 'Arial Black';
            font-weight: 800;
            margin-right: var(--dl-space-space-twounits);
          }
          .users-icon {
            fill: #d9d9d9;
            width: 33px;
            height: 38px;
            transition: 0.3s;
          }

          .users-container06 {
            width: 590px;
            height: 336px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .users-slider {
            width: 500px;
            height: 300px;
            display: inline-block;
          }
          .users-slider-slide {
            width: 501px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .users-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .users-image {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .users-image01 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .users-container08 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .users-image02 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .users-image03 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .users-container09 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .users-image04 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .users-image05 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .users-slider-slide1 {
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .users-container10 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .users-image06 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .users-image07 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .users-container11 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .users-image08 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .users-image09 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .users-container12 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .users-image10 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .users-image11 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .users-slider-pagination {
            display: none;
          }
          .users-slider-button-prev {
            color: #fbfbfb;
            display: none;
          }
          .users-slider-button-next {
            color: #ffffff;
            display: none;
          }
          .users-container13 {
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .users-container14 {
            flex: 0 0 auto;
            width: 213px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .users-icon2 {
            fill: #d9d9d9;
            width: 257px;
            height: 82px;
            margin-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 1200px) {
            .users-container03 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .users-container04 {
              width: auto;
              padding-left: var(--dl-space-space-twounits);
            }
            .users-container06 {
              width: auto;
            }
            .users-container13 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .users-container02 {
              height: 1600px;
            }
            .users-container03 {
              width: 100%;
              height: 739px;
              flex-direction: column;
            }
            .users-container04 {
              height: 266px;
            }
            .users-text {
              width: 100%;
              height: 100%;
            }
            .users-text1 {
              width: 100%;
            }
            .users-text4 {
              width: 100%;
            }
            .users-container05 {
              align-self: center;
            }
            .users-icon {
              animation-name: rubberBand;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .users-container13 {
              width: 100%;
              height: 569px;
            }
          }
          @media (max-width: 479px) {
            .users-container02 {
              height: auto;
              padding: 0px;
            }
            .users-container03 {
              width: 100%;
              height: 983px;
              flex-direction: column;
            }
            .users-container04 {
              width: 100%;
              height: 563px;
              padding-left: var(--dl-space-space-unit);
            }
            .users-text {
              width: 100%;
              height: 178px;
              font-size: 2.5em;
              font-family: Arial Black;
            }
            .users-text1 {
              width: 100%;
              height: 311px;
            }
            .users-text4 {
              width: 100%;
              height: 215px;
            }
            .users-container05 {
              width: 100%;
            }
            .users-text7 {
              font-size: 25px;
              text-align: left;
            }
            .users-container06 {
              width: 100%;
              height: 232px;
            }
            .users-slider {
              width: 100%;
            }
            .users-slider-slide {
              width: 100%;
              height: 332px;
              align-items: center;
            }
            .users-container07 {
              width: 62px;
            }
            .users-image {
              height: var(--dl-size-size-small);
            }
            .users-image01 {
              height: var(--dl-size-size-small);
            }
            .users-container08 {
              width: 72px;
            }
            .users-image02 {
              height: var(--dl-size-size-small);
            }
            .users-image03 {
              height: var(--dl-size-size-small);
            }
            .users-container09 {
              width: 64px;
            }
            .users-image04 {
              height: var(--dl-size-size-small);
            }
            .users-image05 {
              height: var(--dl-size-size-small);
            }
            .users-slider-slide1 {
              width: 409px;
            }
            .users-container10 {
              width: 62px;
            }
            .users-image06 {
              height: var(--dl-size-size-small);
            }
            .users-image07 {
              height: var(--dl-size-size-small);
            }
            .users-container11 {
              width: 72px;
            }
            .users-image08 {
              height: var(--dl-size-size-small);
            }
            .users-image09 {
              height: var(--dl-size-size-small);
            }
            .users-container12 {
              width: 64px;
            }
            .users-image10 {
              height: var(--dl-size-size-small);
            }
            .users-image11 {
              height: var(--dl-size-size-small);
            }
            .users-container13 {
              width: 100%;
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Users
