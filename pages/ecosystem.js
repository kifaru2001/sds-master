import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Nav from '../components/nav'

const Ecosystem = (props) => {
  return (
    <>
      <div className="ecosystem-container">
        <Head>
          <title>
            Ecosystem - Fast! secure! Rare! Decentralized Exchange
          </title>
          <meta
            name="description"
            content="Verify, Mine, Stake, Trade, Swap, Track, Inscribe, Farm, Earn, Borrow, Lend, play! faster than ever, seamlessly anywhere anytime. "
          />
          <meta
            property="og:title"
            content="Ecosystem - Crazy-Fast! secure! Rare! Decentralized Exchange"
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
        <Nav rootClassName="nav-root-class-name3"></Nav>
        <div className="ecosystem-container01"></div>
        <div className="ecosystem-container02">
          <div className="ecosystem-container03">
            <div className="ecosystem-container04">
              <div className="ecosystem-container05">
                <div className="ecosystem-container06">
                  <div className="ecosystem-container07">
                    <div className="ecosystem-container08">
                      <Link legacyBehavior href="/mining">
                        <a className="ecosystem-link">
                          <div className="ecosystem-container09">
                            <div className="ecosystem-container10">
                              <svg
                                viewBox="0 0 1024 1024"
                                className="ecosystem-icon"
                              >
                                <path d="M0 832h1024v128h-1024zM128 576h128v192h-128zM320 320h128v448h-128zM512 512h128v256h-128zM704 128h128v640h-128z"></path>
                              </svg>
                              <div className="ecosystem-container11">
                                <h1 className="ecosystem-text">TVL</h1>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ecosystem-container12">
                <div className="ecosystem-container13">
                  <div className="ecosystem-container14">
                    <div className="ecosystem-container15">
                      <Link legacyBehavior href="/mining">
                        <a className="ecosystem-link1">
                          <div className="ecosystem-container16">
                            <div className="ecosystem-container17">
                              <div className="ecosystem-container18">
                                <svg
                                  viewBox="0 0 1024 1024"
                                  className="ecosystem-icon2"
                                >
                                  <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM658.744 749.256l-210.744-210.746v-282.51h128v229.49l173.256 173.254-90.512 90.512z"></path>
                                </svg>
                                <h1 className="ecosystem-text1">24hr Volume</h1>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ecosystem-container19">
          <svg viewBox="0 0 1024 1024" className="ecosystem-icon4">
            <path d="M1016.988 652.010l-256-320c-6.074-7.592-15.266-12.010-24.988-12.010h-448c-9.72 0-18.916 4.418-24.988 12.010l-256 320c-4.538 5.674-7.012 12.724-7.012 19.99v288c0 35.346 28.654 64 64 64h896c35.348 0 64-28.654 64-64v-288c0-7.266-2.472-14.316-7.012-19.99zM960 704h-224l-128 128h-192l-128-128h-224v-20.776l239.38-299.224h417.24l239.38 299.224v20.776z"></path>
            <path d="M736 512h-448c-17.672 0-32-14.328-32-32s14.328-32 32-32h448c17.674 0 32 14.328 32 32s-14.326 32-32 32z"></path>
            <path d="M800 640h-576c-17.672 0-32-14.326-32-32s14.328-32 32-32h576c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
          </svg>
          <span className="ecosystem-text2">Oops! No Items!</span>
        </div>
      </div>
      <style jsx>
        {`
          .ecosystem-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #1a1a1a;
          }
          .ecosystem-container01 {
            width: 100%;
            height: 66px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .ecosystem-container02 {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .ecosystem-container03 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .ecosystem-container04 {
            gap: var(--dl-space-space-halfunit);
            width: 70%;
            height: 184px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            justify-content: center;
          }
          .ecosystem-container05 {
            width: 50%;
            height: 100%;
            display: flex;
            padding: 0px;
            align-items: flex-start;
            margin-right: 1px;
            justify-content: center;
          }
          .ecosystem-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ecosystem-container07 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-radius: 16px;
            flex-direction: column;
          }
          .ecosystem-container08 {
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-radius: 16px;
            justify-content: center;
          }
          .ecosystem-link {
            display: contents;
          }
          .ecosystem-container09 {
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
          .ecosystem-container10 {
            width: 100%;
            height: 54px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .ecosystem-icon {
            fill: #424242;
            width: 41px;
            height: 39px;
          }
          .ecosystem-container11 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .ecosystem-text {
            color: #b3b3b3;
            height: auto;
            font-size: 2em;
            font-style: normal;
            text-align: left;
            font-family: 'Exo 2';
            font-weight: 400;
            text-shadow: 0px 0px 10px black;
          }
          .ecosystem-container12 {
            width: 50%;
            height: 100%;
            display: flex;
            padding: 0px;
            align-items: flex-start;
            margin-right: 1px;
            justify-content: center;
          }
          .ecosystem-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ecosystem-container14 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-radius: 16px;
            flex-direction: column;
          }
          .ecosystem-container15 {
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-radius: 16px;
            justify-content: center;
          }
          .ecosystem-link1 {
            display: contents;
          }
          .ecosystem-container16 {
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
          .ecosystem-container17 {
            width: 100%;
            height: 54px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .ecosystem-container18 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            justify-content: center;
          }
          .ecosystem-icon2 {
            fill: #292929;
            width: 37px;
            height: 63px;
          }
          .ecosystem-text1 {
            color: #989898;
            height: auto;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Exo 2';
            font-weight: 400;
            text-shadow: 0px 0px 10px black;
          }
          .ecosystem-container19 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .ecosystem-icon4 {
            fill: #d9d9d9;
            width: 257px;
            height: 82px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .ecosystem-text2 {
            color: rgb(214, 214, 214);
          }
          @media (max-width: 767px) {
            .ecosystem-container02 {
              height: 1600px;
            }
            .ecosystem-container04 {
              width: 100%;
              height: 524px;
              flex-direction: column;
            }
            .ecosystem-container05 {
              width: 100%;
            }
            .ecosystem-container12 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .ecosystem-container02 {
              height: auto;
              padding: var(--dl-space-space-unit);
            }
            .ecosystem-container03 {
              width: 100%;
              height: auto;
            }
            .ecosystem-container04 {
              width: 100%;
              height: 518px;
            }
            .ecosystem-container05 {
              width: 100%;
              height: 300px;
              padding: var(--dl-space-space-halfunit);
            }
            .ecosystem-container06 {
              height: 178px;
            }
            .ecosystem-container08 {
              height: 100%;
              border-color: rgba(105, 105, 105, 0.99);
              border-top-width: 1px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0px;
            }
            .ecosystem-container09 {
              height: 244px;
            }
            .ecosystem-container10 {
              height: 92px;
            }
            .ecosystem-container11 {
              width: 100%;
              height: 56px;
              align-items: center;
              justify-content: center;
            }
            .ecosystem-text {
              width: auto;
              height: 38px;
              font-size: 1.3em;
              margin-top: 0px;
            }
            .ecosystem-container12 {
              width: 100%;
              height: 300px;
              padding: var(--dl-space-space-halfunit);
            }
            .ecosystem-container13 {
              height: 178px;
            }
            .ecosystem-container15 {
              height: 100%;
              border-color: rgba(105, 105, 105, 0.99);
              border-top-width: 1px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0px;
            }
            .ecosystem-container16 {
              height: 244px;
            }
            .ecosystem-container17 {
              height: 92px;
            }
            .ecosystem-container18 {
              width: 100%;
              height: 56px;
              align-items: center;
              justify-content: center;
            }
            .ecosystem-text1 {
              width: auto;
              height: 38px;
              font-size: 1.3em;
              margin-top: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Ecosystem
