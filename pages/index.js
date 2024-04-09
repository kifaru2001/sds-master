import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Sliders from '../components/sliders'
import Intro from '../components/intro1'
import { TypeAnimation } from 'react-type-animation';


const Welcome = (props) => {
  return (
    <>
    <Intro rootClassName="intro-root-class-name1"></Intro>
      <div className="welcome-container">
        <Head>
          <title>
            Welcome - Fast! secure! Rare! & Decentralized.
          </title>
          <meta
            name="description"
            content="Verify, Mine, Stake, Trade, Swap, Track, Inscribe, Farm, Earn, Borrow, Lend, play! faster than ever, seamlessly anywhere anytime. "
          />
          <meta
            property="og:title"
            content="Welcome - Fast! secure! Rare! Decentralized Exchange"
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
                    <span className="welcome-text">
                    <TypeAnimation
      sequence={[
        'Rare',
        1000, 
      ]}
      wrapper="span"
      speed={50}
    />
                    </span>
                    <span className="welcome-text001">Bay</span>
                    <svg viewBox="0 0 1127.424 1024" className="welcome-icon">
                      <path d="M489.714 310.857v66.857c0 9.714-8.571 17.714-18.286 17.714h-170.286v464c0 10.286-8 18.286-17.714 18.286h-77.143c-10.286 0-18.286-8-18.286-18.286v-464h-169.714c-10.286 0-18.286-8-18.286-17.714v-66.857c0-10.286 8-18.286 18.286-18.286h453.143c9.714 0 18.286 8 18.286 18.286zM1082.857 309.143l44 549.143c0.571 5.143-1.143 9.714-4.571 13.714-3.429 3.429-8 5.714-13.143 5.714h-76.571c-9.143 0-17.143-7.429-17.714-16.571l-26.286-336-108 242.857c-2.857 6.857-9.143 10.857-16.571 10.857h-68.571c-6.857 0-13.143-4-16.571-10.857l-107.429-244-25.714 337.143c-0.571 9.143-8.571 16.571-17.714 16.571h-77.143c-5.143 0-9.714-2.286-13.143-5.714-3.429-4-5.143-8.571-5.143-13.714l44.571-549.143c0.571-9.143 8.571-16.571 17.714-16.571h81.143c7.429 0 13.714 4.571 16.571 10.857l125.714 297.143c4 9.143 8 19.429 11.429 29.143 4-9.714 7.429-20 11.429-29.143l126.286-297.143c2.857-6.286 9.143-10.857 16.571-10.857h80.571c9.714 0 17.714 7.429 18.286 16.571z"></path>
                    </svg>
                  </div>
                </div>
              </a>
            </Link>
            <header
              data-thq="thq-navbar"
              className="welcome-navbar-interactive"
            >
              <div data-thq="thq-navbar-nav" className="welcome-desktop-menu">
                <nav className="welcome-links">
                  <Link legacyBehavior href="/documentation"><a  className="welcome-text002">Docs</a></Link>
                  <Link legacyBehavior href="/verify"  className="welcome-text002">Verify</Link>
                  <Link legacyBehavior href="/mining">
                    <a className="welcome-link01">
                      <span>Mining</span>
                      <br></br>
                    </a>
                  </Link>
                  <span className="welcome-text005">FAQ</span>
                </nav>
                <div className="welcome-buttons">
                  <Link legacyBehavior href="/app">
                    <a className="welcome-link02 button">Launch App</a>
                  </Link>
                </div>
              </div>
              <div data-thq="thq-burger-menu" className="welcome-burger-menu">
                <svg viewBox="0 0 1024 1024" className="welcome-icon02">
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
                      <svg viewBox="0 0 1024 1024" className="welcome-icon04">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <nav className="welcome-links1">
                    <Link legacyBehavior href="/documentation">
                      <a className="welcome-link03">Docs</a>
                    </Link>
                    <Link legacyBehavior href="/verify">
                      <a className="welcome-link04">Verify</a>
                    </Link>
                    <Link legacyBehavior href="/mining">
                      <a className="welcome-link05">Mining</a>
                    </Link>
                  </nav>
                  <Link href="/app">
                  <button className="welcome-register1 button">
                    Launch App
                  </button>
                  </Link>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div className="welcome-container05"></div>
        <div className="welcome-container06">
          <div className="welcome-container07">
            <div className="welcome-container08">
              <div className="welcome-container09">
                <h1 className="welcome-text006">
                  <span className="welcome-text007">Rar3</span>
                  <span className="welcome-text008">Bay </span>
                  <br></br>
                </h1>
                <div style={{ fontSize: '30px', display: 'inline-block', fontFamily: "Pixel Nes", marginBottom: "2%", color: "white", textShadow: "0px 0px 10px rgba(100, 100, 100, 0.5)" }}>
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Welcome to Rareville',
        1000,
        'Welcome to Rareville. Fast!',
        1000,
        'Welcome to Rareville. Secure!',
        1000,
        'Welcome to Rareville. Rare!',
        1000
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    />
                </div>
               
                <h1 className="welcome-text019">
                  <span>
                  You Just made it into the Rarest, fastest and most secure DEX yet.
                  Mine RareCoin by Interaction with POI(ProofOfInteraction). Stake, Trade and Track Rare Bitcoin Sats.
                  </span>
                  <br></br>
                </h1>
                <div className="welcome-container10">
                  <svg viewBox="0 0 1024 1024" className="welcome-icon06">
                    <path d="M888.875 224.512c-7.936 10.325-16.683 20.267-26.283 29.696-9.941 9.899-14.805 24.192-11.861 38.741 1.579 7.765 2.56 17.237 2.603 27.051 0 224.256-103.637 382.763-247.893 464.981-112.939 64.384-253.355 83.413-393.472 47.787 53.12-15.403 104.96-39.296 153.301-72.107 6.272-4.224 11.648-10.368 15.019-17.963 9.557-21.547-0.128-46.763-21.675-56.32-118.357-52.608-176.213-125.056-203.477-195.968-17.792-46.251-23.296-93.781-22.187-137.685 0.896-34.603 5.888-66.56 11.861-93.099 16.853 14.592 34.304 30.080 52.736 44.245 87.509 67.285 197.291 105.813 315.563 102.741 23.083-0.64 41.557-19.499 41.557-42.667v-43.136c-0.085-7.637 0.384-15.232 1.451-22.784 4.821-34.389 21.504-66.944 49.579-91.349 30.933-26.923 69.803-38.741 107.776-36.096s74.795 19.755 101.717 50.688c10.752 12.203 27.691 17.749 44.075 12.971 9.856-2.859 19.755-6.101 29.653-9.728zM956.757 93.141c-31.573 22.272-64.981 39.509-97.579 51.413-39.723-35.669-89.216-55.552-139.776-59.093-59.648-4.139-121.003 14.464-169.685 56.832-44.203 38.443-70.485 89.899-78.080 143.872-1.579 11.307-2.347 22.741-2.304 34.133-82.005-6.059-157.611-36.267-219.776-84.096-33.067-25.429-62.336-55.851-86.784-90.24-13.653-19.2-40.277-23.765-59.477-10.112-6.571 4.651-11.392 10.795-14.293 17.451 0 0-5.632 12.757-12.16 32.427-4.779 14.379-10.283 33.067-15.232 55.040-6.955 30.805-12.885 68.352-13.909 109.696-1.323 52.352 5.12 111.445 27.819 170.496 29.141 75.733 83.883 148.395 176.939 205.781-66.944 30.976-138.453 44.331-207.915 41.259-23.552-1.024-43.477 17.195-44.501 40.747-0.725 16.597 8.107 31.403 21.888 39.168 209.28 116.267 444.843 114.261 625.749 11.136 172.416-98.176 290.987-285.867 290.987-539.051-0.043-7.125-0.341-14.080-0.981-20.864 42.923-47.573 71.509-103.637 85.163-161.323 5.419-22.912-8.789-45.909-31.701-51.328-12.373-2.944-24.747-0.128-34.432 6.656z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="welcome-icon08">
                    <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="welcome-icon10">
                    <path d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM288 672c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zM736 672c-88.4 0-160-71.6-160-160s71.6-160 160-160c88.4 0 160 71.6 160 160s-71.6 160-160 160z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1025.1702857142857 1024"
                    className="welcome-icon12"
                  >
                    <path d="M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-258.857-105.714-138.286 168.571c-6.857 8.571-17.143 13.143-28 13.143-4 0-8.571-0.571-12.571-2.286-14.286-5.143-24-18.857-24-34.286v-199.429l493.714-605.143-610.857 528.571-225.714-92.571c-13.143-5.143-21.714-17.143-22.857-31.429-0.571-13.714 6.286-26.857 18.286-33.714l950.857-548.571c5.714-3.429 12-5.143 18.286-5.143 7.429 0 14.857 2.286 20.571 6.286z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="welcome-container11">
              <div className="welcome-container12">
                <div id="native" className="welcome-container13">
                  <div className="welcome-container14">
                    <div className="welcome-container15">
                      <div className="welcome-container16">
                        <img
                          alt="image"
                          src="/core-200w.webp"
                          className="welcome-image1"
                        />
                        <span className="welcome-text022">CORE</span>
                      </div>
                    </div>
                  </div>
                  <div className="welcome-container17">
                    <div className="welcome-container18">
                      <span className="welcome-text023">
                        <span>2045.00 CORE</span>
                        <br></br>
                      </span>
                      <input
                        type="text"
                        disabled="true"
                        placeholder="140"
                        className="welcome-textinput input"
                      />
                      <span className="welcome-text026">$4090.00</span>
                    </div>
                  </div>
                </div>
                <div className="welcome-container19">
                  <animate-on-reveal
                    animation="rotateIn"
                    duration="5000ms"
                    delay="0ms"
                    iteration="500"
                  >
                    <div
                      id="reload"
                      data-thq-animate-on-reveal="true"
                      className="welcome-container20"
                    >
                      <svg viewBox="0 0 1024 1024" className="welcome-icon14">
                        <path d="M889.68 166.32c-93.608-102.216-228.154-166.32-377.68-166.32-282.77 0-512 229.23-512 512h96c0-229.75 186.25-416 416-416 123.020 0 233.542 53.418 309.696 138.306l-149.696 149.694h352v-352l-134.32 134.32z"></path>
                        <path d="M928 512c0 229.75-186.25 416-416 416-123.020 0-233.542-53.418-309.694-138.306l149.694-149.694h-352v352l134.32-134.32c93.608 102.216 228.154 166.32 377.68 166.32 282.77 0 512-229.23 512-512h-96z"></path>
                      </svg>
                    </div>
                  </animate-on-reveal>
                </div>
                <div id="native" className="welcome-container21">
                  <div className="welcome-container22">
                    <div className="welcome-container23">
                      <div className="welcome-container24">
                        <span className="welcome-text027">SELECT</span>
                      </div>
                    </div>
                  </div>
                  <div className="welcome-container25">
                    <div className="welcome-container26">
                      <span className="welcome-text028">
                        <span>20 RARE</span>
                        <br></br>
                      </span>
                      <input
                        type="text"
                        disabled="true"
                        placeholder="123.00"
                        className="welcome-input input"
                      />
                      <span className="welcome-text031">100.00$</span>
                    </div>
                  </div>
                </div>
                <div id="swap" className="welcome-container27">
                  <div className="welcome-container28">
                    <span className="welcome-text032"></span>
                    <Link href="/swap">
                    <div className="welcome-container29">                   
                      <span className="welcome-text033">SWAP</span>
                      <svg viewBox="0 0 1024 1024" className="welcome-icon17">
                        <path d="M889.68 166.32c-93.608-102.216-228.154-166.32-377.68-166.32-282.77 0-512 229.23-512 512h96c0-229.75 186.25-416 416-416 123.020 0 233.542 53.418 309.696 138.306l-149.696 149.694h352v-352l-134.32 134.32z"></path>
                        <path d="M928 512c0 229.75-186.25 416-416 416-123.020 0-233.542-53.418-309.694-138.306l149.694-149.694h-352v352l134.32-134.32c93.608 102.216 228.154 166.32 377.68 166.32 282.77 0 512-229.23 512-512h-96z"></path>
                      </svg>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="welcome-container30">
          <div className="welcome-container31">
            <div className="welcome-container32">
              <div className="welcome-container33">
                <div className="welcome-container34">
                  <div className="welcome-container35">
                    <svg
                      viewBox="0 0 1170.2857142857142 1024"
                      className="welcome-icon20"
                    >
                      <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM1097.143 164.571v248.571c0 16-19.429 24.571-31.429 12.571l-69.143-69.143-361.714 361.714c-7.429 7.429-18.857 7.429-26.286 0l-133.143-133.143-237.714 237.714-109.714-109.714 334.286-334.286c7.429-7.429 18.857-7.429 26.286 0l133.143 133.143 265.143-265.143-69.143-69.143c-12-12-3.429-31.429 12.571-31.429h248.571c10.286 0 18.286 8 18.286 18.286z"></path>
                    </svg>
                    <h1 className="welcome-text034">Trade Volume</h1>
                  </div>
                  <h1 className="welcome-text035">--</h1>
                </div>
                <div className="welcome-container36">
                  <div className="welcome-container37">
                    <div className="welcome-container38">
                      <svg viewBox="0 0 1024 1024" className="welcome-icon22">
                        <path d="M426 726l342-342-60-60-282 280-110-110-60 60zM512 42l384 172v256q0 178-110 325t-274 187q-164-40-274-187t-110-325v-256z"></path>
                      </svg>
                      <h1 className="welcome-text036">Verified Users</h1>
                    </div>
                    <h1 className="welcome-text037">--</h1>
                  </div>
                </div>
                <div className="welcome-container39">
                  <div className="welcome-container40">
                    <svg
                      viewBox="0 0 1243.4285714285713 1024"
                      className="welcome-icon24"
                    >
                      <path d="M365.714 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM329.143 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM950.857 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM914.286 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM658.286 505.714l219.429-94.286v-152l-219.429 93.714v152.571zM621.714 289.143l252-108-252-108-252 108zM1243.429 585.143v237.714c0 27.429-15.429 53.143-40.571 65.143l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-1.714-0.571-2.857-1.143-4-2.286-1.143 1.143-2.286 1.714-4 2.286l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-25.143-12-40.571-37.714-40.571-65.143v-237.714c0-29.143 17.714-55.429 44.571-67.429l248-106.286v-228.571c0-29.143 17.714-55.429 44.571-67.429l256-109.714c9.143-4 18.857-5.714 28.571-5.714s19.429 1.714 28.571 5.714l256 109.714c26.857 12 44.571 38.286 44.571 67.429v228.571l248 106.286c27.429 12 44.571 38.286 44.571 67.429z"></path>
                    </svg>
                    <h1 className="welcome-text038">Liquidity</h1>
                  </div>
                  <h1 className="welcome-text039">--</h1>
                </div>
              </div>
              <div className="welcome-container41">
                <div className="welcome-container42">
                  <div className="welcome-container43">
                    <div className="welcome-container44">
                      <div className="welcome-container45">
                        <Link legacyBehavior href="/mining">
                          <a className="welcome-link09">
                            <div className="welcome-container46">
                              <div className="welcome-container47">
                                <div className="welcome-container48">
                                  <svg
                                    viewBox="0 0 1024 1024"
                                    className="welcome-icon26"
                                  >
                                    <path d="M1009.996 828.976l-301.544-301.544c-18.668-18.668-49.214-18.668-67.882 0l-22.626 22.626-184-184 302.056-302.058h-320l-142.058 142.058-14.060-14.058h-67.882v67.882l14.058 14.058-206.058 206.060 160 160 206.058-206.058 184 184-22.626 22.626c-18.668 18.668-18.668 49.214 0 67.882l301.544 301.544c18.668 18.668 49.214 18.668 67.882 0l113.136-113.136c18.67-18.666 18.67-49.214 0.002-67.882z"></path>
                                  </svg>
                                  <h1 className="welcome-text040">
                                    Mine By Interaction(MBI)
                                  </h1>
                                  <svg
                                    viewBox="0 0 1024 1024"
                                    className="welcome-icon28"
                                  >
                                    <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                  </svg>
                                </div>
                              </div>
                              <span className="welcome-text041">
                                Participate in testnet and earn rewards in form
                                of NFT and RareCoin. No need of computational
                                power, just interact with DAPP and earn.
                              </span>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="welcome-container49">
                  <div className="welcome-container50">
                    <div className="welcome-container51">
                      <div className="welcome-container52">
                        <Link legacyBehavior href="/mining">
                          <a className="welcome-link10">
                            <div className="welcome-container53">
                              <div className="welcome-container54">
                                <div className="welcome-container55">
                                  <svg
                                    viewBox="0 0 1243.4285714285713 1024"
                                    className="welcome-icon30"
                                  >
                                    <path d="M365.714 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM329.143 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM950.857 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM914.286 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM658.286 505.714l219.429-94.286v-152l-219.429 93.714v152.571zM621.714 289.143l252-108-252-108-252 108zM1243.429 585.143v237.714c0 27.429-15.429 53.143-40.571 65.143l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-1.714-0.571-2.857-1.143-4-2.286-1.143 1.143-2.286 1.714-4 2.286l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-25.143-12-40.571-37.714-40.571-65.143v-237.714c0-29.143 17.714-55.429 44.571-67.429l248-106.286v-228.571c0-29.143 17.714-55.429 44.571-67.429l256-109.714c9.143-4 18.857-5.714 28.571-5.714s19.429 1.714 28.571 5.714l256 109.714c26.857 12 44.571 38.286 44.571 67.429v228.571l248 106.286c27.429 12 44.571 38.286 44.571 67.429z"></path>
                                  </svg>
                                  <h1 className="welcome-text042">
                                    RareCoin Protocol
                                  </h1>
                                  <svg
                                    viewBox="0 0 1024 1024"
                                    className="welcome-icon32"
                                  >
                                    <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                  </svg>
                                </div>
                              </div>
                              <span className="welcome-text043">
                                Governance protocol for the ecosystem, RareCoin
                                is added into circulation by RAR310NES owners
                                and Testnet participators.
                              </span>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="welcome-container56">
                <animate-on-reveal
                  animation="bounceIn"
                  duration="5s"
                  delay="0s"
                  direction="normal"
                  easing="ease"
                  iteration="1"
                >
                  <h1
                    data-thq-animate-on-reveal="true"
                    className="welcome-text044"
                  >
                    <span>#1 First Ever! Rare</span>
                    <br></br>
                    <span>Ordinal Tracker</span>
                    <br></br>
                  </h1>
                  
                </animate-on-reveal>
                
              </div>
              <div className="welcome-container69">
                    <span className="welcome-text070">Coming Soon</span>
                    <animate-on-reveal
                      animation="shakeX"
                      duration="1000ms"
                      delay="1s"
                      direction="normal"
                      easing="ease"
                      iteration="100"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        data-thq-animate-on-reveal="true"
                        className="welcome-icon38"
                      >
                        <path d="M725.333 341.333c0 171.136 40.405 278.187 78.976 341.333h-584.619c38.571-63.147 78.976-170.197 78.976-341.333 0-58.923 23.851-112.213 62.464-150.869s91.947-62.464 150.869-62.464 112.213 23.851 150.869 62.464 62.464 91.947 62.464 150.869zM810.667 341.333c0-82.475-33.493-157.184-87.467-211.2s-128.725-87.467-211.2-87.467-157.184 33.493-211.2 87.467-87.467 128.725-87.467 211.2c0 261.419-102.101 343.339-109.355 348.757-19.328 13.141-24.448 39.424-11.477 58.923 8.192 12.245 21.589 18.901 35.499 18.987h768c23.552 0 42.667-19.115 42.667-42.667 0-14.464-7.168-27.221-18.304-35.029-7.509-5.547-109.696-87.467-109.696-348.971zM548.907 874.581c-5.931 10.197-15.317 17.024-25.941 19.84s-22.187 1.579-32.384-4.309c-6.912-4.011-12.075-9.472-15.317-15.232-11.691-20.48-37.717-27.605-58.197-15.915s-27.605 37.717-15.915 58.197c10.667 18.731 26.581 35.115 46.635 46.763 30.549 17.749 65.493 21.376 97.109 12.971s60.117-28.928 77.824-59.477c11.819-20.395 4.864-46.507-15.488-58.325s-46.507-4.864-58.325 15.488z"></path>
                      </svg>
                    </animate-on-reveal>
                  </div>
              <h1 className="welcome-text049">Ecosystem</h1>
              <div className="welcome-container57">
                <div className="welcome-container58">
                  <div className="welcome-container59">
                    <svg viewBox="0 0 1024 1024" className="welcome-icon34">
                      <path d="M544 98q12-12 30-12 22 0 30 12l212 212q12 12 12 30t-12 30l-272 270q-12 12-30 12t-30-12l-212-210q-12-12-12-30t12-30zM726 340l-152-152-210 212 150 150zM768 554l128 128v172q0 36-25 60t-61 24h-598q-34 0-59-25t-25-59v-172l128-128h36l84 86h-86l-76 86h596l-74-86h-82l84-86h30z"></path>
                    </svg>
                    <h1 className="welcome-text050">Governance</h1>
                    <h1 className="welcome-text051">
                      Vote or make proposals by delegating RareCoin on RareBay
                      governance. Governance is used to run the ecosystem in a
                      democratic and decentralized manner
                    </h1>
                    <button
                      id="dao"
                      type="button"
                      disabled="true"
                      className="welcome-register2 button"
                    >
                      <span>
                        <span className="welcome-text053">Coming Soon</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                  <div className="welcome-container60"></div>
                </div>
                <div className="welcome-container61">
                  <div className="welcome-container62">
                    <svg viewBox="0 0 1024 1024" className="welcome-icon36">
                      <path d="M426 726l342-342-60-60-282 280-110-110-60 60zM512 42l384 172v256q0 178-110 325t-274 187q-164-40-274-187t-110-325v-256z"></path>
                    </svg>
                    <h1 className="welcome-text055">Identity Verification</h1>
                    <h1 className="welcome-text056">
                      Members can optionally verify their identity on RareBay to
                      gain higher privileges such as staking to earn RareCoin
                      rewards on weekly basis. Verified members can also create
                      and list new tokens on RareBay.
                    </h1>
                        <Link className="welcome-text058" legacyBehavior href="/verify">
                    <button
                      id="kyc"
                      disabled="true"
                      className="welcome-register3 button"
                    >
                      <span>
                        Verify
                        <br></br>
                      </span>
                    </button>
                        </Link>
                  </div>
                  <div className="welcome-container63"></div>
                </div>
              </div>
              <div className="welcome-container64">
                <div className="welcome-container65">
                  <img
                    alt="image"
                    src="/rar31ones (9)-200w.webp"
                    className="welcome-image2"
                  />
                  <h1 className="welcome-text060">RAR310NES</h1>
                  <h1 className="welcome-text061">
                    3100 PFPs Forever! members can use utility NFT as PFP for
                    social accounts. RAR31ONES NFT grants members access to Beta
                    release and testnet version. Ownership also acts as
                    eligibility for KYC, verified members can Stake NFT and add
                    new RareCoins into circulation.
                  </h1>
                  <button className="welcome-register4 button">
                    Collection
                  </button>
                </div>
                <div className="welcome-container66"></div>
              </div>
              <div className="welcome-container67">
                <div className="welcome-container68">
                  <animate-on-reveal
                    animation="fadeInUp"
                    duration="1000ms"
                    delay="0s"
                    direction="normal"
                    easing="ease"
                    iteration="1"
                  >
                    <h1
                      data-thq-animate-on-reveal="true"
                      className="welcome-text062"
                    >
                      <span className="welcome-text063">Introducing</span>
                      <br className="welcome-text064"></br>
                      <span className="welcome-text065">NFT LIQUIDITY!</span>
                      <br></br>
                    </h1>
                  </animate-on-reveal>
                  <h1 className="welcome-text067">
                    <span>Trade regardless of floor price.</span>
                    <br></br>
                  </h1>
                  <div className="welcome-container69">
                    <span className="welcome-text070">Coming Soon</span>
                    <animate-on-reveal
                      animation="shakeX"
                      duration="1000ms"
                      delay="1s"
                      direction="normal"
                      easing="ease"
                      iteration="100"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        data-thq-animate-on-reveal="true"
                        className="welcome-icon38"
                      >
                        <path d="M725.333 341.333c0 171.136 40.405 278.187 78.976 341.333h-584.619c38.571-63.147 78.976-170.197 78.976-341.333 0-58.923 23.851-112.213 62.464-150.869s91.947-62.464 150.869-62.464 112.213 23.851 150.869 62.464 62.464 91.947 62.464 150.869zM810.667 341.333c0-82.475-33.493-157.184-87.467-211.2s-128.725-87.467-211.2-87.467-157.184 33.493-211.2 87.467-87.467 128.725-87.467 211.2c0 261.419-102.101 343.339-109.355 348.757-19.328 13.141-24.448 39.424-11.477 58.923 8.192 12.245 21.589 18.901 35.499 18.987h768c23.552 0 42.667-19.115 42.667-42.667 0-14.464-7.168-27.221-18.304-35.029-7.509-5.547-109.696-87.467-109.696-348.971zM548.907 874.581c-5.931 10.197-15.317 17.024-25.941 19.84s-22.187 1.579-32.384-4.309c-6.912-4.011-12.075-9.472-15.317-15.232-11.691-20.48-37.717-27.605-58.197-15.915s-27.605 37.717-15.915 58.197c10.667 18.731 26.581 35.115 46.635 46.763 30.549 17.749 65.493 21.376 97.109 12.971s60.117-28.928 77.824-59.477c11.819-20.395 4.864-46.507-15.488-58.325s-46.507-4.864-58.325 15.488z"></path>
                      </svg>
                    </animate-on-reveal>
                  </div>
                </div>
                <Sliders rootClassName="sliders-root-class-name"></Sliders>
              </div>
              <div className="welcome-container70">
                <div className="welcome-container71">
                  <div className="welcome-container72">
                    <div className="welcome-container73">
                      <div className="welcome-container74">
                        <div className="welcome-container75">
                          <div className="welcome-container76">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="welcome-icon40"
                            >
                              <path d="M128 337.963l359.552 251.691c14.507 10.027 33.92 10.496 48.939 0l359.509-251.691v430.037c0 11.605-4.693 22.229-12.587 30.080s-18.475 12.587-30.080 12.587h-682.667c-11.605 0-22.229-4.693-30.080-12.587s-12.587-18.475-12.587-30.080zM42.667 256.512v511.488c0 35.328 14.507 67.371 37.547 90.453s55.125 37.547 90.453 37.547h682.667c35.328 0 67.371-14.507 90.453-37.547s37.547-55.125 37.547-90.453v-511.488c0-0.427 0-0.853 0-1.28-0.213-35.029-14.635-66.773-37.547-89.685-23.083-23.040-55.125-37.547-90.453-37.547h-682.667c-35.328 0-67.371 14.507-90.453 37.547-22.912 22.912-37.333 54.656-37.547 89.728 0 0.213 0 0.469 0 0.725zM891.477 236.971l-379.477 265.6-379.477-265.6c2.048-4.096 4.779-7.808 8.021-11.051 7.893-7.893 18.517-12.587 30.123-12.587h682.667c11.605 0 22.229 4.693 30.080 12.587 3.243 3.243 5.973 6.997 8.021 11.051z"></path>
                            </svg>
                            <h1 className="welcome-text071">
                              Stay up-to-date 
                            </h1>
                          </div>
                          <h1 className="welcome-text072">
                            Join our mailing list to receive latest updates to
                            your email.
                          </h1>
                          <div className="welcome-container77">
                            <input
                              type="email"
                              placeholder="Enter Email"
                              className="welcome-textinput1 input"
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
            </div>
          </div>
        </div>
        <footer className="welcome-footer">
          <div className="welcome-container78">
            <img
              alt="logo"
              src="/favicon-200h.webp"
              className="welcome-image3"
            />
            <span className="welcome-text073">
              <span>© 2023-2024</span>
              <br></br>
              <br></br>
              <span> All Rights Reserved.</span>
            </span>
          </div>
          <div className="welcome-links-container">
            <div className="welcome-container79">
              <div className="welcome-container80">
                <span className="welcome-text078">Ecosystem</span>
                <span className="welcome-text079">
                  <span>RareCoin</span>
                  <br></br>
                </span>
                <span className="welcome-text082">NFTs</span>
                <span className="welcome-text083">Tokens</span>
                <span>Members</span>
              </div>
              <div className="welcome-container81">
                <span className="welcome-text085">Company</span>
                <span className="welcome-text086">FAQ</span>
                <span className="welcome-text087">Docs</span>
                <span className="welcome-text088">Email</span>
              </div>
            </div>
            <div className="welcome-container82">
              <div className="welcome-container83">
                <span className="welcome-text089">Support</span>
                <span className="welcome-text090">Terms of service</span>
                <span className="welcome-text091">Privacy Policy</span>
                <span>Help center</span>
              </div>
              <div className="welcome-container84">
                <span className="welcome-text093">Social</span>
                <span className="welcome-text094">
                  <span>Twitter</span>
                  <br></br>
                </span>
                <span className="welcome-text097">Discord</span>
                <span className="welcome-text098">Telegram</span>
                <span>
                  <span>Github</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </footer>
        <div className="welcome-container85"></div>
        
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
            justify-content: flex-start;
            background-color: #121212;
            z-index: 100;
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
            background-color: #0c0c0c;
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
          .welcome-text001 {
            color: #ffffff;
            font-size: 24px;
            font-family: 'Arial';
            font-weight: 900;
          }
          .welcome-icon {
            width: 24px;
            height: 24px;
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
          .welcome-text002 {
            margin-left: var(--dl-space-space-twounits);
          }
          .welcome-link01 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .welcome-text005 {
            margin-left: var(--dl-space-space-twounits);
          }
          .welcome-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .welcome-link02 {
            color: #a5a5a5;
            padding: 10px;
            transition: 0.3s;
            border-width: 0px;
            text-decoration: none;
            background-color: #2f2f2f;
          }
          .welcome-link02:hover {
            color: var(--dl-color-gray-white);
            scale: 1.1;
            box-shadow: rgba(200, 200, 200, 0.5) 2px 2px 50px;
          }
          .welcome-burger-menu {
            display: none;
          }
          .welcome-icon02 {
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
          .welcome-icon04 {
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
          .welcome-link03 {
            text-decoration: none;
          }
          .welcome-link04 {
            text-decoration: none;
          }
          .welcome-link05 {
            text-decoration: none;
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
          .welcome-register1 {
            color: #565656;
            padding: 10px;
            border-width: 0px;
            background-color: #2f2f2f;
          }
          .welcome-container05 {
            flex: 0 0 auto;
            width: 1083px;
            border: none;
            display: flex;
            z-index: 100;
            align-items: flex-start;
          }
          .welcome-container06 {
            width: 100%;
            height: 686px;
            display: flex;
            z-index: 100;
            overflow: hidden;
            align-items: center;
            justify-content: center;
          }
          .welcome-container07 {
            flex: 0 0 auto;
            width: 100%;
            height: 466px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .welcome-container08 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome-container09 {
            width: 892px;
            height: 538px;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-text006 {
            color: rgb(188, 188, 188);
            font-size: 90px;
            align-self: flex-start;
            font-family: 'Arial Black';
            font-weight: 900;
            margin-bottom: var(--dl-space-space-unit);
            animation-name: lightSpeedInLeft;
            animation-delay: 0s;
            animation-duration: 2s;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .welcome-text007 {
            color: #646464;
          }
          .welcome-text008 {
            color: #ffffff;
          }
          .welcome-text010 {
            color: #333333;
          }
          .welcome-text012 {
            width: 100%;
            font-size: 40px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Arial Black';
            font-weight: 900;
            text-shadow: black 2px 2px 10px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-text013 {
            color: #f9f9f9;
          }
          .welcome-text014 {
            color: #f9f9f9;
          }
          .welcome-text015 {
            color: #ff5711;
          }
          .welcome-text016 {
            color: #bcbcbc;
          }
          .welcome-text017 {
            color: #ffffff;
          }
          .welcome-text018 {
            color: #bcbcbc;
          }
          .welcome-text019 {
            color: #e6e6e6;
            width: 739px;
            height: 151px;
            font-size: 30px;
            align-self: flex-start;
            font-family: 'Exo 2';
            font-weight: 500;
            text-shadow: black 2px 2px 10px;
          }
          .welcome-container10 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 72px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-self: flex-start;
            align-items: center;
            justify-content: flex-start;
          }
          .welcome-icon06 {
            fill: #d9d9d9;
            width: 29px;
            height: 30px;
          }
          .welcome-icon08 {
            fill: #d9d9d9;
            width: 31px;
            height: 27px;
          }
          .welcome-icon10 {
            fill: #d9d9d9;
            width: 33px;
            height: 50%;
          }
          .welcome-icon12 {
            fill: #d9d9d9;
            width: 44px;
            height: 50%;
          }
          .welcome-container11 {
            color: var(--dl-color-gray-900);
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container12 {
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            overflow: hidden;
            position: relative;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container13 {
            width: 100%;
            height: 120px;
            margin: 4px;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.06);
            align-items: center;
            border-radius: 16px;
            animation-name: slideInDown;
            animation-delay: 0s;
            justify-content: space-between;
            background-color: rgba(14, 14, 14, 0.79);
            animation-duration: 2000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .welcome-container14 {
            flex: 0 0 auto;
            width: 110px;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .welcome-container15 {
            width: 100%;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .welcome-container16 {
            width: 110px;
            height: 33px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: center;
            background-color: rgba(41, 41, 41, 0.7);
          }
          .welcome-image1 {
            width: 17px;
            height: 19px;
            align-self: center;
            object-fit: cover;
          }
          .welcome-text022 {
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
          }
          .welcome-container17 {
            flex: 0 0 auto;
            width: 318px;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .welcome-container18 {
            flex: 0 0 auto;
            width: 318px;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .welcome-text023 {
            color: rgb(92, 92, 92);
          }
          .welcome-textinput {
            color: transparent;
            width: 318px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            padding: var(--dl-space-space-unit);
            font-size: 30px;
            text-align: right;
            font-family: 'Courier New';
            border-width: 0px;
            border-radius: 16px;
            backdop-filter: blur(10px);
            background-color: transparent;
          }
          .welcome-text026 {
            color: rgb(92, 92, 92);
          }
          .welcome-container19 {
            width: 100%;
            height: 0px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .welcome-container20 {
            width: 50px;
            cursor: pointer;
            height: 50px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            z-index: 1;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.74);
            transition: 0.3s;
            align-items: center;
            border-color: rgba(41, 41, 41, 0.35);
            border-width: 6px;
            border-radius: var(--dl-radius-radius-round);
            backdrop-filter: blur(50px);
            justify-content: center;
            background-color: rgba(22, 22, 22, 0.72);
          }
          .welcome-container20:hover {
            animation-name: rotateIn;
            animation-delay: 1s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .welcome-icon14 {
            fill: #d9d9d9;
            width: auto;
            height: 33px;
          }
          .welcome-container21 {
            width: 100%;
            height: 120px;
            margin: 4px;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.08);
            align-items: center;
            border-radius: 16px;
            animation-name: slideInUp;
            animation-delay: 0s;
            justify-content: space-between;
            background-color: rgba(14, 14, 14, 0.79);
            animation-duration: 2000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .welcome-container22 {
            flex: 0 0 auto;
            width: 110px;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .welcome-container23 {
            width: 100%;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .welcome-container24 {
            width: 110px;
            height: 33px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: center;
            background-color: rgba(41, 41, 41, 0.7);
          }
          .welcome-text027 {
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
          }
          .welcome-container25 {
            flex: 0 0 auto;
            width: 318px;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .welcome-container26 {
            flex: 0 0 auto;
            width: 318px;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .welcome-text028 {
            color: rgb(92, 92, 92);
          }
          .welcome-input {
            color: transparent;
            width: 318px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            padding: var(--dl-space-space-unit);
            font-size: 30px;
            text-align: right;
            font-family: 'Courier New';
            border-width: 0px;
            border-radius: 16px;
            backdop-filter: blur(10px);
            background-color: transparent;
          }
          .welcome-text031 {
            color: rgb(92, 92, 92);
          }
          .welcome-container27 {
            width: 100%;
            height: 77px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .welcome-container28 {
            width: 100%;
            cursor: pointer;
            height: 62px;
            display: flex;
            z-index: 100;
            box-shadow: 5px 5px 10px 0px #0a0a0a;
            margin-top: var(--dl-space-space-twounits);
            transition: 0.3s;
            align-items: center;
            border-color: #404040;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-twounits);
            animation-name: slideInUp;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            background-color: rgba(18, 18, 18, 0.75);
            animation-duration: 2000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .welcome-container28:hover {
            background: rgba(35, 41, 41, 0.7);
          }
          .welcome-text032 {
            color: rgb(224, 224, 224);
            font-size: 20px;
            text-align: center;
            font-family: 'Exo 2';
            font-weight: 400;
            text-shadow: 0px 0px 10px;
            letter-spacing: 2px;
          }
          .welcome-container29 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .welcome-text033 {
            font-size: 20px;
            font-style: normal;
            font-family: 'Exo 2';
            font-weight: 800;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
          }
          .welcome-icon17 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .welcome-container30 {
            width: 100%;
            height: 2215px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            z-index: 100;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .welcome-container31 {
            gap: var(--dl-space-space-halfunit);
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            border-radius: 16px;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container32 {
            width: 1134px;
            height: 1469px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-radius: 16px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .welcome-container33 {
            width: 100%;
            height: 356px;
            display: flex;
            z-index: 100;
            align-items: flex-start;
            border-color: #2f2f2f;
            border-width: 1px;
            border-radius: 16px;
            margin-bottom: 0px;
            animation-name: fadeInUp;
            animation-delay: 0s;
            backdrop-filter: blur(100px);
            justify-content: space-between;
            border-left-width: 1px;
            animation-duration: 500ms;
            border-right-width: 1px;
            animation-direction: normal;
            border-bottom-width: 1px;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .welcome-container34 {
            flex: 0 0 auto;
            width: 301px;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container35 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .welcome-icon20 {
            fill: #00aeff;
            width: 25px;
            height: 100%;
          }
          .welcome-text034 {
            color: rgb(120, 120, 120);
            font-size: 1.5em;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 400;
            margin-left: var(--dl-space-space-unit);
          }
          .welcome-text035 {
            color: #c9c9c9;
          }
          .welcome-container36 {
            flex: 0 0 auto;
            width: 301px;
            height: 100%;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .welcome-container37 {
            flex: 0 0 auto;
            width: 301px;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container38 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .welcome-icon22 {
            fill: #64ee5a;
            width: 24px;
            height: 100%;
          }
          .welcome-text036 {
            color: rgb(120, 120, 120);
            font-size: 1.5em;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 400;
            margin-left: var(--dl-space-space-unit);
          }
          .welcome-text037 {
            color: #c9c9c9;
          }
          .welcome-container39 {
            flex: 0 0 auto;
            width: 301px;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container40 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .welcome-icon24 {
            fill: #6d6d6d;
            width: 24px;
            height: 100%;
          }
          .welcome-text038 {
            color: rgb(120, 120, 120);
            font-size: 1.5em;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 400;
            margin-left: var(--dl-space-space-unit);
          }
          .welcome-text039 {
            color: #c9c9c9;
          }
          .welcome-container41 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            height: 184px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            justify-content: center;
          }
          .welcome-container42 {
            width: 50%;
            height: 100%;
            display: flex;
            padding: 0px;
            align-items: flex-start;
            margin-right: 1px;
            justify-content: center;
          }
          .welcome-container43 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .welcome-container44 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-radius: 16px;
            flex-direction: column;
          }
          .welcome-container45 {
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-radius: 16px;
            justify-content: center;
          }
          .welcome-link09 {
            display: contents;
          }
          .welcome-container46 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-color: rgba(51, 51, 51, 0.43);
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            backdrop-filter: blur(40px);
            justify-content: flex-start;
            text-decoration: none;
            border-top-width: 1px;
            border-left-width: 1px;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .welcome-container47 {
            width: 100%;
            height: 54px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container48 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .welcome-icon26 {
            fill: #767676;
            width: 41px;
            height: 55px;
            align-self: center;
          }
          .welcome-text040 {
            color: #ffffff;
            height: 56px;
            padding: var(--dl-space-space-halfunit);
            font-size: 1.7em;
            margin-top: var(--dl-space-space-halfunit);
            text-align: left;
            text-shadow: 0px 0px 10px black;
          }
          .welcome-icon28 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            margin-top: var(--dl-space-space-unit);
          }
          .welcome-text041 {
            color: #737373;
            font-size: 20px;
          }
          .welcome-container49 {
            width: 50%;
            height: 100%;
            display: flex;
            padding: 0px;
            align-items: flex-start;
            margin-right: 1px;
            justify-content: center;
          }
          .welcome-container50 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .welcome-container51 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-radius: 16px;
            flex-direction: column;
          }
          .welcome-container52 {
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-radius: 16px;
            justify-content: center;
          }
          .welcome-link10 {
            display: contents;
          }
          .welcome-container53 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-color: rgba(50, 50, 50, 0.43);
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            backdrop-filter: blur(30px);
            justify-content: flex-start;
            text-decoration: none;
            border-top-width: 1px;
            border-left-width: 1px;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .welcome-container54 {
            width: 100%;
            height: 54px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container55 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .welcome-icon30 {
            fill: #5d5d5d;
            width: 46px;
            height: 100%;
          }
          .welcome-text042 {
            color: #ffffff;
            height: 56px;
            padding: var(--dl-space-space-halfunit);
            margin-top: var(--dl-space-space-halfunit);
            text-align: left;
            text-shadow: 0px 0px 10px black;
          }
          .welcome-icon32 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            margin-top: var(--dl-space-space-unit);
          }
          .welcome-text043 {
            color: #585858;
            font-size: 20px;
          }
          .welcome-container56 {
            color: var(--dl-color-gray-900);
            width: 100%;
            height: 490px;
            display: flex;
            z-index: 100;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: ThroeeUnits;
            justify-content: flex-start;
          }
          .welcome-text044 {
            cursor: pointer;
            font-size: 100px;
            background: -webkit-linear-gradient(
              -86deg,
              orange 5%,
              #7aec8d 53%,
              blue 91%
            );
            transition: 0.3s;
            background-image: -webkit-linear-gradient(
              -86deg,
              orange 5%,
              rgb(122, 236, 141) 53%,
              rgba(0, 100, 200, 0.6) 91%
            );
            -webkit-text-stroke: 4px transparent;
            color: transparent;
            -webkit-background-clip: text;
          }
          .welcome-text044:hover {
            -webkit-text-stroke: 4px transparent;
            color: rgba(0, 0, 0, 0.9);
          }
          .welcome-text049 {
            color: rgb(72, 72, 72);
            width: 100%;
            padding: var(--dl-space-space-unit);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: 'Arial';
            border-color: #252525;
            border-width: 1px;
            margin-bottom: var(--dl-space-space-twounits);
            animation-name: pulse;
            animation-delay: 0s;
            border-top-width: 0px;
            border-left-width: 0px;
            animation-duration: 2000ms;
            border-right-width: 0px;
            animation-direction: normal;
            animation-iteration-count: 100;
            animation-timing-function: ease;
          }
          .welcome-container57 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            height: 290px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .welcome-container58 {
            width: 100%;
            cursor: pointer;
            height: 100%;
            display: flex;
            box-shadow: 0px 0px 30px 0px #000000;
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            align-items: flex-start;
            border-color: rgba(76, 76, 76, 0.57);
            border-width: 1px;
            border-radius: 16px;
            margin-bottom: var(--dl-space-space-halfunit);
            animation-name: fadeInUp;
            animation-delay: 0s;
            backdrop-filter: blur(10px);
            justify-content: flex-start;
            border-left-width: 1px;
            animation-duration: 1s;
            border-right-width: 1px;
            animation-direction: normal;
            border-bottom-width: 1px;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .welcome-container58:hover {
            scale: 1.01;
            z-index: 100;
            box-shadow: 0px 0px 50px rgba(100, 100, 100, 0.3);
          }
          .welcome-container59 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome-icon34 {
            fill: #0073e3;
            width: 81px;
            height: 80px;
            padding: var(--dl-space-space-unit);
            border-color: #202020;
            border-width: 3px;
            border-radius: var(--dl-radius-radius-round);
          }
          .welcome-text050 {
            color: #ffffff;
            width: auto;
            align-self: flex-start;
            text-align: left;
            text-shadow: 0px 0px 10px black;
          }
          .welcome-text051 {
            color: #808080;
            width: 421px;
            height: 65px;
            font-size: 16px;
            align-self: flex-start;
            font-style: italic;
            text-align: left;
            font-weight: 300;
            padding-bottom: var(--dl-space-space-unit);
          }
          .welcome-register2 {
            color: rgb(165, 165, 165);
            padding: 10px;
            transition: 0.3s;
            border-width: 0px;
            padding-bottom: 10px;
            text-decoration: none;
            background-color: rgb(47, 47, 47);
          }
          .welcome-register2:hover {
            color: var(--dl-color-gray-white);
            scale: 1.1;
            box-shadow: rgba(200, 200, 200, 0.5) 2px 2px 50px;
          }
          .welcome-text053:hover {
            color: var(--dl-color-gray-white);
            scale: 1.1;
            box-shadow: rgba(200, 200, 200, 0.5) 2px 2px 50px;
          }
          .welcome-container60 {
            width: 100%;
            filter: opacity(0.1);
            height: 100%;
            display: flex;
            z-index: -1;
            position: absolute;
            box-shadow: 0px 0px 100px 0px #000000;
            align-items: center;
            border-radius: 16px;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                90deg,
                rgb(0, 0, 0) 1%,
                rgba(49, 32, 32, 0) 100%
              ),
              url('https://images.unsplash.com/photo-1651054558996-03455fe2702f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI1fHxiaXRjb2luJTIwYXJ0fGVufDB8fHx8MTcxMTc1MTA4NHww&ixlib=rb-4.0.3&w=1500');
            background-repeat: no-repeat;
            background-position: center;
          }
          .welcome-container61 {
            width: 100%;
            cursor: pointer;
            height: 100%;
            display: flex;
            position: relative;
            box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.76);
            transition: 0.3s;
            align-items: flex-start;
            border-color: rgba(78, 78, 78, 0.46);
            border-width: 1px;
            border-radius: 16px;
            animation-name: zoomInUp;
            animation-delay: 0s;
            backdrop-filter: blur(10px);
            justify-content: flex-start;
            border-left-width: 1px;
            animation-duration: 1500ms;
            border-right-width: 1px;
            animation-direction: normal;
            border-bottom-width: 1px;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .welcome-container61:hover {
            scale: 1.01;
            z-index: 100;
            box-shadow: 0px 0px 50px rgba(100, 100, 100, 0.3);
          }
          .welcome-container62 {
            flex: 0 0 auto;
            width: auto;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome-icon36 {
            fill: #a34f00;
            width: 72px;
            height: 74px;
            padding: var(--dl-space-space-halfunit);
            border-color: #212121;
            border-width: 3px;
            border-radius: var(--dl-radius-radius-round);
          }
          .welcome-text055 {
            color: #ffffff;
            width: auto;
            align-self: flex-start;
            text-align: left;
            text-shadow: 0px 0px 10px black;
          }
          .welcome-text056 {
            color: #646464;
            width: 434px;
            font-size: 16px;
            align-self: flex-start;
            font-style: italic;
            text-align: left;
            font-weight: 300;
            padding-bottom: var(--dl-space-space-unit);
          }
          .welcome-register3 {
            color: rgb(165, 165, 165);
            padding: 10px;
            transition: 0.3s;
            border-width: 0px;
            text-decoration: none;
            background-color: rgb(47, 47, 47);
          }
          .welcome-register3:hover {
            color: var(--dl-color-gray-white);
            scale: 1.1;
            box-shadow: rgba(200, 200, 200, 0.5) 2px 2px 50px;
          }
          .welcome-text058:hover {
            color: var(--dl-color-gray-white);
            scale: 1.1;
            box-shadow: rgba(200, 200, 200, 0.5) 2px 2px 50px;
          }
          .welcome-container63 {
            width: 100%;
            filter: opacity(0.2);
            height: 100%;
            display: flex;
            z-index: -1;
            position: absolute;
            box-shadow: 0px 0px 100px 0px #000000;
            align-items: center;
            border-radius: 16px;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                90deg,
                rgb(0, 0, 0) 0%,
                rgba(0, 0, 0, 0) 100%
              ),
              url('https://images.unsplash.com/photo-1660644807804-ffacfd7a4137?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxzZWN1cml0eSUyMGFydHxlbnwwfHx8fDE3MTE3NTExODd8MA&ixlib=rb-4.0.3&w=1500');
            background-repeat: no-repeat, repeat;
            background-position: center, top;
          }
          .welcome-container64 {
            width: auto;
            height: 264px;
            display: flex;
            position: relative;
            box-shadow: 0px 0px 30px 0px #000000;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            align-items: flex-start;
            border-color: rgba(152, 152, 152, 0.19);
            border-width: 1px;
            border-radius: 16px;
            animation-name: zoomIn;
            animation-delay: 0s;
            backdrop-filter: blur(10px);
            justify-content: flex-start;
            border-left-width: 1px;
            animation-duration: 1s;
            border-right-width: 1px;
            animation-direction: normal;
            border-bottom-width: 1px;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }

          .welcome-container65 {
            flex: 0 0 auto;
            width: 100%;
            height: 271px;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome-image2 {
            width: 77px;
            height: 79px;
            padding: var(--dl-space-space-halfunit);
            object-fit: cover;
            border-color: #222222;
            border-width: 3px;
            border-radius: var(--dl-radius-radius-round);
          }
          .welcome-text060 {
            color: #ffffff;
            width: 841px;
            align-self: flex-start;
            text-align: left;
            margin-left: var(--dl-space-space-unit);
            text-shadow: 0px 0px 10px black;
          }
          .welcome-text061 {
            color: #6d6d6d;
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
            padding-bottom: 10px;
            text-decoration: none;
            background-color: rgb(47, 47, 47);
          }
          .welcome-register4:hover {
            color: var(--dl-color-gray-white);
            scale: 1.1;
            box-shadow: rgba(200, 200, 200, 0.5) 2px 2px 50px;
          }
          .welcome-container66 {
            width: 100%;
            filter: opacity(0.1);
            height: 100%;
            display: flex;
            z-index: -1;
            position: absolute;
            box-shadow: 0px 0px 100px 0px #000000;
            align-items: center;
            border-radius: 16px;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                90deg,
                rgb(0, 0, 0) 0%,
                rgba(44, 62, 80, 0) 100%
              ),
              url('/rare-1000h.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .welcome-container67 {
            color: var(--dl-color-gray-900);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            align-self: center;
            align-items: center;
            justify-content: flex-start;
          }
          .welcome-container68 {
            flex: 0 0 auto;
            width: 623px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome-text062 {
            width: 100%;
            cursor: pointer;
            height: 100%;
            font-size: 80px;
            background: -webkit-linear-gradient(
              -86deg,
              orange 5%,
              #7aec8d 53%,
              blue 91%
            );
            transition: 0.3s;
            background-image: -webkit-linear-gradient(
              -86deg,
              orange 5%,
              rgb(122, 236, 141) 53%,
              rgba(0, 100, 200, 0.6) 91%
            );
            -webkit-text-stroke: 4px transparent;
            color: rgba(0, 0, 0, 0.1);
            -webkit-background-clip: text;
          }
          .welcome-text062:hover {
            -webkit-text-stroke: 4px transparent;
            color: rgba(0, 0, 0, 0.9);
          }
          .welcome-text067 {
            width: auto;
            cursor: pointer;
            height: 100%;
            font-size: 60px;
            background: -webkit-linear-gradient(
              -86deg,
              orange 5%,
              #7aec8d 53%,
              blue 91%
            );
            font-style: normal;
            transition: 0.3s;
            font-weight: 400;
            animation-name: fadeInUp;
            animation-delay: 0s;
            background-image: -webkit-linear-gradient(
              -86deg,
              orange 5%,
              rgb(122, 236, 141) 53%,
              rgba(0, 100, 200, 0.6) 91%
            );
            animation-duration: 1000ms;
            -webkit-text-stroke: 4px transparent;
            color: rgba(0, 0, 0, 0.1);
            animation-direction: normal;
            -webkit-background-clip: text;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .welcome-text067:hover {
            -webkit-text-stroke: 4px transparent;
            color: rgba(0, 0, 0, 0.9);
          }
          .welcome-container69 {
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
            background-color: rgba(25, 96, 115, 0.08);
          }
          .welcome-text070 {
            color: rgb(188, 188, 188);
            font-size: 30px;
            text-align: center;
            font-family: 'Arial Black';
            font-weight: 800;
            margin-right: var(--dl-space-space-twounits);
          }
          .welcome-icon38 {
            fill: #d9d9d9;
            width: 33px;
            height: 38px;
            transition: 0.3s;
          }

          .welcome-container70 {
            width: 100%;
            height: auto;
            display: flex;
            z-index: 100;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            animation-name: flipInX;
            animation-delay: 0s;
            backdrop-filter: blur(10px);
            justify-content: center;
            animation-duration: 3s;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .welcome-container71 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .welcome-container72 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-radius: 16px;
            flex-direction: column;
          }
          .welcome-container73 {
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
          .welcome-container74 {
            flex: 0 0 auto;
            width: 100%;
            height: 297px;
            display: flex;
            align-items: center;
            border-radius: 16px;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-container75 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            border-color: rgba(51, 51, 51, 0.6);
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            justify-content: center;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .welcome-container76 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .welcome-icon40 {
            fill: #d9d9d9;
            width: 75px;
            height: 34px;
            align-self: center;
          }
          .welcome-text071 {
            color: #ffffff;
            align-self: center;
            text-shadow: 0px 0px 10px black;
          }
          .welcome-text072 {
            color: #797979;
            font-size: 1em;
            align-self: center;
            font-style: italic;
            font-weight: 300;
            padding-top: var(--dl-space-space-halfunit);
          }
          .welcome-container77 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            height: 43px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .welcome-textinput1 {
            color: rgba(52, 52, 52, 0.82);
            width: 270px;
            height: 43px;
            padding: var(--dl-space-space-unit);
            border-color: rgba(230, 230, 230, 0.58);
            border-width: 0px;
            background-color: #000000;
          }
          .welcome-register5 {
            color: rgb(165, 165, 165);
            width: 159px;
            cursor: pointer;
            height: 100%;
            padding: 10px;
            transition: 0.3s;
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
            height: 384px;
            display: flex;
            z-index: 100;
            position: static;
            max-width: 100%;
            min-height: 100%;
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
            background-color: #0e0e0e;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .welcome-container78 {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome-image3 {
            width: 75px;
            height: 78px;
          }
          .welcome-text073 {
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .welcome-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .welcome-container79 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .welcome-container80 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .welcome-text078 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .welcome-text079 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-text082 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-text083 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-container81 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .welcome-text085 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .welcome-text086 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-text087 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-text088 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-container82 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .welcome-container83 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .welcome-text089 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .welcome-text090 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-text091 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-container84 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .welcome-text093 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .welcome-text094 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-text097 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-text098 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .welcome-container85 {
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 0;
            position: fixed;
            align-items: flex-start;
          }
          @media (max-width: 1200px) {
            .welcome-container03 {
              width: 219px;
            }
            .welcome-container06 {
              height: 1039px;
            }
            .welcome-container07 {
              height: 438px;
              flex-direction: column;
            }
            .welcome-container09 {
              height: 380px;
            }
            .welcome-container17 {
              width: 132px;
            }
            .welcome-container18 {
              width: 131px;
            }
            .welcome-textinput {
              width: 237px;
            }
            .welcome-container25 {
              width: 132px;
            }
            .welcome-container26 {
              width: 131px;
            }
            .welcome-input {
              width: 237px;
            }
            .welcome-container31 {
              width: 100%;
            }
            .welcome-container70 {
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
            .welcome-icon02 {
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
            .welcome-icon04 {
              fill: #d9d9d9;
              width: 21px;
              height: 24px;
            }
            .welcome-container05 {
              width: 100%;
            }
            .welcome-container06 {
              height: 1810px;
              min-height: 100vh;
              align-items: flex-start;
            }
            .welcome-container07 {
              height: 1001px;
              position: relative;
            }
            .welcome-container08 {
              width: 100%;
              height: 223px;
            }
            .welcome-container09 {
              width: 100%;
              height: 173px;
            }
            .welcome-text006 {
              width: 100%;
              font-size: 50px;
            }
            .welcome-text012 {
              width: 100%;
              font-size: 30px;
            }
            .welcome-text019 {
              width: 100%;
              font-size: 20px;
            }
            .welcome-container10 {
              width: 100%;
            }
            .welcome-container13 {
              position: relative;
            }
            .welcome-container17 {
              width: auto;
            }
            .welcome-textinput {
              width: 252px;
              height: 38px;
            }
            .welcome-container20 {
              position: static;
            }
            .welcome-container21 {
              position: relative;
            }
            .welcome-container25 {
              width: auto;
            }
            .welcome-input {
              width: 252px;
              height: 38px;
            }
            .welcome-container30 {
              height: 2456px;
            }
            .welcome-container31 {
              height: 1508px;
            }
            .welcome-container32 {
              width: 100%;
              height: 283px;
              align-items: center;
              justify-content: center;
            }
            .welcome-container33 {
              width: 100%;
              height: 764px;
              align-items: center;
              flex-direction: column;
            }
            .welcome-container34 {
              height: auto;
            }
            .welcome-container36 {
              height: auto;
            }
            .welcome-container37 {
              height: auto;
            }
            .welcome-container39 {
              height: auto;
            }
            .welcome-container41 {
              width: auto;
              height: 524px;
              flex-direction: column;
            }
            .welcome-container42 {
              width: 100%;
            }
            .welcome-container49 {
              width: 100%;
            }
            .welcome-text044 {
              height: auto;
              font-size: 80px;
            }
            .welcome-container57 {
              height: 1215px;
              flex-direction: column;
            }
            .welcome-container58 {
              width: 591px;
            }
            .welcome-container59 {
              width: 484px;
            }
            .welcome-text051 {
              width: 387px;
            }
            .welcome-container61 {
              width: 584px;
              height: 343px;
            }
            .welcome-container62 {
              width: 469px;
            }
            .welcome-text055 {
              width: auto;
            }
            .welcome-text056 {
              width: 473px;
              height: 103px;
            }
            .welcome-container64 {
              width: 579px;
            }
            .welcome-container65 {
              width: 407px;
            }
            .welcome-text061 {
              width: 100%;
            }
            .welcome-container67 {
              height: 966px;
              flex-direction: column;
            }
            .welcome-container69 {
              align-self: center;
            }
            .welcome-icon38 {
              animation-name: rubberBand;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .welcome-container70 {
              width: 100%;
              height: 746px;
            }
            .welcome-container71 {
              width: 597px;
              height: 284px;
            }
            .welcome-container75 {
              width: 100%;
            }
            .welcome-text071 {
              width: 348px;
              height: 76px;
              text-align: center;
            }
            .welcome-text072 {
              width: 435px;
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .welcome-container77 {
              flex-direction: column;
            }
            .welcome-footer {
              height: 443px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .welcome-image3 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .welcome-links-container {
              width: auto;
              margin-top: var(--dl-space-space-twounits);
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .welcome-container79 {
              width: 100%;
              justify-content: space-between;
            }
            .welcome-container81 {
              margin-right: 0px;
            }
            .welcome-container82 {
              margin-top: var(--dl-space-space-twounits);
            }
            .welcome-container83 {
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .welcome-text063 {
              font-size: 30px;
            }
            .welcome-text064 {
              font-size: 30px;
            }
            .welcome-text065 {
              font-size: 40px;
            }
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
            .welcome-navbar-interactive {
              padding: var(--dl-space-space-unit);
              justify-content: flex-end;
            }
            .welcome-icon02 {
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
            .welcome-icon04 {
              fill: #d9d9d9;
              width: 22px;
              height: 20px;
            }
            .welcome-links1 {
              width: auto;
              margin-bottom: var(--dl-space-space-unit);
            }
            .welcome-link04 {
              text-decoration: none;
            }
            .welcome-link05 {
              text-decoration: none;
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
            .welcome-register1 {
              width: 100%;
            }
            .welcome-container06 {
              height: 918px;
              min-height: 100%;
              align-items: center;
              padding-bottom: 0px;
              justify-content: center;
            }
            .welcome-container07 {
              height: 474px;
            }
            .welcome-container08 {
              width: 100%;
              height: 50%;
            }
            .welcome-container09 {
              width: 100%;
              height: 277px;
              padding: var(--dl-space-space-halfunit);
            }
            .welcome-text006 {
              width: 100%;
              font-size: 50px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .welcome-text012 {
              width: 100%;
              height: 84px;
              font-size: 24px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .welcome-text019 {
              width: 100%;
              height: 367px;
              font-size: 20px;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .welcome-container10 {
              height: 326px;
            }
            .welcome-container11 {
              width: 100%;
            }
            .welcome-container12 {
              width: 100%;
              padding: var(--dl-space-space-unit);
            }
            .welcome-container15 {
              height: 91px;
              align-self: center;
              justify-content: center;
            }
            .welcome-container16 {
              background-color: rgba(41, 41, 41, 0.38);
            }
            .welcome-text023 {
              top: 113px;
              left: var(--dl-space-space-twounits);
            }
            .welcome-textinput {
              width: 100%;
            }
            .welcome-text026 {
              top: 113px;
              left: var(--dl-space-space-twounits);
            }
            .welcome-container23 {
              height: 91px;
              align-self: center;
              justify-content: center;
            }
            .welcome-container24 {
              background-color: rgba(41, 41, 41, 0.38);
            }
            .welcome-text028 {
              top: 113px;
              left: var(--dl-space-space-twounits);
            }
            .welcome-input {
              width: 100%;
            }
            .welcome-text031 {
              top: 113px;
              left: var(--dl-space-space-twounits);
            }
            .welcome-container28 {
              width: 100%;
            }
            .welcome-container30 {
              height: 3867px;
              padding: var(--dl-space-space-unit);
              align-self: center;
              margin-top: 0px;
              margin-bottom: 0px;
              justify-content: flex-start;
            }
            .welcome-container31 {
              height: 3661px;
            }
            .welcome-container32 {
              width: 100%;
              height: 1656px;
              padding-left: 0px;
              margin-bottom: 0px;
            }
            .welcome-container33 {
              width: 100%;
              height: 989px;
              display: flex;
              align-self: center;
              align-items: center;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .welcome-container34 {
              width: 100%;
              height: auto;
              padding: 0px;
              align-items: flex-start;
              margin-left: 0px;
              margin-right: 0px;
            }
            .welcome-container36 {
              width: 100%;
              height: auto;
            }
            .welcome-container37 {
              width: 100%;
              padding: 0px;
              align-self: flex-start;
              align-items: flex-start;
              margin-left: 0px;
              margin-right: 0px;
            }
            .welcome-container39 {
              width: 100%;
              height: auto;
              padding: 0px;
              align-items: flex-start;
              margin-left: 0px;
              margin-right: 0px;
            }
            .welcome-container41 {
              height: 518px;
            }
            .welcome-container42 {
              width: 100%;
              height: 300px;
              padding: var(--dl-space-space-halfunit);
            }
            .welcome-container43 {
              height: 178px;
            }
            .welcome-container45 {
              height: 100%;
              border-color: rgba(105, 105, 105, 0.99);
              border-top-width: 1px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0px;
            }
            .welcome-container46 {
              height: 244px;
            }
            .welcome-container47 {
              height: 92px;
            }
            .welcome-container48 {
              width: 100%;
              height: 56px;
              align-items: center;
              justify-content: center;
            }
            .welcome-text040 {
              width: auto;
              height: 38px;
              font-size: 1.3em;
              margin-top: 0px;
            }
            .welcome-container49 {
              width: 100%;
              height: 300px;
              padding: var(--dl-space-space-halfunit);
            }
            .welcome-container50 {
              height: 178px;
            }
            .welcome-container52 {
              height: 100%;
              border-color: rgba(105, 105, 105, 0.99);
              border-top-width: 1px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0px;
            }
            .welcome-container53 {
              height: 244px;
            }
            .welcome-container54 {
              height: 92px;
            }
            .welcome-container55 {
              width: 100%;
              height: 56px;
              align-items: center;
              justify-content: center;
            }
            .welcome-icon30 {
              width: 35px;
              height: 100%;
            }
            .welcome-text042 {
              width: auto;
              height: 38px;
              font-size: 1.3em;
              margin-top: 0px;
            }
            .welcome-container56 {
              height: 1024px;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .welcome-text044 {
              width: 100%;
              height: auto;
              font-size: 80px;
              align-self: center;
            }
            .welcome-container57 {
              height: 693px;
            }
            .welcome-container58 {
              width: 100%;
              height: 797px;
            }
            .welcome-container59 {
              width: 100%;
              height: auto;
            }
            .welcome-icon34 {
              width: 95px;
              height: 89px;
            }
            .welcome-text050 {
              width: auto;
              font-size: 1.3em;
            }
            .welcome-text051 {
              width: auto;
              height: 118px;
            }
            .welcome-container60 {
              background-image: linear-gradient(
                  90deg,
                  rgb(255, 255, 255) 0%,
                  rgba(28, 28, 28, 0) 100%
                ),
                url('https://images.unsplash.com/photo-1660642057001-813298c7744b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxiaXRjb2luJTIwYXJ0fGVufDB8fHx8MTcxMTYzNzA2Mnww&ixlib=rb-4.0.3&w=1500');
            }
            .welcome-container61 {
              width: 100%;
              height: 392px;
              align-items: center;
              justify-content: center;
            }
            .welcome-container62 {
              width: 100%;
              height: 100%;
            }
            .welcome-icon36 {
              width: 94px;
              height: 94px;
            }
            .welcome-text055 {
              width: auto;
              font-size: 1.3em;
            }
            .welcome-text056 {
              width: auto;
              height: auto;
            }
            .welcome-container64 {
              width: 100%;
              height: 908px;
            }
            .welcome-container65 {
              width: 100%;
              height: 385px;
            }
            .welcome-image2 {
              width: 62px;
              height: 62px;
            }
            .welcome-text060 {
              width: auto;
              font-size: 1.3em;
            }
            .welcome-text061 {
              width: auto;
            }
            .welcome-container67 {
              height: 1741px;
            }
            .welcome-container68 {
              width: 100%;
              align-items: center;
              padding-bottom: 0px;
              justify-content: center;
            }
            .welcome-text062 {
              width: 100%;
              height: auto;
              font-size: 30px;
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              background-image: -webkit-linear-gradient(
                -86deg,
                orange 5%,
                rgb(122, 236, 141) 53%,
                rgba(0, 100, 200, 0.6) 91%
              );
            }
            .welcome-text063 {
              font-size: 50px;
            }
            .welcome-text064 {
              font-size: 50px;
            }
            .welcome-text065 {
              font-size: 5s0px;
            }
            .welcome-text067 {
              width: 100%;
              height: auto;
              font-size: 60px;
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              background-image: -webkit-linear-gradient(
                -86deg,
                orange 5%,
                rgb(122, 236, 141) 53%,
                rgba(0, 100, 200, 0.6) 91%
              );
            }
            .welcome-container69 {
              width: 100%;
            }
            .welcome-text070 {
              font-size: 25px;
            }
            .welcome-container70 {
              height: auto;
              margin-top: var(--dl-space-space-unit);
              align-items: center;
            }
            .welcome-container71 {
              width: 100%;
              height: 257px;
            }
            .welcome-container74 {
              height: auto;
            }
            .welcome-container75 {
              height: 305px;
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .welcome-container76 {
              align-self: center;
              align-items: center;
              justify-content: flex-start;
            }
            .welcome-text071 {
              width: auto;
              height: auto;
              font-size: 1em;
              align-self: center;
              text-align: center;
            }
            .welcome-text072 {
              width: 100%;
              height: 74px;
              text-align: center;
            }
            .welcome-container77 {
              width: 100%;
            }
            .welcome-textinput1 {
              width: 100%;
              margin-left: 0px;
            }
            .welcome-register5 {
              align-self: center;
            }
            .welcome-footer {
              height: 100%;
              padding: var(--dl-space-space-unit);
            }
            .welcome-image3 {
              margin-bottom: 0px;
            }
            .welcome-links-container {
              width: auto;
              align-items: flex-start;
              flex-direction: column;
              justify-content: space-between;
            }
            .welcome-container79 {
              width: auto;
              align-items: center;
              margin-right: 0px;
              justify-content: space-between;
            }
            .welcome-container80 {
              margin-right: var(--dl-space-space-unit);
            }
            .welcome-container81 {
              align-self: stretch;
            }
            .welcome-container82 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default Welcome
