import React from 'react'
import Head from 'next/head'

import Nav from '../components/nav'
import Link from "next/link"

const Tokens = (props) => {
  return (
    <>
      <div className="tokens-container">
        <Head>
          <title>
            Tokens - Fast! secure! Rare! Decentralized Exchange
          </title>
          <meta
            name="description"
            content="Verify, Mine, Stake, Trade, Swap, Track, Inscribe, Farm, Earn, Borrow, Lend, play! faster than ever, seamlessly anywhere anytime. "
          />
          <meta
            property="og:title"
            content="Tokens - Fast! secure! Rare! Decentralized Exchange"
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
        <Nav rootClassName="nav-root-class-name8"></Nav>
        <div className="tokens-container01"></div>
        <div className="tokens-container02">
          <div className="tokens-container03">
            <animate-on-reveal
              animation="wobble"
              duration="3s"
              delay="2s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <h1 data-thq-animate-on-reveal="true" className="tokens-text">
                TRADE TOKENS
              </h1>
            </animate-on-reveal>
            <h1 className="tokens-text1">
              <span>Lightspeed transactions! Anywhere, anytime.</span>
              <br></br>
            </h1>
            <h1 className="tokens-text4">
              <span>
                RareBay is super-fast. Swap, trade, explore everything faster
                than you can say Rare.
              </span>
              <br></br>
            </h1>
            <animate-on-reveal
              animation="pulse"
              duration="3000ms"
              delay="3s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div
                data-thq-animate-on-reveal="true"
                className="tokens-container04"
              >
                <Link href='/swap' style={{display: "flex", flexDirection: "row", color: "white", fontSize: "30px", fontWeight: "900", marginRight: "5%"}}>Swap Now</Link>
                <svg viewBox="0 0 1024 1024" className="tokens-icon">
                  <path d="M889.68 166.32c-93.608-102.216-228.154-166.32-377.68-166.32-282.77 0-512 229.23-512 512h96c0-229.75 186.25-416 416-416 123.020 0 233.542 53.418 309.696 138.306l-149.696 149.694h352v-352l-134.32 134.32z"></path>
                  <path d="M928 512c0 229.75-186.25 416-416 416-123.020 0-233.542-53.418-309.694-138.306l149.694-149.694h-352v352l134.32-134.32c93.608 102.216 228.154 166.32 377.68 166.32 282.77 0 512-229.23 512-512h-96z"></path>
                </svg>
              </div>
            </animate-on-reveal>
          </div>
          <div className="tokens-container05">
            <div
              data-thq="slider"
              data-loop="true"
              data-autoplay="true"
              data-navigation="false"
              data-pagination="false"
              data-autoplay-delay="1500"
              className="tokens-slider swiper"
            >
              <div data-thq="slider-wrapper" className="swiper-wrapper">
                <div
                  data-thq="slider-slide"
                  className="tokens-slider-slide swiper-slide"
                >
                  <div className="tokens-container06">
                    <img
                      alt="image"
                      src="/bitcoin-btc-logo-200h.webp"
                      className="tokens-image"
                    />
                    <img
                      alt="image"
                      src="/dogecoin-doge-logo-200h.webp"
                      className="tokens-image01"
                    />
                  </div>
                  <div className="tokens-container07">
                    <img
                      alt="image"
                      src="/core-200w.webp"
                      className="tokens-image02"
                    />
                    <img
                      alt="image"
                      src="/avalanche-avax-logo-200w.webp"
                      className="tokens-image03"
                    />
                  </div>
                  <div className="tokens-container08">
                    <img
                      alt="image"
                      src="/ethereum-eth-logo-200h.webp"
                      className="tokens-image04"
                    />
                    <img
                      alt="image"
                      src="/bnb-bnb-logo-200h.webp"
                      className="tokens-image05"
                    />
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="tokens-slider-slide1 swiper-slide"
                >
                  <div className="tokens-container09">
                    <img
                      alt="image"
                      src="/litecoin-ltc-logo-200h.webp"
                      className="tokens-image06"
                    />
                    <img
                      alt="image"
                      src="/solana-sol-logo-200h.webp"
                      className="tokens-image07"
                    />
                  </div>
                  <div className="tokens-container10">
                    <img
                      alt="image"
                      src="/usd-coin-usdc-logo-200h.webp"
                      className="tokens-image08"
                    />
                    <img
                      alt="image"
                      src="/shiba-inu-shib-logo-200h.webp"
                      className="tokens-image09"
                    />
                  </div>
                  <div className="tokens-container11">
                    <img
                      alt="image"
                      src="/polygon-matic-logo-200h.webp"
                      className="tokens-image10"
                    />
                    <img
                      alt="image"
                      src="/tether-usdt-logo-200h.webp"
                      className="tokens-image11"
                    />
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-pagination"
                className="tokens-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
              </div>
              <div
                data-thq="slider-button-prev"
                className="tokens-slider-button-prev swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="tokens-slider-button-next swiper-button-next"
              ></div>
            </div>
          </div>
        </div>
        <div id="table" className="tokens-container12">
          <div className="tokens-container13">
            <svg viewBox="0 0 1024 1024" className="tokens-icon3">
              <path d="M1016.988 652.010l-256-320c-6.074-7.592-15.266-12.010-24.988-12.010h-448c-9.72 0-18.916 4.418-24.988 12.010l-256 320c-4.538 5.674-7.012 12.724-7.012 19.99v288c0 35.346 28.654 64 64 64h896c35.348 0 64-28.654 64-64v-288c0-7.266-2.472-14.316-7.012-19.99zM960 704h-224l-128 128h-192l-128-128h-224v-20.776l239.38-299.224h417.24l239.38 299.224v20.776z"></path>
              <path d="M736 512h-448c-17.672 0-32-14.328-32-32s14.328-32 32-32h448c17.674 0 32 14.328 32 32s-14.326 32-32 32z"></path>
              <path d="M800 640h-576c-17.672 0-32-14.326-32-32s14.328-32 32-32h576c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .tokens-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: rgba(0, 0, 0, 0.7);
          }
          .tokens-container01 {
            width: 100%;
            height: 66px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .tokens-container02 {
            width: 100%;
            height: 428px;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: center;
          }
          .tokens-container03 {
            width: 667px;
            height: 381px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
          }
          .tokens-text {
            color: #e0e0e0;
            width: 661px;
            height: 90px;
            font-size: 4em;
            align-self: center;
            text-align: left;
          }
          .tokens-text1 {
            color: rgb(165, 165, 165);
            width: 661px;
            height: 185px;
            font-size: 2.5em;
            align-self: center;
            text-align: left;
          }
          .tokens-text4 {
            color: rgb(208, 208, 208);
            width: 661px;
            height: 90px;
            font-size: 1.5em;
            align-self: center;
            font-style: italic;
            text-align: left;
            font-family: 'Noto Sans';
            font-weight: 100;
          }
          .tokens-container04 {
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
            background-color: #2d2d2d;
          }
          .tokens-text7 {
            color: #c6c6c6;
            font-size: 28px;
            text-align: center;
            width: 100%;
          }
          .tokens-icon {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            animation-name: rotateIn;
            animation-delay: 0s;
            animation-duration: 2000ms;
            animation-direction: normal;
            animation-iteration-count: 100;
            animation-timing-function: ease;
          }
          .tokens-container05 {
            width: 590px;
            height: 336px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .tokens-slider {
            width: 500px;
            height: 300px;
            display: inline-block;
          }
          .tokens-slider-slide {
            width: 501px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .tokens-container06 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .tokens-image {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .tokens-image01 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .tokens-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .tokens-image02 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
          }
          .tokens-image03 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .tokens-container08 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .tokens-image04 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .tokens-image05 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .tokens-slider-slide1 {
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .tokens-container09 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .tokens-image06 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .tokens-image07 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .tokens-container10 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .tokens-image08 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
          }
          .tokens-image09 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
          }
          .tokens-container11 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .tokens-image10 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
          }
          .tokens-image11 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
          }
          .tokens-slider-pagination {
            display: none;
          }
          .tokens-slider-button-prev {
            color: #fbfbfb;
            display: none;
          }
          .tokens-slider-button-next {
            color: #ffffff;
            display: none;
          }
          .tokens-container12 {
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .tokens-container13 {
            flex: 0 0 auto;
            width: 213px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .tokens-icon3 {
            fill: #d9d9d9;
            width: 257px;
            height: 82px;
            margin-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 1200px) {
            .tokens-container02 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .tokens-container03 {
              width: auto;
              padding-left: var(--dl-space-space-twounits);
            }
            .tokens-container05 {
              width: auto;
            }
            .tokens-container12 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .tokens-container02 {
              width: 100%;
              height: 739px;
              flex-direction: column;
            }
            .tokens-container03 {
              height: 276px;
            }
            .tokens-text {
              width: 100%;
              height: 100%;
            }
            .tokens-text1 {
              width: 100%;
            }
            .tokens-text4 {
              width: 100%;
            }
            .tokens-container04 {
              width: 100%;
            }
            .tokens-container12 {
              width: 100%;
              height: 569px;
            }
          }
          @media (max-width: 479px) {
            .tokens-container02 {
              width: 100%;
              height: 547px;
              flex-direction: column;
            }
            .tokens-container03 {
              width: 100%;
              height: 280px;
              padding-left: var(--dl-space-space-unit);
            }
            .tokens-text {
              width: 100%;
              height: 87px;
              font-size: 2.5em;
              font-family: Arial Black;
            }
            .tokens-text1 {
              width: 100%;
              height: 154px;
            }
            .tokens-text4 {
              width: 100%;
              height: 51px;
            }
            .tokens-container04 {
              width: 100%;
            }
            .tokens-text7 {
              color: rgb(188, 188, 188);
              font-size: 16px;
              font-family: Arial Black;
              font-weight: 800;
            }
            .tokens-container05 {
              width: 100%;
              height: 232px;
            }
            .tokens-slider {
              width: 100%;
            }
            .tokens-slider-slide {
              width: 100%;
              height: 231px;
              align-items: center;
            }
            .tokens-container06 {
              width: 62px;
            }
            .tokens-image {
              height: var(--dl-size-size-small);
            }
            .tokens-image01 {
              height: var(--dl-size-size-small);
            }
            .tokens-container07 {
              width: 72px;
            }
            .tokens-image02 {
              height: var(--dl-size-size-small);
            }
            .tokens-image03 {
              height: var(--dl-size-size-small);
            }
            .tokens-container08 {
              width: 64px;
            }
            .tokens-image04 {
              height: var(--dl-size-size-small);
            }
            .tokens-image05 {
              height: var(--dl-size-size-small);
            }
            .tokens-slider-slide1 {
              width: 409px;
            }
            .tokens-container09 {
              width: 62px;
            }
            .tokens-image06 {
              height: var(--dl-size-size-small);
            }
            .tokens-image07 {
              height: var(--dl-size-size-small);
            }
            .tokens-container10 {
              width: 72px;
            }
            .tokens-image08 {
              height: var(--dl-size-size-small);
            }
            .tokens-image09 {
              height: var(--dl-size-size-small);
            }
            .tokens-container11 {
              width: 64px;
            }
            .tokens-image10 {
              height: var(--dl-size-size-small);
            }
            .tokens-image11 {
              height: var(--dl-size-size-small);
            }
            .tokens-container12 {
              width: 100%;
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Tokens
