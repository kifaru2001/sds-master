import React from 'react'
import Head from 'next/head'

import Component1 from '../components/component1'
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
import Link from 'next/link';
import { coreBlockchain } from "@thirdweb-dev/chains"


const Login = (props) => {
  const { contract } = useContract(contractAddress);
  const { data: contractMetadata, isLoading: contractLoading } =
    useContractMetadata(contract);
  const address = useAddress();
  const { data: nfts } = useOwnedNFTs(contract, address);
  const router = useRouter();

  return (
    <>
      <div className="welcome1-container">
        <Head>
          <title>
            Welcome - Crazy-Fast! secure! Rare! Decentralized Exchange
          </title>
          <meta
            name="description"
            content="Verify, Mine, Stake, Trade, Swap, Track, Inscribe, Farm, Earn, Borrow, Lend, play! faster than ever, seamlessly anywhere anytime. "
          />
          <meta
            property="og:title"
            content="Welcome1 - Crazy-Fast! secure! Rare! Decentralized Exchange"
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
        <div className="welcome1-container01">
          <div className="welcome1-container02">
            <Link legacyBehavior href="/swap">
              <a className="welcome1-link">
                <div className="welcome1-container03">
                  <div className="welcome1-container04">
                    <img
                      alt="image"
                      src="/favicon-200h.webp"
                      className="welcome1-image"
                    />
                    <span className="welcome1-text">Rare</span>
                    <span className="welcome1-text01">Bay</span>
                    <svg viewBox="0 0 1127.424 1024" className="welcome1-icon">
                      <path d="M489.714 310.857v66.857c0 9.714-8.571 17.714-18.286 17.714h-170.286v464c0 10.286-8 18.286-17.714 18.286h-77.143c-10.286 0-18.286-8-18.286-18.286v-464h-169.714c-10.286 0-18.286-8-18.286-17.714v-66.857c0-10.286 8-18.286 18.286-18.286h453.143c9.714 0 18.286 8 18.286 18.286zM1082.857 309.143l44 549.143c0.571 5.143-1.143 9.714-4.571 13.714-3.429 3.429-8 5.714-13.143 5.714h-76.571c-9.143 0-17.143-7.429-17.714-16.571l-26.286-336-108 242.857c-2.857 6.857-9.143 10.857-16.571 10.857h-68.571c-6.857 0-13.143-4-16.571-10.857l-107.429-244-25.714 337.143c-0.571 9.143-8.571 16.571-17.714 16.571h-77.143c-5.143 0-9.714-2.286-13.143-5.714-3.429-4-5.143-8.571-5.143-13.714l44.571-549.143c0.571-9.143 8.571-16.571 17.714-16.571h81.143c7.429 0 13.714 4.571 16.571 10.857l125.714 297.143c4 9.143 8 19.429 11.429 29.143 4-9.714 7.429-20 11.429-29.143l126.286-297.143c2.857-6.286 9.143-10.857 16.571-10.857h80.571c9.714 0 17.714 7.429 18.286 16.571z"></path>
                    </svg>
                  </div>
                  <svg viewBox="0 0 1127.424 1024" className="welcome1-icon02">
                    <path d="M489.714 310.857v66.857c0 9.714-8.571 17.714-18.286 17.714h-170.286v464c0 10.286-8 18.286-17.714 18.286h-77.143c-10.286 0-18.286-8-18.286-18.286v-464h-169.714c-10.286 0-18.286-8-18.286-17.714v-66.857c0-10.286 8-18.286 18.286-18.286h453.143c9.714 0 18.286 8 18.286 18.286zM1082.857 309.143l44 549.143c0.571 5.143-1.143 9.714-4.571 13.714-3.429 3.429-8 5.714-13.143 5.714h-76.571c-9.143 0-17.143-7.429-17.714-16.571l-26.286-336-108 242.857c-2.857 6.857-9.143 10.857-16.571 10.857h-68.571c-6.857 0-13.143-4-16.571-10.857l-107.429-244-25.714 337.143c-0.571 9.143-8.571 16.571-17.714 16.571h-77.143c-5.143 0-9.714-2.286-13.143-5.714-3.429-4-5.143-8.571-5.143-13.714l44.571-549.143c0.571-9.143 8.571-16.571 17.714-16.571h81.143c7.429 0 13.714 4.571 16.571 10.857l125.714 297.143c4 9.143 8 19.429 11.429 29.143 4-9.714 7.429-20 11.429-29.143l126.286-297.143c2.857-6.286 9.143-10.857 16.571-10.857h80.571c9.714 0 17.714 7.429 18.286 16.571z"></path>
                  </svg>
                </div>
              </a>
            </Link>
            <header
              data-thq="thq-navbar"
              className="welcome1-navbar-interactive"
            >
              <div data-thq="thq-navbar-nav" className="welcome1-desktop-menu">
                <nav className="welcome1-links">
                  <Link legacyBehavior href="/nf-ts">
                    <a className="welcome1-link01">NFTs</a>
                  </Link>
                  <Link legacyBehavior href="/tokens">
                    <a className="welcome1-link02">Tokens</a>
                  </Link>
                  <Link legacyBehavior href="/users">
                    <a className="welcome1-link03">Members</a>
                  </Link>
                  <span className="welcome1-text02">Docs</span>
                  <Link legacyBehavior href="/mining">
                    <a className="welcome1-link04">
                      <span>Mining</span>
                      <br></br>
                    </a>
                  </Link>
                  <span className="welcome1-text05">FAQ</span>
                </nav>
                <div className="welcome1-buttons">
                  <Link legacyBehavior href="/swap">
                    <a className="welcome1-link05 button">Launch App</a>
                  </Link>
                </div>
              </div>
              <div data-thq="thq-burger-menu" className="welcome1-burger-menu">
                <svg viewBox="0 0 1024 1024" className="welcome1-icon04">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div data-thq="thq-mobile-menu" className="welcome1-mobile-menu">
                <div className="welcome1-nav">
                  <div className="welcome1-top">
                    <div
                      data-thq="thq-close-menu"
                      className="welcome1-close-menu"
                    >
                      <svg viewBox="0 0 1024 1024" className="welcome1-icon06">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <nav className="welcome1-links1">
                    <Link legacyBehavior href="/nf-ts">
                      <a className="welcome1-link06">NFTs</a>
                    </Link>
                    <Link legacyBehavior href="/nf-ts">
                      <a className="welcome1-link07">Tokens</a>
                    </Link>
                    <Link legacyBehavior href="/users">
                      <a className="welcome1-link08">Members</a>
                    </Link>
                    <Link legacyBehavior href="/nf-ts">
                      <a className="welcome1-link09">Mine</a>
                    </Link>
                    <Link legacyBehavior href="/nf-ts">
                      <a className="welcome1-link10">Governance</a>
                    </Link>
                    <Link legacyBehavior href="/nf-ts">
                      <a className="welcome1-link11">Mine</a>
                    </Link>
                  </nav>
                  <button className="welcome1-register1 button">
                    Launch App
                  </button>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div className="welcome1-container05">
          <div className="welcome1-container06">
            <div className="welcome1-container07">
              <div className="welcome1-container08">
                <h1 className="welcome1-text06">
                  <span className="welcome1-text07">Rar3</span>
                  <span className="welcome1-text08">Bay </span>
                  <span>De</span>
                  <span className="welcome1-text10">Fi</span>
                  <br></br>
                </h1>
                <animate-on-reveal
                  animation="flash"
                  duration="1000ms"
                  delay="2s"
                  direction="normal"
                  easing="ease"
                  iteration="1"
                >
                  <h1
                    data-thq-animate-on-reveal="true"
                    className="welcome1-text12"
                  >
                    <span className="welcome1-text13">Crazy-Fast!</span>
                    <span className="welcome1-text14"> </span>
                    <span className="welcome1-text15">secure! </span>
                    <span className="welcome1-text16">
                      Rare! Decentralized 
                    </span>
                    <span className="welcome1-text17">Exchange</span>
                    <br className="welcome1-text18"></br>
                  </h1>
                </animate-on-reveal>
                <h1 className="welcome1-text19">
                  <span>
                    Verify, Mine, Stake, Trade, Swap, Track, Inscribe, Farm,
                    Earn, Borrow, Lend, play! faster than ever, seamlessly
                    anywhere anytime. 
                  </span>
                  <br></br>
                </h1>
                <div className="welcome1-container09">
                  <svg viewBox="0 0 1024 1024" className="welcome1-icon08">
                    <path d="M888.875 224.512c-7.936 10.325-16.683 20.267-26.283 29.696-9.941 9.899-14.805 24.192-11.861 38.741 1.579 7.765 2.56 17.237 2.603 27.051 0 224.256-103.637 382.763-247.893 464.981-112.939 64.384-253.355 83.413-393.472 47.787 53.12-15.403 104.96-39.296 153.301-72.107 6.272-4.224 11.648-10.368 15.019-17.963 9.557-21.547-0.128-46.763-21.675-56.32-118.357-52.608-176.213-125.056-203.477-195.968-17.792-46.251-23.296-93.781-22.187-137.685 0.896-34.603 5.888-66.56 11.861-93.099 16.853 14.592 34.304 30.080 52.736 44.245 87.509 67.285 197.291 105.813 315.563 102.741 23.083-0.64 41.557-19.499 41.557-42.667v-43.136c-0.085-7.637 0.384-15.232 1.451-22.784 4.821-34.389 21.504-66.944 49.579-91.349 30.933-26.923 69.803-38.741 107.776-36.096s74.795 19.755 101.717 50.688c10.752 12.203 27.691 17.749 44.075 12.971 9.856-2.859 19.755-6.101 29.653-9.728zM956.757 93.141c-31.573 22.272-64.981 39.509-97.579 51.413-39.723-35.669-89.216-55.552-139.776-59.093-59.648-4.139-121.003 14.464-169.685 56.832-44.203 38.443-70.485 89.899-78.080 143.872-1.579 11.307-2.347 22.741-2.304 34.133-82.005-6.059-157.611-36.267-219.776-84.096-33.067-25.429-62.336-55.851-86.784-90.24-13.653-19.2-40.277-23.765-59.477-10.112-6.571 4.651-11.392 10.795-14.293 17.451 0 0-5.632 12.757-12.16 32.427-4.779 14.379-10.283 33.067-15.232 55.040-6.955 30.805-12.885 68.352-13.909 109.696-1.323 52.352 5.12 111.445 27.819 170.496 29.141 75.733 83.883 148.395 176.939 205.781-66.944 30.976-138.453 44.331-207.915 41.259-23.552-1.024-43.477 17.195-44.501 40.747-0.725 16.597 8.107 31.403 21.888 39.168 209.28 116.267 444.843 114.261 625.749 11.136 172.416-98.176 290.987-285.867 290.987-539.051-0.043-7.125-0.341-14.080-0.981-20.864 42.923-47.573 71.509-103.637 85.163-161.323 5.419-22.912-8.789-45.909-31.701-51.328-12.373-2.944-24.747-0.128-34.432 6.656z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="welcome1-icon10">
                    <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="welcome1-icon12">
                    <path d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM288 672c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zM736 672c-88.4 0-160-71.6-160-160s71.6-160 160-160c88.4 0 160 71.6 160 160s-71.6 160-160 160z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1025.1702857142857 1024"
                    className="welcome1-icon14"
                  >
                    <path d="M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-258.857-105.714-138.286 168.571c-6.857 8.571-17.143 13.143-28 13.143-4 0-8.571-0.571-12.571-2.286-14.286-5.143-24-18.857-24-34.286v-199.429l493.714-605.143-610.857 528.571-225.714-92.571c-13.143-5.143-21.714-17.143-22.857-31.429-0.571-13.714 6.286-26.857 18.286-33.714l950.857-548.571c5.714-3.429 12-5.143 18.286-5.143 7.429 0 14.857 2.286 20.571 6.286z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="welcome1-container10">
              <div
                data-thq="slider"
                data-loop="true"
                data-autoplay="true"
                data-navigation="false"
                data-pagination="false"
                data-autoplay-delay="1500"
                className="welcome1-slider swiper"
              >
                <div data-thq="slider-wrapper" className="swiper-wrapper">
                  <div
                    data-thq="slider-slide"
                    className="welcome1-slider-slide swiper-slide"
                  >
                    <div className="welcome1-container11">
                      <div className="welcome1-container12"></div>
                      <div className="welcome1-container13"></div>
                    </div>
                    <div className="welcome1-container14">
                      <div className="welcome1-container15"></div>
                      <div className="welcome1-container16"></div>
                    </div>
                    <div className="welcome1-container17">
                      <div className="welcome1-container18"></div>
                      <div className="welcome1-container19"></div>
                    </div>
                    <div className="welcome1-container20">
                      <div className="welcome1-container21"></div>
                      <div className="welcome1-container22"></div>
                    </div>
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="welcome1-slider-slide1 swiper-slide"
                  >
                    <div className="welcome1-container23">
                      <div className="welcome1-container24"></div>
                      <div className="welcome1-container25"></div>
                    </div>
                    <div className="welcome1-container26">
                      <div className="welcome1-container27"></div>
                      <div className="welcome1-container28"></div>
                    </div>
                    <div className="welcome1-container29">
                      <div className="welcome1-container30"></div>
                      <div className="welcome1-container31"></div>
                    </div>
                    <div className="welcome1-container32">
                      <div className="welcome1-container33"></div>
                      <div className="welcome1-container34"></div>
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-pagination"
                  className="welcome1-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
                ></div>
                <div
                  data-thq="slider-button-prev"
                  className="welcome1-slider-button-prev swiper-button-prev"
                ></div>
                <div
                  data-thq="slider-button-next"
                  className="welcome1-slider-button-next swiper-button-next"
                ></div>
              </div>
              <div
                data-thq="slider"
                data-loop="true"
                data-autoplay="true"
                data-navigation="false"
                data-pagination="false"
                data-autoplay-delay="2500"
                data-reverse-direction="true"
                className="welcome1-slider1 swiper"
              >
                <div data-thq="slider-wrapper" className="swiper-wrapper">
                  <div
                    data-thq="slider-slide"
                    className="welcome1-slider-slide2 swiper-slide"
                  >
                    <div className="welcome1-container35">
                      <div className="welcome1-container36"></div>
                      <div className="welcome1-container37"></div>
                    </div>
                    <div className="welcome1-container38">
                      <div className="welcome1-container39"></div>
                      <div className="welcome1-container40"></div>
                    </div>
                    <div className="welcome1-container41">
                      <div className="welcome1-container42"></div>
                      <div className="welcome1-container43"></div>
                    </div>
                    <div className="welcome1-container44">
                      <div className="welcome1-container45"></div>
                      <div className="welcome1-container46"></div>
                    </div>
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="welcome1-slider-slide3 swiper-slide"
                  >
                    <div className="welcome1-container47">
                      <div className="welcome1-container48"></div>
                      <div className="welcome1-container49"></div>
                    </div>
                    <div className="welcome1-container50">
                      <div className="welcome1-container51"></div>
                      <div className="welcome1-container52"></div>
                    </div>
                    <div className="welcome1-container53">
                      <div className="welcome1-container54"></div>
                      <div className="welcome1-container55"></div>
                    </div>
                    <div className="welcome1-container56">
                      <div className="welcome1-container57"></div>
                      <div className="welcome1-container58"></div>
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-pagination"
                  className="welcome1-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
                ></div>
                <div
                  data-thq="slider-button-prev"
                  className="welcome1-slider-button-prev1 swiper-button-prev"
                ></div>
                <div
                  data-thq="slider-button-next"
                  className="welcome1-slider-button-next1 swiper-button-next"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="welcome1-container59">
          <div className="welcome1-container60">
            <div className="welcome1-container61">
              <svg
                viewBox="0 0 1170.2857142857142 1024"
                className="welcome1-icon16"
              >
                <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM1097.143 164.571v248.571c0 16-19.429 24.571-31.429 12.571l-69.143-69.143-361.714 361.714c-7.429 7.429-18.857 7.429-26.286 0l-133.143-133.143-237.714 237.714-109.714-109.714 334.286-334.286c7.429-7.429 18.857-7.429 26.286 0l133.143 133.143 265.143-265.143-69.143-69.143c-12-12-3.429-31.429 12.571-31.429h248.571c10.286 0 18.286 8 18.286 18.286z"></path>
              </svg>
              <h1 className="welcome1-text22">Trade Volume</h1>
            </div>
            <h1 className="welcome1-text23">--</h1>
          </div>
          <div className="welcome1-container62">
            <div className="welcome1-container63">
              <svg
                viewBox="0 0 1097.142857142857 1024"
                className="welcome1-icon18"
              >
                <path d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"></path>
              </svg>
              <h1 className="welcome1-text24">Members</h1>
            </div>
            <h1 className="welcome1-text25">--</h1>
          </div>
          <div className="welcome1-container64">
            <div className="welcome1-container65">
              <svg viewBox="0 0 1024 1024" className="welcome1-icon20">
                <path d="M426 726l342-342-60-60-282 280-110-110-60 60zM512 42l384 172v256q0 178-110 325t-274 187q-164-40-274-187t-110-325v-256z"></path>
              </svg>
              <h1 className="welcome1-text26">Verified Users</h1>
            </div>
            <h1 className="welcome1-text27">--</h1>
          </div>
          <div className="welcome1-container66">
            <div className="welcome1-container67">
              <svg
                viewBox="0 0 1243.4285714285713 1024"
                className="welcome1-icon22"
              >
                <path d="M365.714 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM329.143 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM950.857 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM914.286 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM658.286 505.714l219.429-94.286v-152l-219.429 93.714v152.571zM621.714 289.143l252-108-252-108-252 108zM1243.429 585.143v237.714c0 27.429-15.429 53.143-40.571 65.143l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-1.714-0.571-2.857-1.143-4-2.286-1.143 1.143-2.286 1.714-4 2.286l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-25.143-12-40.571-37.714-40.571-65.143v-237.714c0-29.143 17.714-55.429 44.571-67.429l248-106.286v-228.571c0-29.143 17.714-55.429 44.571-67.429l256-109.714c9.143-4 18.857-5.714 28.571-5.714s19.429 1.714 28.571 5.714l256 109.714c26.857 12 44.571 38.286 44.571 67.429v228.571l248 106.286c27.429 12 44.571 38.286 44.571 67.429z"></path>
              </svg>
              <h1 className="welcome1-text28">Liquidity</h1>
            </div>
            <h1 className="welcome1-text29">--</h1>
          </div>
        </div>
        <Component1 rootClassName="component1-root-class-name3"></Component1>
      </div>
      <style jsx>
        {`
          .welcome1-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-height: 100vh;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-size: contain, auto;
            justify-content: flex-start;
            background-image: url('https://www.pngmart.com/files/13/Pattern-PNG-Transparent-Image.png'),
              radial-gradient(
                circle at center,
                rgb(0, 0, 0) 3%,
                rgb(4, 5, 13) 98%
              );
            background-position: center, fixed;
          }
          .welcome1-container01 {
            width: 100%;
            height: 58px;
            display: flex;
            z-index: 2;
            position: fixed;
            align-items: center;
            flex-direction: column;
            backdrop-filter: blur(20px);
            justify-content: center;
            background-color: rgba(20, 20, 20, 0.38);
          }
          .welcome1-container02 {
            width: 100%;
            height: 58px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .welcome1-link {
            display: contents;
          }
          .welcome1-container03 {
            flex: 0 0 auto;
            width: 242px;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: center;
            justify-content: flex-start;
            text-decoration: none;
          }
          .welcome1-container04 {
            flex: 0 0 auto;
            width: 136px;
            height: var(--dl-size-size-small);
            margin: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: flex-start;
          }
          .welcome1-image {
            width: 54px;
            height: 59px;
            object-fit: cover;
          }
          .welcome1-text {
            color: #818181;
            font-size: 24px;
            font-family: 'Arial';
            font-weight: 900;
          }
          .welcome1-text01 {
            color: #ffffff;
            font-size: 24px;
            font-family: 'Arial';
            font-weight: 900;
          }
          .welcome1-icon {
            width: 24px;
            height: 24px;
          }
          .welcome1-icon02 {
            top: 21px;
            fill: #d9d9d9;
            left: 209px;
            width: 12px;
            height: 12px;
            position: absolute;
          }
          .welcome1-navbar-interactive {
            color: var(--dl-color-gray-500);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .welcome1-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .welcome1-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .welcome1-link01 {
            text-decoration: none;
          }
          .welcome1-link02 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .welcome1-link03 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .welcome1-text02 {
            margin-left: var(--dl-space-space-twounits);
          }
          .welcome1-link04 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .welcome1-text05 {
            margin-left: var(--dl-space-space-twounits);
          }
          .welcome1-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .welcome1-link05 {
            color: #a5a5a5;
            padding: 10px;
            transition: 0.3s;
            border-width: 0px;
            text-decoration: none;
            background-color: #2f2f2f;
          }
          .welcome1-link05:hover {
            color: var(--dl-color-gray-white);
            scale: 1.1;
            box-shadow: rgba(200, 200, 200, 0.5) 2px 2px 50px;
          }
          .welcome1-burger-menu {
            display: none;
          }
          .welcome1-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .welcome1-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: absolute;
            transform: translateY(-100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #000000;
          }
          .welcome1-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome1-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-end;
          }
          .welcome1-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .welcome1-icon06 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .welcome1-links1 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome1-link06 {
            text-decoration: none;
          }
          .welcome1-link07 {
            text-decoration: none;
          }
          .welcome1-link08 {
            text-decoration: none;
          }
          .welcome1-link09 {
            text-decoration: none;
          }
          .welcome1-link10 {
            text-decoration: none;
          }
          .welcome1-link11 {
            text-decoration: none;
          }
          .welcome1-register1 {
            color: #565656;
            padding: 10px;
            border-width: 0px;
            background-color: #2f2f2f;
          }
          .welcome1-container05 {
            width: 100%;
            height: 631px;
            display: flex;
            overflow: hidden;
            align-items: center;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgb(0, 0, 0) 1%,
              rgba(0, 36, 89, 0.16) 99%
            );
            background-position: center;
          }
          .welcome1-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: 466px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .welcome1-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome1-container08 {
            width: 892px;
            height: 538px;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-text06 {
            color: rgb(188, 188, 188);
            font-size: 100px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Arial Black';
            font-weight: 900;
            padding-top: var(--dl-space-space-unit);
            text-shadow: black 2px 2px 10px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            animation-name: lightSpeedInLeft;
            padding-bottom: var(--dl-space-space-unit);
            animation-delay: 1s;
            animation-duration: 1s;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .welcome1-text07 {
            color: #646464;
          }
          .welcome1-text08 {
            color: #ffffff;
          }
          .welcome1-text10 {
            color: #333333;
          }
          .welcome1-text12 {
            width: 100%;
            font-size: 40px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Arial Black';
            font-weight: 900;
            padding-top: 0px;
            text-shadow: black 2px 2px 10px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .welcome1-text13 {
            color: #f9f9f9;
          }
          .welcome1-text14 {
            color: #f9f9f9;
          }
          .welcome1-text15 {
            color: #ff5711;
          }
          .welcome1-text16 {
            color: #bcbcbc;
          }
          .welcome1-text17 {
            color: #ffffff;
          }
          .welcome1-text18 {
            color: #bcbcbc;
          }
          .welcome1-text19 {
            color: #e6e6e6;
            width: 739px;
            height: 151px;
            font-size: 30px;
            align-self: flex-start;
            font-style: italic;
            font-family: 'Exo 2';
            font-weight: 500;
            padding-top: var(--dl-space-space-unit);
            text-shadow: black 2px 2px 10px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .welcome1-container09 {
            width: 274px;
            height: 72px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-self: flex-start;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .welcome1-icon08 {
            fill: #d9d9d9;
            width: 29px;
            height: 30px;
          }
          .welcome1-icon10 {
            fill: #d9d9d9;
            width: 31px;
            height: 27px;
          }
          .welcome1-icon12 {
            fill: #d9d9d9;
            width: 33px;
            height: 50%;
          }
          .welcome1-icon14 {
            fill: #d9d9d9;
            width: 44px;
            height: 50%;
          }
          .welcome1-container10 {
            width: auto;
            height: 531px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-slider {
            width: 500px;
            height: 264px;
            display: inline-block;
          }
          .welcome1-slider-slide {
            width: 501px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .welcome1-container11 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container12 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(10)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container13 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(11)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container14 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container15 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(101)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container16 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(80)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container17 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container18 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(102)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container19 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(8)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container20 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container21 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(104)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container22 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(103)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-slider-slide1 {
            width: 501px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .welcome1-container23 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container24 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(13)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container25 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(216)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container26 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container27 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(211)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container28 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(220)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container29 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container30 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(212)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container31 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(223)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container32 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container33 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(213)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container34 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(79)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-slider-pagination {
            display: none;
          }
          .welcome1-slider-button-prev {
            color: #fbfbfb;
            display: none;
          }
          .welcome1-slider-button-next {
            color: #ffffff;
            display: none;
          }
          .welcome1-slider1 {
            width: 500px;
            height: 269px;
            display: inline-block;
          }
          .welcome1-slider-slide2 {
            width: 501px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .welcome1-container35 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container36 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(9)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container37 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(349)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container38 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container39 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(78)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container40 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(350)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container41 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container42 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(224)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container43 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(354)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container44 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container45 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(347)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container46 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(355)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-slider-slide3 {
            width: 501px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .welcome1-container47 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container48 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(355)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container49 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(81)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container50 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container51 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(358)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container52 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(220)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container53 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container54 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(356)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container55 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(351)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container56 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container57 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(8)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-container58 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/rar31ones%20(350)-200w.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .welcome1-slider-pagination1 {
            display: none;
          }
          .welcome1-slider-button-prev1 {
            color: #fbfbfb;
            display: none;
          }
          .welcome1-slider-button-next1 {
            color: #ffffff;
            display: none;
          }
          .welcome1-container59 {
            width: 100%;
            height: 204px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .welcome1-container60 {
            flex: 0 0 auto;
            width: 301px;
            height: 109px;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container61 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .welcome1-icon16 {
            fill: #00aeff;
            width: 25px;
            height: 100%;
          }
          .welcome1-text22 {
            color: rgb(120, 120, 120);
            font-size: 1.5em;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 400;
            margin-left: var(--dl-space-space-unit);
          }
          .welcome1-text23 {
            color: #c9c9c9;
          }
          .welcome1-container62 {
            flex: 0 0 auto;
            width: 301px;
            height: 109px;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container63 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .welcome1-icon18 {
            fill: #d9d9d9;
            width: 24px;
            height: 100%;
          }
          .welcome1-text24 {
            color: rgb(120, 120, 120);
            font-size: 1.5em;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 400;
            margin-left: var(--dl-space-space-unit);
          }
          .welcome1-text25 {
            color: #c9c9c9;
          }
          .welcome1-container64 {
            flex: 0 0 auto;
            width: 301px;
            height: 109px;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container65 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .welcome1-icon20 {
            fill: #64ee5a;
            width: 24px;
            height: 100%;
          }
          .welcome1-text26 {
            color: rgb(120, 120, 120);
            font-size: 1.5em;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 400;
            margin-left: var(--dl-space-space-unit);
          }
          .welcome1-text27 {
            color: #c9c9c9;
          }
          .welcome1-container66 {
            flex: 0 0 auto;
            width: 301px;
            height: 109px;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .welcome1-container67 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .welcome1-icon22 {
            fill: #6d6d6d;
            width: 24px;
            height: 100%;
          }
          .welcome1-text28 {
            color: rgb(120, 120, 120);
            font-size: 1.5em;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 400;
            margin-left: var(--dl-space-space-unit);
          }
          .welcome1-text29 {
            color: #c9c9c9;
          }
          @media (max-width: 1200px) {
            .welcome1-container03 {
              width: 219px;
            }
            .welcome1-container05 {
              height: 1039px;
            }
            .welcome1-container06 {
              height: 438px;
              flex-direction: column;
            }
            .welcome1-container08 {
              height: 380px;
            }
            .welcome1-container10 {
              width: auto;
            }
          }
          @media (max-width: 767px) {
            .welcome1-container01 {
              width: 766px;
            }
            .welcome1-container02 {
              width: 100%;
            }
            .welcome1-navbar-interactive {
              width: auto;
              height: auto;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              justify-content: flex-end;
            }
            .welcome1-desktop-menu {
              display: none;
            }
            .welcome1-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .welcome1-icon04 {
              fill: #d9d9d9;
              width: 31px;
              height: 34px;
            }
            .welcome1-mobile-menu {
              background-color: #000000;
            }
            .welcome1-nav {
              width: 369px;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .welcome1-top {
              justify-content: flex-end;
            }
            .welcome1-icon06 {
              fill: #d9d9d9;
              width: 21px;
              height: 24px;
            }
            .welcome1-container05 {
              height: 846px;
            }
            .welcome1-container06 {
              height: 670px;
            }
            .welcome1-container07 {
              width: 100%;
            }
            .welcome1-container08 {
              width: 100%;
            }
            .welcome1-text06 {
              width: 100%;
              font-size: 50px;
            }
            .welcome1-text12 {
              width: 100%;
              font-size: 30px;
            }
            .welcome1-text19 {
              width: 100%;
              font-size: 20px;
            }
            .welcome1-container10 {
              width: auto;
              height: 297px;
              margin: var(--dl-space-space-unit);
            }
            .welcome1-slider1 {
              display: none;
            }
            .welcome1-container59 {
              height: 764px;
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .welcome1-container01 {
              width: 100%;
            }
            .welcome1-container02 {
              width: 100%;
            }
            .welcome1-container03 {
              width: 50%;
              height: auto;
              justify-content: space-between;
            }
            .welcome1-container04 {
              width: 49px;
            }
            .welcome1-icon02 {
              top: 56px;
              right: 19px;
            }
            .welcome1-navbar-interactive {
              padding: var(--dl-space-space-unit);
              justify-content: flex-end;
            }
            .welcome1-icon04 {
              fill: #d9d9d9;
              width: 31px;
              height: 26px;
            }
            .welcome1-mobile-menu {
              top: 0px;
              left: 0px;
              padding: 16px;
              background-color: #000000;
            }
            .welcome1-nav {
              width: auto;
              padding: var(--dl-space-space-twounits);
              align-self: flex-start;
            }
            .welcome1-top {
              align-self: flex-start;
              justify-content: flex-start;
            }
            .welcome1-close-menu {
              justify-content: flex-end;
            }
            .welcome1-icon06 {
              fill: #d9d9d9;
              width: 22px;
              height: 20px;
            }
            .welcome1-links1 {
              width: auto;
              margin-bottom: var(--dl-space-space-unit);
            }
            .welcome1-link07 {
              text-decoration: none;
            }
            .welcome1-link08 {
              text-decoration: none;
            }
            .welcome1-link09 {
              text-decoration: none;
            }
            .welcome1-link10 {
              text-decoration: none;
            }
            .welcome1-link11 {
              text-decoration: none;
            }
            .welcome1-register1 {
              width: 100%;
            }
            .welcome1-container05 {
              height: 888px;
            }
            .welcome1-container06 {
              height: 254px;
            }
            .welcome1-container07 {
              width: 100%;
              height: 291px;
            }
            .welcome1-container08 {
              width: 100%;
              height: 277px;
              padding: var(--dl-space-space-halfunit);
            }
            .welcome1-text06 {
              width: 100%;
              font-size: 40px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .welcome1-text12 {
              width: 100%;
              height: 84px;
              font-size: 24px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .welcome1-text19 {
              width: 100%;
              height: 367px;
              font-size: 20px;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .welcome1-container09 {
              height: 326px;
            }
            .welcome1-container10 {
              width: 100%;
              height: 253px;
            }
            .welcome1-slider {
              width: 100%;
              height: 282px;
            }
            .welcome1-slider-slide {
              width: 100%;
              height: 212px;
              align-items: center;
            }
            .welcome1-container11 {
              width: 95px;
            }
            .welcome1-container14 {
              width: 90px;
            }
            .welcome1-container17 {
              width: 75px;
            }
            .welcome1-container20 {
              width: 105px;
            }
            .welcome1-slider-slide1 {
              width: 100%;
              height: 255px;
              align-items: center;
            }
            .welcome1-container23 {
              width: 91px;
            }
            .welcome1-container26 {
              width: 87px;
            }
            .welcome1-container29 {
              width: 85px;
            }
            .welcome1-container32 {
              width: 97px;
            }
            .welcome1-slider1 {
              width: 100%;
              height: 878px;
            }
            .welcome1-slider-slide2 {
              width: 100%;
              height: 205px;
              align-items: center;
            }
            .welcome1-container35 {
              width: 97px;
            }
            .welcome1-container38 {
              width: 96px;
            }
            .welcome1-container41 {
              width: 98px;
            }
            .welcome1-container44 {
              width: 89px;
            }
            .welcome1-slider-slide3 {
              width: 100%;
              height: 241px;
              align-items: center;
            }
            .welcome1-container47 {
              width: 85px;
            }
            .welcome1-container50 {
              width: 91px;
            }
            .welcome1-container53 {
              width: 85px;
            }
            .welcome1-container56 {
              width: 84px;
            }
            .welcome1-container59 {
              height: 519px;
              align-self: center;
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
            }
            .welcome1-container60 {
              width: 100%;
              align-items: flex-start;
            }
            .welcome1-container62 {
              width: 100%;
              align-items: flex-start;
            }
            .welcome1-container64 {
              width: 100%;
              align-items: flex-start;
              margin-left: 0px;
              margin-right: 0px;
            }
            .welcome1-container66 {
              width: 100%;
              align-items: flex-start;
              margin-left: 0px;
              margin-right: 0px;
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
    coreBlockchain,
    { secretKey }
  );

  // Check to see if the user has an NFT
  const hasNft = await checkBalance(sdk, user.address);

  // If they have an NFT, redirect them to the home page
  if (hasNft) {
    return {
      redirect: {
        destination: "/swap",
        permanent: false,
      },
    };
  }

  // Finally, return the props
  return {
    props: {},
  };
}