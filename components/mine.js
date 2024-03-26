import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Mine = (props) => {
  return (
    <>
      <div className={`mine-container ${props.rootClassName} `}>
        <div className="mine-container01">
          <div className="mine-container02">
            <div className="mine-container03">
              <div className="mine-container04">
                <div className="mine-container05">
                  <div className="mine-container06">
                    <div className="mine-container07">
                      <svg
                        viewBox="0 0 1243.4285714285713 1024"
                        className="mine-icon"
                      >
                        <path d="M365.714 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM329.143 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM950.857 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM914.286 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM658.286 505.714l219.429-94.286v-152l-219.429 93.714v152.571zM621.714 289.143l252-108-252-108-252 108zM1243.429 585.143v237.714c0 27.429-15.429 53.143-40.571 65.143l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-1.714-0.571-2.857-1.143-4-2.286-1.143 1.143-2.286 1.714-4 2.286l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-25.143-12-40.571-37.714-40.571-65.143v-237.714c0-29.143 17.714-55.429 44.571-67.429l248-106.286v-228.571c0-29.143 17.714-55.429 44.571-67.429l256-109.714c9.143-4 18.857-5.714 28.571-5.714s19.429 1.714 28.571 5.714l256 109.714c26.857 12 44.571 38.286 44.571 67.429v228.571l248 106.286c27.429 12 44.571 38.286 44.571 67.429z"></path>
                      </svg>
                      <h1 className="mine-text">{props.heading}</h1>
                      <svg viewBox="0 0 1024 1024" className="mine-icon2">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="mine-text01">
                    <span>
                      RareCoin is the ecosystem protocol used in RareBay
                      governance.
                    </span>
                    <br></br>
                    <span>
                      Only verified members can mine RareCoin by staking and
                      interacting with DAPP.
                    </span>
                    <br></br>
                    <span>
                      Unverified members can earn Coins by using utilities.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mine-container08">
          <div className="mine-container09">
            <div className="mine-container10">
              <div className="mine-container11">
                   <Link  legacyBehavior  href="/mining">
                  <a className="mine-link">
                    <div className="mine-container12">
                      <div className="mine-container13">
                        <div className="mine-container14">
                          <svg viewBox="0 0 1024 1024" className="mine-icon4">
                            <path d="M1009.996 828.976l-301.544-301.544c-18.668-18.668-49.214-18.668-67.882 0l-22.626 22.626-184-184 302.056-302.058h-320l-142.058 142.058-14.060-14.058h-67.882v67.882l14.058 14.058-206.058 206.060 160 160 206.058-206.058 184 184-22.626 22.626c-18.668 18.668-18.668 49.214 0 67.882l301.544 301.544c18.668 18.668 49.214 18.668 67.882 0l113.136-113.136c18.67-18.666 18.67-49.214 0.002-67.882z"></path>
                          </svg>
                          <h1 className="mine-text08">{props.heading1}</h1>
                          <svg viewBox="0 0 1024 1024" className="mine-icon6">
                            <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                          </svg>
                        </div>
                      </div>
                      <span className="mine-text09">{props.text}</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .mine-container {
            width: 100%;
            height: 201px;
            display: flex;
            position: relative;
            align-items: flex-end;
            justify-content: center;
          }
          .mine-container01 {
            width: 669px;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .mine-container02 {
            flex: 0 0 auto;
            width: 100%;
            height: 126px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mine-container03 {
            flex: 0 0 auto;
            width: 100%;
            height: 151px;
            display: flex;
            align-items: center;
            border-radius: 16px;
            flex-direction: column;
            background-color: rgba(21, 21, 21, 0.94);
          }
          .mine-container04 {
            width: 100%;
            height: 122px;
            display: flex;
            align-self: center;
            box-shadow: black 0px 0px 50px;
            align-items: flex-start;
  border-color: transparent;
            border-width: 1px;
            border-radius: 16px;
            justify-content: center;
          }
          .mine-container05 {
            flex: 0 0 auto;
            width: 100%;
            height: 181px;
            display: flex;
            align-items: center;
            border-color: transparent;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            backdrop-filter: blur(50px);
            justify-content: flex-start;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .mine-container06 {
            width: 100%;
            height: 68px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .mine-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .mine-icon {
            fill: #d9d9d9;
            width: 46px;
            height: 100%;
          }
          .mine-text {
            color: rgb(161, 161, 161);
            height: 56px;
            padding: var(--dl-space-space-halfunit);
            margin-top: var(--dl-space-space-halfunit);
            text-align: left;
            text-shadow: 0px 0px 10px black;
          }
          .mine-icon2 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            margin-top: var(--dl-space-space-unit);
          }
          .mine-text01 {
            color: rgb(159, 159, 159);
            width: auto;
            font-style: italic;
            font-family: 'Noto Sans';
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .mine-container08 {
            width: 669px;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .mine-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: 126px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mine-container10 {
            flex: 0 0 auto;
            width: 100%;
            height: 151px;
            display: flex;
            align-items: center;
            border-radius: 16px;
            flex-direction: column;
            background-color: rgba(21, 21, 21, 0.94);
          }
          .mine-container11 {
            width: 100%;
            height: 122px;
            display: flex;
            align-self: center;
            box-shadow: black 0px 0px 50px;
            align-items: flex-start;
  border-color: transparent;
            border-width: 1px;
            border-radius: 16px;
            justify-content: center;
          }
          .mine-link {
            display: contents;
          }
          .mine-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: 181px;
            display: flex;
            border-color: transparent;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            backdrop-filter: blur(50px);
            justify-content: flex-start;
            text-decoration: none;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .mine-container13 {
            width: 100%;
            height: 68px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .mine-container14 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .mine-icon4 {
            fill: #ffffff;
            width: 34px;
            height: 41px;
            margin-top: var(--dl-space-space-unit);
          }
          .mine-text08 {
            color: rgb(161, 161, 161);
            height: 56px;
            padding: var(--dl-space-space-halfunit);
            margin-top: var(--dl-space-space-halfunit);
            text-align: left;
            text-shadow: 0px 0px 10px black;
          }
          .mine-icon6 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            margin-top: var(--dl-space-space-unit);
          }
          .mine-text09 {
            color: rgb(159, 159, 159);
            width: auto;
            font-style: italic;
            font-family: 'Noto Sans';
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 767px) {
            .mine-container {
              height: 524px;
              flex-direction: column;
            }
            .mine-container01 {
              width: 100%;
            }
            .mine-container08 {
              width: 100%;
              padding: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .mine-container {
              height: 518px;
            }
            .mine-container01 {
              width: 100%;
              height: 300px;
              padding: var(--dl-space-space-unit);
            }
            .mine-container02 {
              height: 178px;
            }
            .mine-container04 {
              height: 100%;
              border-color: transparent;
              border-top-width: 1px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0px;
            }
            .mine-container05 {
              height: 244px;
            }
            .mine-container06 {
              height: 92px;
            }
            .mine-container07 {
              width: 100%;
              height: 56px;
              align-items: center;
              justify-content: center;
            }
            .mine-icon {
              width: 35px;
              height: 100%;
            }
            .mine-text {
              width: auto;
              height: 38px;
              font-size: 1.3em;
              margin-top: 0px;
            }
            .mine-text01 {
              padding: var(--dl-space-space-unit);
            }
            .mine-container08 {
              width: 100%;
              height: 233px;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .mine-container11 {
              border-color: transparent;
              border-top-width: 1px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0px;
            }
            .mine-container12 {
              height: 217px;
              border-color: transparent;
            }
            .mine-text08 {
              width: 139px;
              font-size: 1.2em;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Mine.defaultProps = {
  heading1: 'Mine by Interaction',
  heading: 'RareCoin Protocol',
  rootClassName: '',
  text: 'Mine RareCoin on DEX while interacting with DAPP, the longer time you spend on RareBay, the more coins you earn. Rewards earned can be withdrawn at any time. Buy Packages to earn at higher rates.',
}

Mine.propTypes = {
  heading1: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Mine
