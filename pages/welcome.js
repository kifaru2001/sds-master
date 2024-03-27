import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Mine from '../components/mine'

const Welcome = (props) => {
  return (
    <>
      <div className="welcome-container">
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
            content="Welcome - Crazy-Fast! secure! Rare! Decentralized Exchange"
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
        <div className="welcome-container01">
          <div className="welcome-container02">
            <Link legacyBehavior href="/swap">
              <a className="welcome-link">
                <div className="welcome-container03">
                  <div className="welcome-container04">
                    <img
                      alt="image"
                      src="/favicon-200h.webp"
                      className="welcome-image"
                    />
                    <span className="welcome-text">Rare</span>
                    <span className="welcome-text01">Bay</span>
                    <svg viewBox="0 0 1127.424 1024" className="welcome-icon">
                      <path d="M489.714 310.857v66.857c0 9.714-8.571 17.714-18.286 17.714h-170.286v464c0 10.286-8 18.286-17.714 18.286h-77.143c-10.286 0-18.286-8-18.286-18.286v-464h-169.714c-10.286 0-18.286-8-18.286-17.714v-66.857c0-10.286 8-18.286 18.286-18.286h453.143c9.714 0 18.286 8 18.286 18.286zM1082.857 309.143l44 549.143c0.571 5.143-1.143 9.714-4.571 13.714-3.429 3.429-8 5.714-13.143 5.714h-76.571c-9.143 0-17.143-7.429-17.714-16.571l-26.286-336-108 242.857c-2.857 6.857-9.143 10.857-16.571 10.857h-68.571c-6.857 0-13.143-4-16.571-10.857l-107.429-244-25.714 337.143c-0.571 9.143-8.571 16.571-17.714 16.571h-77.143c-5.143 0-9.714-2.286-13.143-5.714-3.429-4-5.143-8.571-5.143-13.714l44.571-549.143c0.571-9.143 8.571-16.571 17.714-16.571h81.143c7.429 0 13.714 4.571 16.571 10.857l125.714 297.143c4 9.143 8 19.429 11.429 29.143 4-9.714 7.429-20 11.429-29.143l126.286-297.143c2.857-6.286 9.143-10.857 16.571-10.857h80.571c9.714 0 17.714 7.429 18.286 16.571z"></path>
                    </svg>
                  </div>
                  <svg viewBox="0 0 1127.424 1024" className="welcome-icon02">
                    <path d="M489.714 310.857v66.857c0 9.714-8.571 17.714-18.286 17.714h-170.286v464c0 10.286-8 18.286-17.714 18.286h-77.143c-10.286 0-18.286-8-18.286-18.286v-464h-169.714c-10.286 0-18.286-8-18.286-17.714v-66.857c0-10.286 8-18.286 18.286-18.286h453.143c9.714 0 18.286 8 18.286 18.286zM1082.857 309.143l44 549.143c0.571 5.143-1.143 9.714-4.571 13.714-3.429 3.429-8 5.714-13.143 5.714h-76.571c-9.143 0-17.143-7.429-17.714-16.571l-26.286-336-108 242.857c-2.857 6.857-9.143 10.857-16.571 10.857h-68.571c-6.857 0-13.143-4-16.571-10.857l-107.429-244-25.714 337.143c-0.571 9.143-8.571 16.571-17.714 16.571h-77.143c-5.143 0-9.714-2.286-13.143-5.714-3.429-4-5.143-8.571-5.143-13.714l44.571-549.143c0.571-9.143 8.571-16.571 17.714-16.571h81.143c7.429 0 13.714 4.571 16.571 10.857l125.714 297.143c4 9.143 8 19.429 11.429 29.143 4-9.714 7.429-20 11.429-29.143l126.286-297.143c2.857-6.286 9.143-10.857 16.571-10.857h80.571c9.714 0 17.714 7.429 18.286 16.571z"></path>
                  </svg>
                </div>
              </a>
            </Link>
            <header
              data-thq="thq-navbar"
              className="welcome-navbar-interactive"
            >
              <div data-thq="thq-navbar-nav" className="welcome-desktop-menu">
                <nav className="welcome-links">
                  <Link legacyBehavior href="/nf-ts">
                    <a className="welcome-link01">NFTs</a>
                  </Link>
                  <Link legacyBehavior href="/tokens">
                    <a className="welcome-link02">Tokens</a>
                  </Link>
                  <Link legacyBehavior href="/users">
                    <a className="welcome-link03">Members</a>
                  </Link>
                  <span className="welcome-text02">Docs</span>
                  <Link legacyBehavior href="/mining">
                    <a className="welcome-link04">
                      <span>Mining</span>
                      <br></br>
                    </a>
                  </Link>
                  <span className="welcome-text05">FAQ</span>
                </nav>
                <div className="welcome-buttons">
                  <Link legacyBehavior href="/swap">
                    <a className="welcome-link05 button">Launch App</a>
                  </Link>
                </div>
              </div>
              <div data-thq="thq-burger-menu" className="welcome-burger-menu">
                <svg viewBox="0 0 1024 1024" className="welcome-icon04">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div data-thq="thq-mobile-menu" className="welcome-mobile-menu">
                <div className="welcome-nav">
                  <div className="welcome-top">
                    <div
                      data-thq="thq-close-menu"
                      className="welcome-close-menu"
                    >
                      <svg viewBox="0 0 1024 1024" className="welcome-icon06">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <nav className="welcome-links1">
                    <Link legacyBehavior href="/nf-ts">
                      <a className="welcome-link06">NFTs</a>
                    </Link>
                    <Link legacyBehavior href="/nf-ts">
                      <a className="welcome-link07">Tokens</a>
                    </Link>
                    <Link legacyBehavior href="/users">
                      <a className="welcome-link08">Members</a>
                    </Link>
                    <Link legacyBehavior href="/nf-ts">
                      <a className="welcome-link09">Mine</a>
                    </Link>
                    <Link legacyBehavior href="/nf-ts">
                      <a className="welcome-link10">Governance</a>
                    </Link>
                    <Link legacyBehavior href="/nf-ts">
                      <a className="welcome-link11">Mine</a>
                    </Link>
                  </nav>
                  <button className="welcome-register1 button">
                    Launch App
                  </button>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div className="welcome-container05">
          <div className="welcome-container06">
            <div className="welcome-container07">
              <div className="welcome-container08">
                <h1 className="welcome-text06">
                  <span className="welcome-text07">Rar3</span>
                  <span className="welcome-text08">Bay </span>
                  <span>De</span>
                  <span className="welcome-text10">Fi</span>
                  <br></br>
                </h1>
                <animate-on-reveal
                  animation="pulse"
                  duration="3s"
                  delay="6s"
                  direction="normal"
                  easing="ease"
                  iteration="1"
                >
                  <h1
                    data-thq-animate-on-reveal="true"
                    className="welcome-text12"
                  >
                    <span className="welcome-text13">Crazy-Fast!</span>
                    <span className="welcome-text14"> </span>
                    <span className="welcome-text15">secure! </span>
                    <span className="welcome-text16">Rare! Decentralized </span>
                    <span className="welcome-text17">Exchange</span>
                    <br className="welcome-text18"></br>
                  </h1>
                </animate-on-reveal>
                <h1 className="welcome-text19">
                  <span>
                    Verify, Mine, Stake, Trade, Swap, Track, Inscribe, Farm,
                    Earn, Borrow, Lend, play! faster than ever, seamlessly
                    anywhere anytime. 
                  </span>
                  <br></br>
                </h1>
                <div className="welcome-container09">
                  <svg viewBox="0 0 1024 1024" className="welcome-icon08">
                    <path d="M888.875 224.512c-7.936 10.325-16.683 20.267-26.283 29.696-9.941 9.899-14.805 24.192-11.861 38.741 1.579 7.765 2.56 17.237 2.603 27.051 0 224.256-103.637 382.763-247.893 464.981-112.939 64.384-253.355 83.413-393.472 47.787 53.12-15.403 104.96-39.296 153.301-72.107 6.272-4.224 11.648-10.368 15.019-17.963 9.557-21.547-0.128-46.763-21.675-56.32-118.357-52.608-176.213-125.056-203.477-195.968-17.792-46.251-23.296-93.781-22.187-137.685 0.896-34.603 5.888-66.56 11.861-93.099 16.853 14.592 34.304 30.080 52.736 44.245 87.509 67.285 197.291 105.813 315.563 102.741 23.083-0.64 41.557-19.499 41.557-42.667v-43.136c-0.085-7.637 0.384-15.232 1.451-22.784 4.821-34.389 21.504-66.944 49.579-91.349 30.933-26.923 69.803-38.741 107.776-36.096s74.795 19.755 101.717 50.688c10.752 12.203 27.691 17.749 44.075 12.971 9.856-2.859 19.755-6.101 29.653-9.728zM956.757 93.141c-31.573 22.272-64.981 39.509-97.579 51.413-39.723-35.669-89.216-55.552-139.776-59.093-59.648-4.139-121.003 14.464-169.685 56.832-44.203 38.443-70.485 89.899-78.080 143.872-1.579 11.307-2.347 22.741-2.304 34.133-82.005-6.059-157.611-36.267-219.776-84.096-33.067-25.429-62.336-55.851-86.784-90.24-13.653-19.2-40.277-23.765-59.477-10.112-6.571 4.651-11.392 10.795-14.293 17.451 0 0-5.632 12.757-12.16 32.427-4.779 14.379-10.283 33.067-15.232 55.040-6.955 30.805-12.885 68.352-13.909 109.696-1.323 52.352 5.12 111.445 27.819 170.496 29.141 75.733 83.883 148.395 176.939 205.781-66.944 30.976-138.453 44.331-207.915 41.259-23.552-1.024-43.477 17.195-44.501 40.747-0.725 16.597 8.107 31.403 21.888 39.168 209.28 116.267 444.843 114.261 625.749 11.136 172.416-98.176 290.987-285.867 290.987-539.051-0.043-7.125-0.341-14.080-0.981-20.864 42.923-47.573 71.509-103.637 85.163-161.323 5.419-22.912-8.789-45.909-31.701-51.328-12.373-2.944-24.747-0.128-34.432 6.656z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="welcome-icon10">
                    <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="welcome-icon12">
                    <path d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM288 672c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zM736 672c-88.4 0-160-71.6-160-160s71.6-160 160-160c88.4 0 160 71.6 160 160s-71.6 160-160 160z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1025.1702857142857 1024"
                    className="welcome-icon14"
                  >
                    <path d="M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-258.857-105.714-138.286 168.571c-6.857 8.571-17.143 13.143-28 13.143-4 0-8.571-0.571-12.571-2.286-14.286-5.143-24-18.857-24-34.286v-199.429l493.714-605.143-610.857 528.571-225.714-92.571c-13.143-5.143-21.714-17.143-22.857-31.429-0.571-13.714 6.286-26.857 18.286-33.714l950.857-548.571c5.714-3.429 12-5.143 18.286-5.143 7.429 0 14.857 2.286 20.571 6.286z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="welcome-container10">
              <div
                data-thq="slider"
                data-loop="true"
                data-autoplay="true"
                data-navigation="false"
                data-pagination="false"
                data-autoplay-delay="1500"
                className="welcome-slider swiper"
              >
                <div data-thq="slider-wrapper" className="swiper-wrapper">
                  <div
                    data-thq="slider-slide"
                    className="welcome-slider-slide swiper-slide"
                  >
                    <div className="welcome-container11">
                      <div className="welcome-container12"></div>
                      <div className="welcome-container13"></div>
                    </div>
                    <div className="welcome-container14">
                      <div className="welcome-container15"></div>
                      <div className="welcome-container16"></div>
                    </div>
                    <div className="welcome-container17">
                      <div className="welcome-container18"></div>
                      <div className="welcome-container19"></div>
                    </div>
                    <div className="welcome-container20">
                      <div className="welcome-container21"></div>
                      <div className="welcome-container22"></div>
                    </div>
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="welcome-slider-slide1 swiper-slide"
                  >
                    <div className="welcome-container23">
                      <div className="welcome-container24"></div>
                      <div className="welcome-container25"></div>
                    </div>
                    <div className="welcome-container26">
                      <div className="welcome-container27"></div>
                      <div className="welcome-container28"></div>
                    </div>
                    <div className="welcome-container29">
                      <div className="welcome-container30"></div>
                      <div className="welcome-container31"></div>
                    </div>
                    <div className="welcome-container32">
                      <div className="welcome-container33"></div>
                      <div className="welcome-container34"></div>
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-pagination"
                  className="welcome-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
                ></div>
                <div
                  data-thq="slider-button-prev"
                  className="welcome-slider-button-prev swiper-button-prev"
                ></div>
                <div
                  data-thq="slider-button-next"
                  className="welcome-slider-button-next swiper-button-next"
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
                className="welcome-slider1 swiper"
              >
                <div data-thq="slider-wrapper" className="swiper-wrapper">
                  <div
                    data-thq="slider-slide"
                    className="welcome-slider-slide2 swiper-slide"
                  >
                    <div className="welcome-container35">
                      <div className="welcome-container36"></div>
                      <div className="welcome-container37"></div>
                    </div>
                    <div className="welcome-container38">
                      <div className="welcome-container39"></div>
                      <div className="welcome-container40"></div>
                    </div>
                    <div className="welcome-container41">
                      <div className="welcome-container42"></div>
                      <div className="welcome-container43"></div>
                    </div>
                    <div className="welcome-container44">
                      <div className="welcome-container45"></div>
                      <div className="welcome-container46"></div>
                    </div>
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="welcome-slider-slide3 swiper-slide"
                  >
                    <div className="welcome-container47">
                      <div className="welcome-container48"></div>
                      <div className="welcome-container49"></div>
                    </div>
                    <div className="welcome-container50">
                      <div className="welcome-container51"></div>
                      <div className="welcome-container52"></div>
                    </div>
                    <div className="welcome-container53">
                      <div className="welcome-container54"></div>
                      <div className="welcome-container55"></div>
                    </div>
                    <div className="welcome-container56">
                      <div className="welcome-container57"></div>
                      <div className="welcome-container58"></div>
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-pagination"
                  className="welcome-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
                ></div>
                <div
                  data-thq="slider-button-prev"
                  className="welcome-slider-button-prev1 swiper-button-prev"
                ></div>
                <div
                  data-thq="slider-button-next"
                  className="welcome-slider-button-next1 swiper-button-next"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="welcome-container59">
          <div className="welcome-container60">
            <div className="welcome-container61">
              <svg
                viewBox="0 0 1170.2857142857142 1024"
                className="welcome-icon16"
              >
                <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM1097.143 164.571v248.571c0 16-19.429 24.571-31.429 12.571l-69.143-69.143-361.714 361.714c-7.429 7.429-18.857 7.429-26.286 0l-133.143-133.143-237.714 237.714-109.714-109.714 334.286-334.286c7.429-7.429 18.857-7.429 26.286 0l133.143 133.143 265.143-265.143-69.143-69.143c-12-12-3.429-31.429 12.571-31.429h248.571c10.286 0 18.286 8 18.286 18.286z"></path>
              </svg>
              <h1 className="welcome-text22">Trade Volume</h1>
            </div>
            <h1 className="welcome-text23">--</h1>
          </div>
          <div className="welcome-container62">
            <div className="welcome-container63">
              <svg
                viewBox="0 0 1097.142857142857 1024"
                className="welcome-icon18"
              >
                <path d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"></path>
              </svg>
              <h1 className="welcome-text24">Members</h1>
            </div>
            <h1 className="welcome-text25">--</h1>
          </div>
          <div className="welcome-container64">
            <div className="welcome-container65">
              <svg viewBox="0 0 1024 1024" className="welcome-icon20">
                <path d="M426 726l342-342-60-60-282 280-110-110-60 60zM512 42l384 172v256q0 178-110 325t-274 187q-164-40-274-187t-110-325v-256z"></path>
              </svg>
              <h1 className="welcome-text26">Verified Users</h1>
            </div>
            <h1 className="welcome-text27">--</h1>
          </div>
          <div className="welcome-container66">
            <div className="welcome-container67">
              <svg
                viewBox="0 0 1243.4285714285713 1024"
                className="welcome-icon22"
              >
                <path d="M365.714 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM329.143 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM950.857 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM914.286 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM658.286 505.714l219.429-94.286v-152l-219.429 93.714v152.571zM621.714 289.143l252-108-252-108-252 108zM1243.429 585.143v237.714c0 27.429-15.429 53.143-40.571 65.143l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-1.714-0.571-2.857-1.143-4-2.286-1.143 1.143-2.286 1.714-4 2.286l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-25.143-12-40.571-37.714-40.571-65.143v-237.714c0-29.143 17.714-55.429 44.571-67.429l248-106.286v-228.571c0-29.143 17.714-55.429 44.571-67.429l256-109.714c9.143-4 18.857-5.714 28.571-5.714s19.429 1.714 28.571 5.714l256 109.714c26.857 12 44.571 38.286 44.571 67.429v228.571l248 106.286c27.429 12 44.571 38.286 44.571 67.429z"></path>
              </svg>
              <h1 className="welcome-text28">Liquidity</h1>
            </div>
            <h1 className="welcome-text29">--</h1>
          </div>
        </div>
        <div className="welcome-container68">
          <div className="welcome-container69">
            <div className="welcome-container70">
              <Mine rootClassName="mine-root-class-name"></Mine>
              <animate-on-reveal
                animation="zoomIn"
                duration="1s"
                delay="0s"
                direction="normal"
                easing="ease"
                iteration="1"
              >
                <div
                  data-thq-animate-on-reveal="true"
                  className="welcome-container71"
                >
                  <div className="welcome-container72">
                    <img
                      alt="image"
                      src="/rar31ones (8)-200w.webp"
                      className="welcome-image1"
                    />
                    <h1 className="welcome-text30">RAR310NES</h1>
                    <h1 className="welcome-text31">
                      3100 PFPs Forever! members can use utility NFT as PFP for
                      social accounts. RAR31ONES NFT grants members access to
                      Beta release and testnet version. Ownership also acts as
                      eligibility for KYC, verified members can Stake NFT and
                      add new RareCoins into circulation.
                    </h1>
                    <button className="welcome-register2 button">
                      BUY NFT
                    </button>
                  </div>
                </div>
              </animate-on-reveal>
              <animate-on-reveal
                animation="zoomOut"
                duration="1000ms"
                delay="0s"
                direction="normal"
                easing="ease"
                iteration="1"
              >
                <div
                  data-thq-animate-on-reveal="true"
                  className="welcome-container73"
                >
                  <div className="welcome-container74">
                    <svg viewBox="0 0 1024 1024" className="welcome-icon24">
                      <path d="M544 98q12-12 30-12 22 0 30 12l212 212q12 12 12 30t-12 30l-272 270q-12 12-30 12t-30-12l-212-210q-12-12-12-30t12-30zM726 340l-152-152-210 212 150 150zM768 554l128 128v172q0 36-25 60t-61 24h-598q-34 0-59-25t-25-59v-172l128-128h36l84 86h-86l-76 86h596l-74-86h-82l84-86h30z"></path>
                    </svg>
                    <h1 className="welcome-text32">Governance</h1>
                    <h1 className="welcome-text33">
                      RareCoin is the governance protocol of RareBay. Unverified
                      members can add new coins into circulation by interacting
                      with utilities such as Swap and ordinals. Use RareCoin to
                      vote or delegate to make proposals. RARE is added into
                      circulation by stake holders, staking of RAR310NES NFTs
                      earns RareCoin rewards and only verified members eligible
                      for staking.
                    </h1>
                    <button className="welcome-register3 button">
                      BUY $RARE
                    </button>
                  </div>
                </div>
              </animate-on-reveal>
              <animate-on-reveal
                animation="zoomIn"
                duration="1500ms"
                delay="0s"
                direction="normal"
                easing="ease"
                iteration="1"
              >
                <div
                  data-thq-animate-on-reveal="true"
                  className="welcome-container75"
                >
                  <div className="welcome-container76">
                    <svg viewBox="0 0 1024 1024" className="welcome-icon26">
                      <path d="M426 726l342-342-60-60-282 280-110-110-60 60zM512 42l384 172v256q0 178-110 325t-274 187q-164-40-274-187t-110-325v-256z"></path>
                    </svg>
                    <h1 className="welcome-text34">Identity Verification</h1>
                    <h1 className="welcome-text35">
                      Members can optionally verify their identity on RareBay to
                      gain higher privileges such as staking to earn RareCoin
                      rewards on weekly basis. Verified members can also create
                      and list new tokens on RareBay.
                    </h1>
                    <button className="welcome-register4 button">
                      GET VERIFIED
                    </button>
                  </div>
                </div>
              </animate-on-reveal>
            </div>
          </div>
          <div className="welcome-container77">
            <div className="welcome-container78">
              <div className="welcome-container79">
                <div className="welcome-container80">
                  <div className="welcome-container81">
                    <div className="welcome-container82">
                      <h1 className="welcome-text36">
                        Get latest news about RareBay!
                      </h1>
                      <h1 className="welcome-text37">
                        Join our mailing list to receive latest updates to your
                        email.
                      </h1>
                      <input
                        type="email"
                        placeholder="Enter Email"
                        className="welcome-textinput input"
                      />
                      <button className="welcome-register5 button">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="welcome-footer">
          <div className="welcome-container83">
            <img
              alt="logo"
              src="/favicon-200h.webp"
              className="welcome-image2"
            />
            <span className="welcome-text38">
              <span>© 2023-2024</span>
              <br></br>
              <br></br>
              <span> All Rights Reserved.</span>
            </span>
          </div>
          <div className="welcome-links-container">
            <div className="welcome-container84">
              <div className="welcome-container85">
                <span className="welcome-text43">Ecosystem</span>
                <span className="welcome-text44">
                  <span>RareCoin</span>
                  <br></br>
                </span>
                <span className="welcome-text47">NFTs</span>
                <span className="welcome-text48">Tokens</span>
                <span>Members</span>
              </div>
              <div className="welcome-container86">
                <span className="welcome-text50">Company</span>
                <span className="welcome-text51">FAQ</span>
                <span className="welcome-text52">Docs</span>
                <span className="welcome-text53">Email</span>
              </div>
            </div>
            <div className="welcome-container87">
              <div className="welcome-container88">
                <span className="welcome-text54">Support</span>
                <span className="welcome-text55">Terms of service</span>
                <span className="welcome-text56">Privacy Policy</span>
                <span>Help center</span>
              </div>
              <div className="welcome-container89">
                <span className="welcome-text58">Social</span>
                <span className="welcome-text59">
                  <span>Twitter</span>
                  <br></br>
                </span>
                <span className="welcome-text62">Discord</span>
                <span className="welcome-text63">Telegram</span>
                <span>
                  <span>Github</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </footer>
        <div className="welcome-container90"></div>
      </div>
      <style jsx>
        {`
          .welcome-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            background-size: contain, auto;
            justify-content: flex-start;
            background-image: radial-gradient(
              circle at center,
              rgb(0, 0, 0) 3%,
              rgb(4, 5, 13) 98%
            );
            background-repeat: fixed;
            background-position: center, fixed;
          }
          .welcome-container01 {
            width: 100%;
            height: 58px;
            display: flex;
            z-index: 200;
            position: fixed;
            align-items: center;
            flex-direction: column;
            backdrop-filter: blur(20px);
            justify-content: center;
            background-color: rgba(20, 20, 20, 0.38);
          }
          .welcome-container02 {
            width: 100%;
            height: 58px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .welcome-link {
            display: contents;
          }
          .welcome-container03 {
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
          .welcome-container04 {
            flex: 0 0 auto;
            width: 136px;
            height: var(--dl-size-size-small);
            margin: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: flex-start;
          }
          .welcome-image {
            width: 54px;
            height: 59px;
            object-fit: cover;
          }
          .welcome-text {
            color: #818181;
            font-size: 24px;
            font-family: 'Arial';
            font-weight: 900;
          }
          .welcome-text01 {
            color: #ffffff;
            font-size: 24px;
            font-family: 'Arial';
            font-weight: 900;
          }
          .welcome-icon {
            width: 24px;
            height: 24px;
          }
          .welcome-icon02 {
            top: 21px;
            fill: #d9d9d9;
            left: 209px;
            width: 12px;
            height: 12px;
            position: absolute;
          }
          .welcome-navbar-interactive {
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
          .welcome-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .welcome-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .welcome-link01 {
            text-decoration: none;
          }
          .welcome-link02 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .welcome-link03 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .welcome-text02 {
            margin-left: var(--dl-space-space-twounits);
          }
          .welcome-link04 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .welcome-text05 {
            margin-left: var(--dl-space-space-twounits);
          }
          .welcome-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .welcome-link05 {
            color: #a5a5a5;
            padding: 10px;
            transition: 0.3s;
            border-width: 0px;
            text-decoration: none;
            background-color: #2f2f2f;
          }
          .welcome-link05:hover {
            color: var(--dl-color-gray-white);
            scale: 1.1;
            box-shadow: rgba(200, 200, 200, 0.5) 2px 2px 50px;
          }
          .welcome-burger-menu {
            display: none;
          }
          .welcome-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .welcome-mobile-menu {
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
          .welcome-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-end;
          }
          .welcome-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .welcome-icon06 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .welcome-links1 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome-link06 {
            text-decoration: none;
          }
          .welcome-link07 {
            text-decoration: none;
          }
          .welcome-link08 {
            text-decoration: none;
          }
          .welcome-link09 {
            text-decoration: none;
          }
          .welcome-link10 {
            text-decoration: none;
          }
          .welcome-link11 {
            text-decoration: none;
          }
          .welcome-register1 {
            color: #565656;
            padding: 10px;
            border-width: 0px;
            background-color: #2f2f2f;
          }
          .welcome-container05 {
            width: 100%;
            height: 631px;
            display: flex;
            z-index: 100;
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
          .welcome-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: 466px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .welcome-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome-container08 {
            width: 892px;
            height: 538px;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-text06 {
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
          .welcome-text07 {
            color: #646464;
          }
          .welcome-text08 {
            color: #ffffff;
          }
          .welcome-text10 {
            color: #333333;
          }
          .welcome-text12 {
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
          .welcome-text13 {
            color: #f9f9f9;
          }
          .welcome-text14 {
            color: #f9f9f9;
          }
          .welcome-text15 {
            color: #ff5711;
          }
          .welcome-text16 {
            color: #bcbcbc;
          }
          .welcome-text17 {
            color: #ffffff;
          }
          .welcome-text18 {
            color: #bcbcbc;
          }
          .welcome-text19 {
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
          .welcome-container09 {
            width: 274px;
            height: 72px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-self: flex-start;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .welcome-icon08 {
            fill: #d9d9d9;
            width: 29px;
            height: 30px;
          }
          .welcome-icon10 {
            fill: #d9d9d9;
            width: 31px;
            height: 27px;
          }
          .welcome-icon12 {
            fill: #d9d9d9;
            width: 33px;
            height: 50%;
          }
          .welcome-icon14 {
            fill: #d9d9d9;
            width: 44px;
            height: 50%;
          }
          .welcome-container10 {
            width: auto;
            height: 531px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .welcome-slider {
            width: 500px;
            height: 264px;
            display: inline-block;
          }
          .welcome-slider-slide {
            width: 501px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .welcome-container11 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container12 {
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
          .welcome-container13 {
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
          .welcome-container14 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container15 {
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
          .welcome-container16 {
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
          .welcome-container17 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container18 {
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
          .welcome-container19 {
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
          .welcome-container20 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container21 {
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
          .welcome-container22 {
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
          .welcome-slider-slide1 {
            width: 501px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .welcome-container23 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container24 {
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
          .welcome-container25 {
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
          .welcome-container26 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container27 {
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
          .welcome-container28 {
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
          .welcome-container29 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container30 {
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
          .welcome-container31 {
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
          .welcome-container32 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container33 {
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
          .welcome-container34 {
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
          .welcome-slider-pagination {
            display: none;
          }
          .welcome-slider-button-prev {
            color: #fbfbfb;
            display: none;
          }
          .welcome-slider-button-next {
            color: #ffffff;
            display: none;
          }
          .welcome-slider1 {
            width: 500px;
            height: 269px;
            display: inline-block;
          }
          .welcome-slider-slide2 {
            width: 501px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .welcome-container35 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container36 {
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
          .welcome-container37 {
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
          .welcome-container38 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container39 {
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
          .welcome-container40 {
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
          .welcome-container41 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container42 {
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
          .welcome-container43 {
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
          .welcome-container44 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container45 {
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
          .welcome-container46 {
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
          .welcome-slider-slide3 {
            width: 501px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .welcome-container47 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container48 {
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
          .welcome-container49 {
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
          .welcome-container50 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container51 {
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
          .welcome-container52 {
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
          .welcome-container53 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container54 {
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
          .welcome-container55 {
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
          .welcome-container56 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container57 {
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
          .welcome-container58 {
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
          .welcome-slider-pagination1 {
            display: none;
          }
          .welcome-slider-button-prev1 {
            color: #fbfbfb;
            display: none;
          }
          .welcome-slider-button-next1 {
            color: #ffffff;
            display: none;
          }
          .welcome-container59 {
            width: 100%;
            height: 203px;
            display: flex;
            z-index: 100;
            align-items: center;
            animation-name: fadeInUp;
            animation-delay: 0s;
            justify-content: center;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .welcome-container60 {
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
          .welcome-container61 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .welcome-icon16 {
            fill: #00aeff;
            width: 25px;
            height: 100%;
          }
          .welcome-text22 {
            color: rgb(120, 120, 120);
            font-size: 1.5em;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 400;
            margin-left: var(--dl-space-space-unit);
          }
          .welcome-text23 {
            color: #c9c9c9;
          }
          .welcome-container62 {
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
          .welcome-container63 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .welcome-icon18 {
            fill: #d9d9d9;
            width: 24px;
            height: 100%;
          }
          .welcome-text24 {
            color: rgb(120, 120, 120);
            font-size: 1.5em;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 400;
            margin-left: var(--dl-space-space-unit);
          }
          .welcome-text25 {
            color: #c9c9c9;
          }
          .welcome-container64 {
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
          .welcome-container65 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .welcome-icon20 {
            fill: #64ee5a;
            width: 24px;
            height: 100%;
          }
          .welcome-text26 {
            color: rgb(120, 120, 120);
            font-size: 1.5em;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 400;
            margin-left: var(--dl-space-space-unit);
          }
          .welcome-text27 {
            color: #c9c9c9;
          }
          .welcome-container66 {
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
          .welcome-container67 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .welcome-icon22 {
            fill: #6d6d6d;
            width: 24px;
            height: 100%;
          }
          .welcome-text28 {
            color: rgb(120, 120, 120);
            font-size: 1.5em;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 400;
            margin-left: var(--dl-space-space-unit);
          }
          .welcome-text29 {
            color: #c9c9c9;
          }
          .welcome-container68 {
            width: 100%;
            height: 1450px;
            display: flex;
            z-index: 100;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
              90deg,
              rgba(115, 0, 181, 0.07) 0%,
              rgba(0, 13, 26, 0.32) 98%
            );
          }
          .welcome-container69 {
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            border-radius: 16px;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container70 {
            flex: 0 0 auto;
            width: 1011px;
            height: auto;
            display: flex;
            align-items: center;
            border-radius: 16px;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container71 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 0px 0px 30px 0px #000000;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            border-color: rgba(152, 152, 152, 0.19);
            border-width: 1px;
            border-radius: 16px;
            backdrop-filter: blur(10px);
            justify-content: flex-start;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .welcome-container72 {
            flex: 0 0 auto;
            width: 993px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome-image1 {
            width: 77px;
            height: 79px;
            padding: var(--dl-space-space-halfunit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .welcome-text30 {
            color: rgb(189, 189, 189);
            width: 841px;
            align-self: flex-start;
            text-align: left;
            margin-left: var(--dl-space-space-unit);
            text-shadow: 0px 0px 10px black;
          }
          .welcome-text31 {
            color: #e2e2e2;
            width: auto;
            font-size: 16px;
            align-self: flex-start;
            font-style: italic;
            margin-top: var(--dl-space-space-halfunit);
            text-align: left;
            font-weight: 300;
            margin-left: var(--dl-space-space-unit);
          }
          .welcome-register2 {
            color: rgb(165, 165, 165);
            padding: 10px;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            border-width: 0px;
            text-decoration: none;
            background-color: rgb(47, 47, 47);
          }
          .welcome-register2:hover {
            color: var(--dl-color-gray-white);
            scale: 1.1;
            box-shadow: rgba(200, 200, 200, 0.5) 2px 2px 50px;
          }
          .welcome-container73 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 0px 0px 30px 0px #000000;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-color: rgba(76, 76, 76, 0.57);
            border-width: 1px;
            border-radius: 16px;
            margin-bottom: var(--dl-space-space-halfunit);
            backdrop-filter: blur(10px);
            justify-content: flex-start;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .welcome-container74 {
            flex: 0 0 auto;
            width: 993px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome-icon24 {
            fill: #9b9b9b;
            width: 80px;
            height: 83px;
          }
          .welcome-text32 {
            color: var(--dl-color-gray-900);
            width: 841px;
            align-self: flex-start;
            text-align: left;
            margin-left: var(--dl-space-space-unit);
            text-shadow: 0px 0px 10px black;
          }
          .welcome-text33 {
            color: rgb(226, 226, 226);
            width: auto;
            font-size: 16px;
            align-self: flex-start;
            font-style: italic;
            margin-top: var(--dl-space-space-halfunit);
            text-align: left;
            font-weight: 300;
            margin-left: var(--dl-space-space-unit);
          }
          .welcome-register3 {
            color: rgb(165, 165, 165);
            padding: 10px;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            border-width: 0px;
            text-decoration: none;
            background-color: rgb(47, 47, 47);
          }
          .welcome-register3:hover {
            color: var(--dl-color-gray-white);
            scale: 1.1;
            box-shadow: rgba(200, 200, 200, 0.5) 2px 2px 50px;
          }
          .welcome-container75 {
            width: auto;
            height: 263px;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.76);
            align-items: flex-start;
            border-color: rgba(78, 78, 78, 0.46);
            border-width: 1px;
            border-radius: 16px;
            backdrop-filter: blur(10px);
            justify-content: flex-start;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .welcome-container76 {
            flex: 0 0 auto;
            width: 993px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome-icon26 {
            fill: #a34f00;
            width: 60px;
            height: 60px;
          }
          .welcome-text34 {
            color: var(--dl-color-gray-900);
            width: 841px;
            align-self: flex-start;
            text-align: left;
            margin-left: var(--dl-space-space-unit);
            text-shadow: 0px 0px 10px black;
          }
          .welcome-text35 {
            color: rgb(226, 226, 226);
            width: auto;
            font-size: 16px;
            align-self: flex-start;
            font-style: italic;
            margin-top: var(--dl-space-space-halfunit);
            text-align: left;
            font-weight: 300;
            margin-left: var(--dl-space-space-unit);
          }
          .welcome-register4 {
            color: rgb(165, 165, 165);
            padding: 10px;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            border-width: 0px;
            text-decoration: none;
            background-color: rgb(47, 47, 47);
          }
          .welcome-register4:hover {
            color: var(--dl-color-gray-white);
            scale: 1.1;
            box-shadow: rgba(200, 200, 200, 0.5) 2px 2px 50px;
          }
          .welcome-container77 {
            width: 100%;
            height: 351px;
            display: flex;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            align-items: flex-start;
            backdrop-filter: blur(10px);
            justify-content: center;
          }
          .welcome-container78 {
            flex: 0 0 auto;
            width: 100%;
            height: 252px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .welcome-container79 {
            flex: 0 0 auto;
            width: 100%;
            height: 114px;
            display: flex;
            align-items: center;
            border-radius: 16px;
            flex-direction: column;
          }
          .welcome-container80 {
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            box-shadow: black 0px 0px 50px;
            align-items: flex-start;
            border-color: rgba(61, 61, 61, 0.99);
            border-width: 1px;
            border-radius: 16px;
            justify-content: center;
          }
          .welcome-container81 {
            flex: 0 0 auto;
            width: 100%;
            height: 297px;
            display: flex;
            align-items: center;
            border-radius: 16px;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container82 {
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            border-color: rgba(96, 96, 96, 0.6);
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            justify-content: center;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .welcome-text36 {
            color: #b9b9b9;
            align-self: center;
            text-shadow: 0px 0px 10px black;
          }
          .welcome-text37 {
            color: rgb(189, 189, 189);
            font-size: 1em;
            align-self: center;
            font-style: italic;
            font-weight: 300;
            padding-top: var(--dl-space-space-halfunit);
          }
          .welcome-textinput {
            color: rgba(52, 52, 52, 0.82);
            width: 270px;
            height: 43px;
            padding: var(--dl-space-space-unit);
            margin-top: var(--dl-space-space-unit);
            margin-left: var(--dl-space-space-twounits);
            border-color: rgba(230, 230, 230, 0.58);
            background-color: transparent;
          }
          .welcome-register5 {
            color: rgb(165, 165, 165);
            width: 159px;
            padding: 10px;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            border-width: 0px;
            text-decoration: none;
            background-color: rgb(47, 47, 47);
          }
          .welcome-register5:hover {
            color: var(--dl-color-gray-white);
            scale: 1.1;
            box-shadow: rgba(200, 200, 200, 0.5) 2px 2px 50px;
          }
          .welcome-footer {
            color: var(--dl-color-gray-white);
            width: 100%;
            height: 345px;
            display: flex;
            z-index: 100;
            position: static;
            max-width: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: rgba(39, 39, 39, 0.34);
            border-width: 1px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            backdrop-filter: blur(30px);
            justify-content: space-between;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .welcome-container83 {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome-image2 {
            width: 75px;
            height: 78px;
          }
          .welcome-text38 {
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .welcome-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .welcome-container84 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .welcome-container85 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .welcome-text43 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .welcome-text44 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-text47 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-text48 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-container86 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .welcome-text50 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .welcome-text51 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-text52 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-text53 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-container87 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .welcome-container88 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .welcome-text54 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .welcome-text55 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-text56 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-container89 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .welcome-text58 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .welcome-text59 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-text62 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-text63 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-container90 {
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 0;
            position: fixed;
            align-items: flex-start;
            background-size: contain;
            background-image: url('https://www.pngmart.com/files/13/Pattern-PNG-Transparent-Image.png');
            background-position: center;
          }
          @media (max-width: 1200px) {
            .welcome-container03 {
              width: 219px;
            }
            .welcome-container05 {
              height: 1039px;
            }
            .welcome-container06 {
              height: 438px;
              flex-direction: column;
            }
            .welcome-container08 {
              height: 380px;
            }
            .welcome-container10 {
              width: auto;
            }
            .welcome-container69 {
              width: 100%;
            }
            .welcome-container77 {
              width: 1039px;
            }
          }
          @media (max-width: 767px) {
            .welcome-container01 {
              width: 766px;
            }
            .welcome-container02 {
              width: 100%;
            }
            .welcome-navbar-interactive {
              width: auto;
              height: auto;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              justify-content: flex-end;
            }
            .welcome-desktop-menu {
              display: none;
            }
            .welcome-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .welcome-icon04 {
              fill: #d9d9d9;
              width: 31px;
              height: 34px;
            }
            .welcome-mobile-menu {
              background-color: #000000;
            }
            .welcome-nav {
              width: 369px;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .welcome-top {
              justify-content: flex-end;
            }
            .welcome-icon06 {
              fill: #d9d9d9;
              width: 21px;
              height: 24px;
            }
            .welcome-container05 {
              height: 846px;
            }
            .welcome-container06 {
              height: 670px;
            }
            .welcome-container07 {
              width: 100%;
            }
            .welcome-container08 {
              width: 100%;
            }
            .welcome-text06 {
              width: 100%;
              font-size: 50px;
            }
            .welcome-text12 {
              width: 100%;
              font-size: 30px;
            }
            .welcome-text19 {
              width: 100%;
              font-size: 20px;
            }
            .welcome-container10 {
              width: auto;
              height: 297px;
              margin: var(--dl-space-space-unit);
            }
            .welcome-slider1 {
              display: none;
            }
            .welcome-container59 {
              height: 764px;
              align-items: center;
              flex-direction: column;
            }
            .welcome-container68 {
              height: 1694px;
            }
            .welcome-container69 {
              height: 1508px;
            }
            .welcome-container70 {
              height: 431px;
              align-items: center;
              justify-content: center;
            }
            .welcome-container71 {
              width: 579px;
            }
            .welcome-container72 {
              width: 407px;
            }
            .welcome-text31 {
              width: 100%;
            }
            .welcome-container73 {
              width: 591px;
            }
            .welcome-container74 {
              width: 484px;
            }
            .welcome-text33 {
              width: 387px;
            }
            .welcome-container75 {
              width: 584px;
              height: 343px;
            }
            .welcome-container76 {
              width: 469px;
            }
            .welcome-text34 {
              width: auto;
            }
            .welcome-text35 {
              width: 473px;
              height: 103px;
            }
            .welcome-container77 {
              width: 100%;
              height: 262px;
            }
            .welcome-container78 {
              width: 597px;
              height: 284px;
            }
            .welcome-container82 {
              width: 100%;
            }
            .welcome-text36 {
              width: 348px;
              height: 76px;
              text-align: center;
            }
            .welcome-text37 {
              width: 435px;
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .welcome-footer {
              height: 443px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .welcome-image2 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .welcome-links-container {
              width: auto;
              margin-top: var(--dl-space-space-twounits);
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .welcome-container84 {
              width: 100%;
              justify-content: space-between;
            }
            .welcome-container86 {
              margin-right: 0px;
            }
            .welcome-container87 {
              margin-top: var(--dl-space-space-twounits);
            }
            .welcome-container88 {
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .welcome-container01 {
              width: 100%;
            }
            .welcome-container02 {
              width: 100%;
            }
            .welcome-container03 {
              width: 50%;
              height: auto;
              justify-content: space-between;
            }
            .welcome-container04 {
              width: 49px;
            }
            .welcome-icon02 {
              top: 56px;
              right: 19px;
            }
            .welcome-navbar-interactive {
              padding: var(--dl-space-space-unit);
              justify-content: flex-end;
            }
            .welcome-icon04 {
              fill: #d9d9d9;
              width: 31px;
              height: 26px;
            }
            .welcome-mobile-menu {
              top: 0px;
              left: 0px;
              padding: 16px;
              background-color: #000000;
            }
            .welcome-nav {
              width: auto;
              padding: var(--dl-space-space-twounits);
              align-self: flex-start;
            }
            .welcome-top {
              align-self: flex-start;
              justify-content: flex-start;
            }
            .welcome-close-menu {
              justify-content: flex-end;
            }
            .welcome-icon06 {
              fill: #d9d9d9;
              width: 22px;
              height: 20px;
            }
            .welcome-links1 {
              width: auto;
              margin-bottom: var(--dl-space-space-unit);
            }
            .welcome-link07 {
              text-decoration: none;
            }
            .welcome-link08 {
              text-decoration: none;
            }
            .welcome-link09 {
              text-decoration: none;
            }
            .welcome-link10 {
              text-decoration: none;
            }
            .welcome-link11 {
              text-decoration: none;
            }
            .welcome-register1 {
              width: 100%;
            }
            .welcome-container05 {
              height: 707px;
            }
            .welcome-container06 {
              height: 445px;
            }
            .welcome-container07 {
              width: 100%;
              height: 292px;
            }
            .welcome-container08 {
              width: 100%;
              height: 277px;
              padding: var(--dl-space-space-halfunit);
            }
            .welcome-text06 {
              width: 100%;
              font-size: 40px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .welcome-text12 {
              width: 100%;
              height: 84px;
              font-size: 24px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .welcome-text19 {
              width: 100%;
              height: 367px;
              font-size: 20px;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .welcome-container09 {
              height: 326px;
            }
            .welcome-container10 {
              width: 100%;
              height: 253px;
            }
            .welcome-slider {
              width: 100%;
              height: 282px;
            }
            .welcome-slider-slide {
              width: 100%;
              height: 212px;
              align-items: center;
            }
            .welcome-container11 {
              width: 95px;
            }
            .welcome-container14 {
              width: 90px;
            }
            .welcome-container17 {
              width: 75px;
            }
            .welcome-container20 {
              width: 105px;
            }
            .welcome-slider-slide1 {
              width: 100%;
              height: 255px;
              align-items: center;
            }
            .welcome-container23 {
              width: 91px;
            }
            .welcome-container26 {
              width: 87px;
            }
            .welcome-container29 {
              width: 85px;
            }
            .welcome-container32 {
              width: 97px;
            }
            .welcome-slider1 {
              width: 100%;
              height: 878px;
            }
            .welcome-slider-slide2 {
              width: 100%;
              height: 205px;
              align-items: center;
            }
            .welcome-container35 {
              width: 97px;
            }
            .welcome-container38 {
              width: 96px;
            }
            .welcome-container41 {
              width: 98px;
            }
            .welcome-container44 {
              width: 89px;
            }
            .welcome-slider-slide3 {
              width: 100%;
              height: 241px;
              align-items: center;
            }
            .welcome-container47 {
              width: 85px;
            }
            .welcome-container50 {
              width: 91px;
            }
            .welcome-container53 {
              width: 85px;
            }
            .welcome-container56 {
              width: 84px;
            }
            .welcome-container59 {
              height: 485px;
              align-self: flex-start;
              align-items: flex-start;
              padding-left: var(--dl-space-space-twounits);
            }
            .welcome-container60 {
              width: 100%;
              align-items: flex-start;
            }
            .welcome-container62 {
              width: 100%;
              align-items: flex-start;
            }
            .welcome-container64 {
              width: 100%;
              align-items: flex-start;
              margin-left: 0px;
              margin-right: 0px;
            }
            .welcome-container66 {
              width: 100%;
              align-items: flex-start;
              margin-left: 0px;
              margin-right: 0px;
            }
            .welcome-container68 {
              height: 2139px;
              padding: var(--dl-space-space-unit);
              margin-bottom: 0px;
            }
            .welcome-container69 {
              height: 100%;
            }
            .welcome-container70 {
              width: 100%;
              height: 1523px;
              padding-left: 0px;
              margin-bottom: 0px;
            }
            .welcome-container71 {
              width: 100%;
              height: 394px;
            }
            .welcome-container72 {
              width: 100%;
              height: 197px;
            }
            .welcome-image1 {
              width: 62px;
              height: 62px;
            }
            .welcome-text30 {
              width: auto;
              font-size: 1.3em;
            }
            .welcome-text31 {
              width: auto;
            }
            .welcome-container73 {
              width: 100%;
              height: 426px;
            }
            .welcome-container74 {
              width: 100%;
              height: 283px;
            }
            .welcome-text32 {
              width: auto;
              font-size: 1.3em;
            }
            .welcome-text33 {
              width: auto;
            }
            .welcome-container75 {
              width: 100%;
              height: 392px;
              align-items: center;
              justify-content: center;
            }
            .welcome-container76 {
              width: 100%;
              height: 284px;
            }
            .welcome-icon26 {
              width: 94px;
              height: 94px;
            }
            .welcome-text34 {
              width: auto;
              font-size: 1.3em;
            }
            .welcome-text35 {
              width: auto;
              height: 228px;
            }
            .welcome-container77 {
              height: auto;
              align-items: center;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: U0nit;
            }
            .welcome-container78 {
              width: 100%;
              height: 257px;
            }
            .welcome-container82 {
              height: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .welcome-text36 {
              width: auto;
              height: 31px;
              font-size: 1em;
              text-align: center;
            }
            .welcome-text37 {
              width: 244px;
              text-align: center;
            }
            .welcome-textinput {
              width: auto;
              margin-left: 0px;
            }
            .welcome-footer {
              height: 100%;
              padding: var(--dl-space-space-unit);
            }
            .welcome-image2 {
              margin-bottom: 0px;
            }
            .welcome-links-container {
              align-items: flex-start;
              flex-direction: column;
              justify-content: space-between;
            }
            .welcome-container84 {
              align-items: center;
              margin-right: 0px;
              justify-content: space-between;
            }
            .welcome-container85 {
              margin-right: var(--dl-space-space-unit);
            }
            .welcome-container86 {
              align-self: stretch;
            }
          }
        `}
      </style>
    </>
  )
}

export default Welcome
