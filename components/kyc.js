import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Kyc = (props) => {
  return (
    <>
      <div className="kyc-container">
        <div className="kyc-container01">
          <div className="kyc-container02">
            <h1 className="kyc-text">{props.heading}</h1>
            <div className="kyc-container03">
              <div
                data-thq="thq-dropdown"
                className="kyc-thq-dropdown list-item"
              >
                <ul data-thq="thq-dropdown-list" className="kyc-dropdown-list">
                  <li
                    data-thq="thq-dropdown"
                    className="kyc-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="kyc-dropdown-toggle"
                    >
                      <svg viewBox="0 0 1024 1024" className="kyc-icon">
                        <path d="M639.778 475.892h44.21l-51.012 226.178-66.324-318.010h-106.55l-77.114 318.010-57.816-318.010h-111.394l113.092 511.88h108.838l76.294-302.708 68.256 302.708h100.336l129.628-511.88h-170.446v91.832z"></path>
                        <path d="M917.806 229.076c-22.21-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.886 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924v0zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.982 17.78 50.678 41.878 81.374 72.572v0zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.324 32 32 32h224v624z"></path>
                      </svg>
                      <span className="kyc-text01">{props.text6}</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="kyc-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="kyc-dropdown-toggle1"
                    >
                      <svg viewBox="0 0 1024 1024" className="kyc-icon03">
                        <path d="M1024 320l-512-256-512 256 512 256 512-256zM512 148.97l342.058 171.030-342.058 171.030-342.058-171.030 342.058-171.030zM921.444 460.722l102.556 51.278-512 256-512-256 102.556-51.278 409.444 204.722zM921.444 652.722l102.556 51.278-512 256-512-256 102.556-51.278 409.444 204.722z"></path>
                      </svg>
                      <span className="kyc-text02">{props.text7}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/pair">
              <a className="kyc-link">
                <div className="kyc-container04">
                  <svg viewBox="0 0 1024 1024" className="kyc-icon05">
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <span className="kyc-text03">{props.text3}</span>
                </div>
              </a>
            </Link>
          </div>
          <div className="kyc-container05">
            <svg viewBox="0 0 1024 1024" className="kyc-icon07">
              <path d="M960 608l-288 288-96-96-64 64 160 160 352-352z"></path>
              <path d="M448 768h320v-115.128c-67.22-39.2-156.308-66.11-256-74.26v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h448v-64z"></path>
            </svg>
            <h1 className="kyc-text04">{props.heading1}</h1>
            <span className="kyc-text05">{props.text}</span>
          </div>
          <div data-thq="thq-dropdown" className="kyc-thq-dropdown1 list-item">
            <ul data-thq="thq-dropdown-list" className="kyc-dropdown-list1">
              <li data-thq="thq-dropdown" className="kyc-dropdown2 list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="kyc-dropdown-toggle2"
                >
                  <svg viewBox="0 0 1024 1024" className="kyc-icon10">
                    <path d="M639.778 475.892h44.21l-51.012 226.178-66.324-318.010h-106.55l-77.114 318.010-57.816-318.010h-111.394l113.092 511.88h108.838l76.294-302.708 68.256 302.708h100.336l129.628-511.88h-170.446v91.832z"></path>
                    <path d="M917.806 229.076c-22.21-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.886 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924v0zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.982 17.78 50.678 41.878 81.374 72.572v0zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.324 32 32 32h224v624z"></path>
                  </svg>
                  <span className="kyc-text06">{props.text4}</span>
                </div>
              </li>
              <li data-thq="thq-dropdown" className="kyc-dropdown3 list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="kyc-dropdown-toggle3"
                >
                  <svg viewBox="0 0 1024 1024" className="kyc-icon13">
                    <path d="M1024 320l-512-256-512 256 512 256 512-256zM512 148.97l342.058 171.030-342.058 171.030-342.058-171.030 342.058-171.030zM921.444 460.722l102.556 51.278-512 256-512-256 102.556-51.278 409.444 204.722zM921.444 652.722l102.556 51.278-512 256-512-256 102.556-51.278 409.444 204.722z"></path>
                  </svg>
                  <span className="kyc-text07">{props.text5}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="kyc-container06">
          <div className="kyc-container07">
            <div className="kyc-container08">
              <h1 className="kyc-text08">{props.heading2}</h1>
              <svg viewBox="0 0 1024 1024" className="kyc-icon15">
                <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <span className="kyc-text09">{props.text1}</span>
          </div>
          <Link href="/ecosystem">
            <a className="kyc-link1">
              <div className="kyc-container09">
                <div className="kyc-container10">
                  <h1 className="kyc-text10">{props.heading3}</h1>
                  <svg viewBox="0 0 1024 1024" className="kyc-icon17">
                    <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
                <span className="kyc-text11">{props.text2}</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .kyc-container {
            width: 100%;
            height: 560px;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .kyc-container01 {
            width: 1000px;
            height: 217px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-color: #323232;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
            background-color: rgba(28, 28, 28, 0.34);
          }
          .kyc-container02 {
            width: 675px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: space-between;
          }
          .kyc-text {
            color: rgb(202, 202, 202);
            width: 315px;
          }
          .kyc-container03 {
            flex: 0 0 auto;
            width: 223px;
            height: 53px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-halfunit);
            justify-content: flex-end;
          }
          .kyc-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .kyc-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            padding: var(--dl-space-space-oneandhalfunits);
            z-index: 100;
            position: absolute;
            min-width: 100%;
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            align-items: stretch;
            border-color: #252525;
            border-width: 1px;
            margin-right: 0px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #191919;
            list-style-position: inside;
          }
          .kyc-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .kyc-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .kyc-dropdown-toggle:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .kyc-icon {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .kyc-text01 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-halfunit);
          }
          .kyc-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .kyc-dropdown-toggle1 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .kyc-dropdown-toggle1:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .kyc-icon03 {
            fill: #924be7;
            width: 24px;
            height: 24px;
          }
          .kyc-text02 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-halfunit);
          }
          .kyc-link {
            display: contents;
          }
          .kyc-container04 {
            flex: 0 0 auto;
            width: 93px;
            height: 37px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            padding-left: 8px;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: center;
            text-decoration: none;
            background-color: rgba(0, 214, 245, 0.51);
          }
          .kyc-icon05 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .kyc-text03 {
            color: rgb(181, 181, 181);
            margin-left: var(--dl-space-space-unit);
          }
          .kyc-container05 {
            width: 100%;
            height: 50%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .kyc-icon07 {
            fill: #d9d9d9;
            width: 78px;
            height: 76px;
          }
          .kyc-text04 {
            color: #2cff1f;
          }
          .kyc-text05 {
            color: rgb(194, 194, 194);
          }
          .kyc-thq-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .kyc-dropdown-list1 {
            top: 0;
            right: 100%;
            width: max-content;
            display: none;
            padding: var(--dl-space-space-oneandhalfunits);
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #252525;
            border-width: 1px;
            margin-right: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #191919;
            list-style-position: inside;
          }
          .kyc-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .kyc-dropdown-toggle2 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .kyc-dropdown-toggle2:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .kyc-icon10 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .kyc-text06 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-halfunit);
          }
          .kyc-dropdown3 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .kyc-dropdown-toggle3 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .kyc-dropdown-toggle3:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .kyc-icon13 {
            fill: #924be7;
            width: 24px;
            height: 24px;
          }
          .kyc-text07 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-halfunit);
          }
          .kyc-container06 {
            width: 1000px;
            height: 84px;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .kyc-container07 {
            flex: 0 0 auto;
            width: 50%;
            height: 100px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-color: #303030;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(28, 28, 28, 0.34);
          }
          .kyc-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            justify-content: center;
          }
          .kyc-text08 {
            color: rgb(212, 212, 212);
            width: 323px;
            height: 30px;
            font-size: 1.5em;
            text-align: left;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-twounits);
          }
          .kyc-icon15 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .kyc-text09 {
            color: rgb(194, 194, 194);
            width: 100%;
            padding-left: var(--dl-space-space-twounits);
          }
          .kyc-link1 {
            display: contents;
          }
          .kyc-container09 {
            flex: 0 0 auto;
            width: 50%;
            height: 100px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            border-color: #303030;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-color: rgba(28, 28, 28, 0.34);
          }
          .kyc-container10 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            justify-content: center;
          }
          .kyc-text10 {
            color: rgb(212, 212, 212);
            width: 323px;
            height: 30px;
            font-size: 1.5em;
            text-align: left;
          }
          .kyc-icon17 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .kyc-text11 {
            color: rgb(194, 194, 194);
            width: 100%;
            padding-left: var(--dl-space-space-twounits);
          }
          @media (max-width: 1200px) {
            .kyc-container06 {
              width: 1014px;
            }
          }
          @media (max-width: 767px) {
            .kyc-container {
              height: 838px;
            }
            .kyc-container01 {
              width: 100%;
            }
            .kyc-container02 {
              width: 100%;
              position: relative;
            }
            .kyc-container03 {
              width: auto;
            }
            .kyc-container06 {
              width: 100%;
              height: 292px;
              flex-direction: column;
            }
            .kyc-container07 {
              width: 724px;
              height: 95px;
            }
            .kyc-container08 {
              justify-content: flex-start;
            }
            .kyc-text08 {
              width: 619px;
              height: 27px;
              margin-left: var(--dl-space-space-twounits);
            }
            .kyc-container09 {
              width: 720px;
              height: 93px;
            }
            .kyc-container10 {
              justify-content: flex-start;
            }
            .kyc-text10 {
              width: 100%;
              height: 29px;
              margin-left: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .kyc-container {
              height: 708px;
              padding: var(--dl-space-space-unit);
            }
            .kyc-container01 {
              width: 100%;
            }
            .kyc-text {
              font-size: 1em;
            }
            .kyc-container03 {
              width: auto;
            }
            .kyc-container05 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .kyc-text04 {
              font-size: 1.2em;
            }
            .kyc-container06 {
              width: 100%;
              height: 298px;
            }
            .kyc-container07 {
              width: 100%;
              height: 167px;
              justify-content: flex-start;
            }
            .kyc-container08 {
              justify-content: center;
            }
            .kyc-text08 {
              width: 278px;
              height: 51px;
              padding: var(--dl-space-space-unit);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .kyc-text09 {
              color: rgb(194, 194, 194);
              width: auto;
              margin: var(--dl-space-space-unit);
              text-align: left;
              padding-left: 0px;
            }
            .kyc-container09 {
              width: 100%;
              height: 50%;
              justify-content: flex-start;
            }
            .kyc-container10 {
              height: 59px;
              margin-top: var(--dl-space-space-unit);
              justify-content: center;
            }
            .kyc-text10 {
              width: 307px;
              height: 36px;
              padding: var(--dl-space-space-unit);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .kyc-text11 {
              color: rgb(194, 194, 194);
              padding: var(--dl-space-space-unit);
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Kyc.defaultProps = {
  text4: 'Tutorials',
  text3: 'Stake',
  heading2: 'About verification',
  text7: 'V3 Liquidity',
  heading: 'KYC Verification',
  text5: 'V3 Liquidity',
  text1: 'Learn more about RareBay KYC process and verification benefits.',
  text2: 'View a list of verified accounts on RareBay',
  heading1: 'Verified',
  text: 'Congratultions! You passed KYC verification.',
  text6: 'Tutorials',
  heading3: 'RareBay Members',
}

Kyc.propTypes = {
  text4: PropTypes.string,
  text3: PropTypes.string,
  heading2: PropTypes.string,
  text7: PropTypes.string,
  heading: PropTypes.string,
  text5: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  heading1: PropTypes.string,
  text: PropTypes.string,
  text6: PropTypes.string,
  heading3: PropTypes.string,
}

export default Kyc
