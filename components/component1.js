import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { ConnectWallet } from '@thirdweb-dev/react'

const Component1 = (props) => {
  return (
    <>
      <div className={`component1-container ${props.rootClassName} `}>
        <div className="component1-container01">
          <div className="component1-container02">
            <h1 className="component1-text">{props.heading}</h1>
            <div className="component1-container03">
              <div className="component1-container04">
                <svg viewBox="0 0 1024 1024" className="component1-icon">
                  <path d="M746.752 513.408l-180.949-104.875 91.221-218.923c2.816-5.717 4.395-12.16 4.395-18.944 0-23.552-18.987-42.667-42.539-42.667-10.624 0.171-19.499 3.541-26.539 9.131-1.408 1.109-2.261 1.792-2.987 2.56l-320 302.933c-9.771 9.259-14.592 22.571-13.056 35.925 1.536 13.355 9.344 25.216 20.949 32l180.992 104.96-92.288 221.44c-7.808 18.603-1.451 40.107 15.104 51.541 7.381 5.035 15.872 7.509 24.277 7.509 10.581 0 21.163-3.968 29.355-11.691l320-303.019c9.771-9.259 14.592-22.571 13.056-35.925-1.579-13.355-9.387-25.216-20.992-31.957z"></path>
                </svg>
              </div>
              <h1 className="component1-text1">{props.heading12}</h1>
            </div>
          </div>
          <div className="component1-container05">
            <svg viewBox="0 0 1024 1024" className="component1-icon02">
              <path d="M1024 429.256c0-200.926-58.792-363.938-131.482-365.226 0.292-0.006 0.578-0.030 0.872-0.030h-82.942c0 0-194.8 146.336-475.23 203.754-8.56 45.292-14.030 99.274-14.030 161.502s5.466 116.208 14.030 161.5c280.428 57.418 475.23 203.756 475.23 203.756h82.942c-0.292 0-0.578-0.024-0.872-0.032 72.696-1.288 131.482-164.298 131.482-365.224zM864.824 739.252c-9.382 0-19.532-9.742-24.746-15.548-12.63-14.064-24.792-35.96-35.188-63.328-23.256-61.232-36.066-143.31-36.066-231.124 0-87.81 12.81-169.89 36.066-231.122 10.394-27.368 22.562-49.266 35.188-63.328 5.214-5.812 15.364-15.552 24.746-15.552 9.38 0 19.536 9.744 24.744 15.552 12.634 14.064 24.796 35.958 35.188 63.328 23.258 61.23 36.068 143.312 36.068 231.122 0 87.804-12.81 169.888-36.068 231.124-10.39 27.368-22.562 49.264-35.188 63.328-5.208 5.806-15.36 15.548-24.744 15.548zM251.812 429.256c0-51.95 3.81-102.43 11.052-149.094-47.372 6.554-88.942 10.324-140.34 10.324-67.058 0-67.058 0-67.058 0l-55.466 94.686v88.17l55.46 94.686c0 0 0 0 67.060 0 51.398 0 92.968 3.774 140.34 10.324-7.236-46.664-11.048-97.146-11.048-149.096zM368.15 642.172l-127.998-24.51 81.842 321.544c4.236 16.634 20.744 25.038 36.686 18.654l118.556-47.452c15.944-6.376 22.328-23.964 14.196-39.084l-123.282-229.152zM864.824 548.73c-3.618 0-7.528-3.754-9.538-5.992-4.87-5.42-9.556-13.86-13.562-24.408-8.962-23.6-13.9-55.234-13.9-89.078s4.938-65.478 13.9-89.078c4.006-10.548 8.696-18.988 13.562-24.408 2.010-2.24 5.92-5.994 9.538-5.994 3.616 0 7.53 3.756 9.538 5.994 4.87 5.42 9.556 13.858 13.56 24.408 8.964 23.598 13.902 55.234 13.902 89.078 0 33.842-4.938 65.478-13.902 89.078-4.004 10.548-8.696 18.988-13.56 24.408-2.008 2.238-5.92 5.992-9.538 5.992z"></path>
            </svg>
            <h1 className="component1-text2">{props.heading2}</h1>
          </div>
          <div className="component1-container06">
            <span className="component1-text3">{props.text}</span>
          </div>
          <div className="component1-container07">
            <div className="component1-container08">
              <svg viewBox="0 0 1024 1024" className="component1-icon04">
                <path d="M1009.996 828.976l-301.544-301.544c-18.668-18.668-49.214-18.668-67.882 0l-22.626 22.626-184-184 302.056-302.058h-320l-142.058 142.058-14.060-14.058h-67.882v67.882l14.058 14.058-206.058 206.060 160 160 206.058-206.058 184 184-22.626 22.626c-18.668 18.668-18.668 49.214 0 67.882l301.544 301.544c18.668 18.668 49.214 18.668 67.882 0l113.136-113.136c18.67-18.666 18.67-49.214 0.002-67.882z"></path>
              </svg>
              <h1 className="component1-text4">{props.heading1}</h1>
            </div>
            <span className="component1-text5">{props.text1}</span>
          </div>
          <div id="connect" className="component1-container09">
          <ConnectWallet
        theme={({
          colors: {
            modalBg: "rgba(0, 0, 0, 0.5)",
            primaryButtonText: "white",
            selectedTextColor: "#d9d9d9",
            separatorLine: "transparent",
            secondaryText: "white",
            secondaryButtonText: "#c2c2c7",
            primaryText: "#cccccc",
            borderColor: "rgba(100, 100, 100, 0.3)",
          },
        })}
        modalTitle={"RareBay Connect"}
        auth={{ loginOptional: false }}
        switchToActiveChain={true}
        modalSize={"compact"}
        modalTitleIconUrl={
          "https://rarebay.xyz/fav.ico"
        }
        showThirdwebBranding={false}
        style={{color: "white"}}
      />
          </div>
          <div className="component1-container10">
            <button type="button" className="component1-button button">
              <span className="component1-text6">{props.text3}</span>
              <svg viewBox="0 0 1024 1024" className="component1-icon06">
                <path d="M237.254 877.254l530.746-530.744v229.49c0 35.346 28.654 64 64 64s64-28.654 64-64v-384c0-25.884-15.594-49.222-39.508-59.126-7.924-3.284-16.242-4.84-24.492-4.838v-0.036h-384c-35.346 0-64 28.654-64 64 0 35.348 28.654 64 64 64h229.49l-530.744 530.746c-12.498 12.496-18.746 28.876-18.746 45.254s6.248 32.758 18.746 45.254c24.992 24.994 65.516 24.994 90.508 0z"></path>
              </svg>
            </button>
            <Link legacyBehavior href="/swap">
              <a className="component1-link button">
                <span className="component1-text7">{props.text2}</span>
                <svg viewBox="0 0 1024 1024" className="component1-icon08">
                  <path d="M237.254 877.254l530.746-530.744v229.49c0 35.346 28.654 64 64 64s64-28.654 64-64v-384c0-25.884-15.594-49.222-39.508-59.126-7.924-3.284-16.242-4.84-24.492-4.838v-0.036h-384c-35.346 0-64 28.654-64 64 0 35.348 28.654 64 64 64h229.49l-530.744 530.746c-12.498 12.496-18.746 28.876-18.746 45.254s6.248 32.758 18.746 45.254c24.992 24.994 65.516 24.994 90.508 0z"></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .component1-container {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-sixunits);
            z-index: 100;
            overflow: hidden;
            position: relative;
            max-height: 100%;
            min-height: 100%;
            align-items: flex-start;
            backdrop-filter: blur(5px);
            justify-content: center;
            background-color: rgba(29, 29, 29, 0.1);
          }
          .component1-container01 {
            flex: 0 0 auto;
            width: 358px;
            height: 503px;
            display: flex;
            align-self: center;
            box-shadow: 0px 0px 30px 0px rgba(206, 206, 206, 0.49);
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 2px;
            border-radius: 16px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: rgba(177, 177, 177, 0.92);
          }
          .component1-container02 {
            width: 100%;
            height: 92px;
            display: flex;
            align-self: center;
            align-items: center;
            border-color: #838383;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGdyYWRpZW50fGVufDB8fHx8MTcxMTQxMzg5M3ww&ixlib=rb-4.0.3&w=500');
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            background-position: center;
            border-bottom-width: 1px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .component1-text {
            color: #272121;
            margin: var(--dl-space-space-halfunit);
            font-size: 1.5em;
            font-family: 'Arial Black';
            text-shadow: 1px 1px 10px;
            animation-name: zoomIn;
            text-transform: capitalize;
            animation-delay: 0s;
            animation-duration: 2000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .component1-container03 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .component1-container04 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            animation-name: rotateIn;
            animation-delay: 0s;
            justify-content: center;
            animation-duration: 1500ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .component1-icon {
            width: 24px;
            height: 24px;
          }
          .component1-text1 {
            color: #fefefe;
            font-size: 1.5em;
            font-family: 'Courier New';
          }
          .component1-container05 {
            gap: var(--dl-space-space-halfunit);
            width: auto;
            height: 39px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: flex-start;
            align-items: flex-start;
            justify-content: center;
          }
          .component1-icon02 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .component1-text2 {
            color: #9f5900;
            font-size: 1em;
          }
          .component1-container06 {
            width: 100%;
            height: 87px;
            display: flex;
            padding: var(--dl-space-space-unit);
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .component1-text3 {
            width: 100%;
            font-size: 20px;
            font-style: italic;
            margin-top: var(--dl-space-space-halfunit);
            font-family: 'Exo 2';
            font-weight: 200;
          }
          .component1-container07 {
            width: 100%;
            height: 92px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            padding-bottom: 16px;
            justify-content: center;
          }
          .component1-container08 {
            width: 100%;
            height: 46px;
            display: flex;
            align-self: flex-start;
            align-items: center;
            justify-content: space-between;
          }
          .component1-icon04 {
            fill: #2b2b2b;
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .component1-text4 {
            color: #fefefe;
            width: 100%;
            font-size: 1.5em;
            text-align: left;
          }
          .component1-text5 {
            color: #383838;
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
            font-family: 'Courier New';
          }
          .component1-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .component1-container10 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: 68px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .component1-button {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            box-shadow: 5px 5px 10px 0px #2d2d2d;
            border-color: #9f9f9f;
            flex-direction: row;
            background-color: rgba(81, 81, 81, 0.43);
          }
          .component1-text6 {
            color: #ffffff;
            align-self: center;
          }
          .component1-icon06 {
            fill: #d9d9d9;
            width: 19px;
            height: 20px;
          }
          .component1-link {
            display: flex;
            box-shadow: 5px 5px 10px 0px #2f2f2f;
            border-color: #a4a4a4;
            flex-direction: row;
            text-decoration: none;
            background-color: rgba(255, 255, 255, 0.46);
          }
          .component1-text7 {
            align-self: center;
          }
          .component1-icon08 {
            width: 19px;
            height: 20px;
          }
          .component1-root-class-name1 {
            top: -3px;
            left: -5px;
            height: 100%;
            position: absolute;
          }

          .component1-root-class-name3 {
            top: 0px;
            left: 0px;
            right: 0px;
            margin: auto;
            position: absolute;
          }
          @media (max-width: 767px) {
            .component1-container {
              height: 1088px;
            }
            .component1-container01 {
              width: 410px;
              height: 428px;
              margin-right: 0px;
            }
            .component1-container06 {
              height: 165px;
            }
          }
          @media (max-width: 479px) {
            .component1-container {
              height: 1529px;
              padding: var(--dl-space-space-threeunits);
              z-index: 100;
              max-height: 100vh;
            }
            .component1-container01 {
              top: -301px;
              left: 10px;
              width: 360px;
              height: 616px;
              position: static;
            }
            .component1-container02 {
              height: 153px;
            }
            .component1-text {
              text-align: center;
            }
            .component1-container06 {
              width: 100%;
              height: 127px;
            }
            .component1-container07 {
              height: 75px;
            }
            .component1-text4 {
              font-size: 1em;
            }
          }
        `}
      </style>
    </>
  )
}

Component1.defaultProps = {
  text3: 'Buy',
  rootClassName: '',
  heading12: 'Testnet',
  heading2: 'Announcement',
  heading: 'Welcome to RareBay',
  text: 'RareBay TestNet is currently available for RAR31ONES owners, own NFT to start participating in Testnet.',
  text2: 'ENTER',
  text1: 'Mine RareCoin while intearcting with DAPP.',
  heading1: 'Mine by interaction 🔥',
}

Component1.propTypes = {
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  heading12: PropTypes.string,
  heading2: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  heading1: PropTypes.string,
}

export default Component1
