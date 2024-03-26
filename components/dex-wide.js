import React from 'react'

import PropTypes from 'prop-types'

const DexWide = (props) => {
  return (
    <>
      <div className="dex-wide-container">
        <div className="dex-wide-container01"></div>
        <div className="dex-wide-container02">
          <div className="dex-wide-container03">
            <div className="dex-wide-container04">
              <span className="dex-wide-text">{props.text8}</span>
            </div>
            <div className="dex-wide-container05">
              <span className="dex-wide-text01">{props.text83}</span>
            </div>
            <div className="dex-wide-container06">
              <span className="dex-wide-text02">{props.text831}</span>
            </div>
          </div>
          <div className="dex-wide-container07">
            <span className="dex-wide-text03">{props.text}</span>
            <input
              type="text"
              placeholder={props.textinputPlaceholder}
              className="dex-wide-textinput input"
            />
            <div className="dex-wide-container08">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="dex-wide-image"
              />
              <span className="dex-wide-text04">{props.text11}</span>
            </div>
            <animate-on-reveal
              animation="rotateIn"
              duration="300ms"
              delay="0ms"
              iteration="2"
            >
              <div
                data-thq-animate-on-reveal="true"
                className="dex-wide-container09"
              >
                <svg viewBox="0 0 1024 1024" className="dex-wide-icon">
                  <path d="M889.68 166.32c-93.608-102.216-228.154-166.32-377.68-166.32-282.77 0-512 229.23-512 512h96c0-229.75 186.25-416 416-416 123.020 0 233.542 53.418 309.696 138.306l-149.696 149.694h352v-352l-134.32 134.32z"></path>
                  <path d="M928 512c0 229.75-186.25 416-416 416-123.020 0-233.542-53.418-309.694-138.306l149.694-149.694h-352v352l134.32-134.32c93.608 102.216 228.154 166.32 377.68 166.32 282.77 0 512-229.23 512-512h-96z"></path>
                </svg>
              </div>
            </animate-on-reveal>
            <span className="dex-wide-text05">
              <span>Balance $0</span>
              <br></br>
            </span>
            <span className="dex-wide-text08">{props.text1}</span>
            <input
              type="text"
              placeholder={props.textinputPlaceholder1}
              className="dex-wide-textinput1 input"
            />
            <span className="dex-wide-text09">{props.text3}</span>
            <div className="dex-wide-container10">
              <span className="dex-wide-text10">{props.text12}</span>
              <svg viewBox="0 0 1024 1024" className="dex-wide-icon3">
                <path d="M298 426h428l-214 214z"></path>
              </svg>
            </div>
            <span className="dex-wide-text11">{props.text2}</span>
          </div>
          <div className="dex-wide-container11">
            <span className="dex-wide-text12">{props.text4}</span>
          </div>
          <div className="dex-wide-container12">
            <span className="dex-wide-text13">{props.text5}</span>
            <span className="dex-wide-text14">{props.text6}</span>
            <div className="dex-wide-container13">
              <svg viewBox="0 0 1024 1024" className="dex-wide-icon5">
                <path d="M768 426q18 0 30-12t12-30-12-30-30-12-30 12-12 30 12 30 30 12zM512 426v-212h-256v212h256zM844 308q30 30 30 76v406q0 44-31 75t-75 31-75-31-31-75v-214h-64v320h-428v-682q0-34 26-60t60-26h256q34 0 60 26t26 60v298h42q34 0 60 26t26 60v192q0 18 12 30t30 12 30-12 12-30v-308q-18 8-42 8-44 0-75-31t-31-75q0-72 68-100l-90-90 46-44z"></path>
              </svg>
              <span className="dex-wide-text15">{props.text13}</span>
              <span className="dex-wide-text16">{props.text14}</span>
            </div>
          </div>
          <svg viewBox="0 0 877.7142857142857 1024" className="dex-wide-icon7">
            <path d="M431.429 603.429c0 4.571-2.286 9.714-5.714 13.143l-189.714 189.714 82.286 82.286c6.857 6.857 10.857 16 10.857 25.714 0 20-16.571 36.571-36.571 36.571h-256c-20 0-36.571-16.571-36.571-36.571v-256c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l82.286 82.286 189.714-189.714c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l65.143 65.143c3.429 3.429 5.714 8.571 5.714 13.143zM877.714 109.714v256c0 20-16.571 36.571-36.571 36.571-9.714 0-18.857-4-25.714-10.857l-82.286-82.286-189.714 189.714c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-65.143-65.143c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l189.714-189.714-82.286-82.286c-6.857-6.857-10.857-16-10.857-25.714 0-20 16.571-36.571 36.571-36.571h256c20 0 36.571 16.571 36.571 36.571z"></path>
          </svg>
        </div>
      </div>
      <style jsx>
        {`
          .dex-wide-container {
            color: var(--dl-color-gray-900);
            width: 100%;
            height: 605px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fourunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .dex-wide-container01 {
            width: 1037px;
            height: 593px;
            display: flex;
            align-items: center;
            border-color: rgba(6, 6, 6, 0.2);
            border-style: dashed;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(6, 6, 6, 0.26);
          }
          .dex-wide-container02 {
            width: 505px;
            height: 665px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            position: relative;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .dex-wide-container03 {
            width: auto;
            height: 53px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .dex-wide-container04 {
            flex: 0 0 auto;
            width: 150px;
            cursor: pointer;
            height: 100%;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            transition: 0.3s;
            align-items: center;
            justify-content: center;
          }
          .dex-wide-container04:hover {
            background: rgba(240, 248, 255, 0.21);
            border-radius: var(--dl-radius-radius-radius8);
          }

          .dex-wide-text {
            font-family: 'Arial Black';
          }
          .dex-wide-container05 {
            flex: 0 0 auto;
            width: 150px;
            cursor: pointer;
            height: 100%;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            transition: 0.3s;
            align-items: center;
            justify-content: center;
          }
          .dex-wide-container05:hover {
            background: rgba(240, 248, 255, 0.21);
            border-radius: var(--dl-radius-radius-radius8);
          }

          .dex-wide-text01 {
            font-family: 'Arial Black';
          }
          .dex-wide-container06 {
            flex: 0 0 auto;
            width: 150px;
            cursor: pointer;
            height: 100%;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            transition: 0.3s;
            align-items: center;
            justify-content: center;
          }
          .dex-wide-container06:hover {
            background: rgba(240, 248, 255, 0.21);
            border-radius: var(--dl-radius-radius-radius8);
          }

          .dex-wide-text02 {
            font-family: 'Arial Black';
          }
          .dex-wide-container07 {
            width: 100%;
            height: 285px;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .dex-wide-text03 {
            top: 24px;
            color: rgb(88, 88, 88);
            right: 62px;
            position: absolute;
          }
          .dex-wide-textinput {
            color: var(--dl-color-gray-900);
            width: 100%;
            height: 107px;
            margin: 3px;
            padding: var(--dl-space-space-fourunits);
            font-size: 30px;
            text-align: right;
            font-family: 'Courier New';
            border-color: #484848;
            border-width: 0px;
            border-radius: 16px;
            backdop-filter: blur(50px);
            background-color: rgba(14, 14, 14, 0.72);
          }
          .dex-wide-container08 {
            top: 62px;
            left: 28px;
            width: 110px;
            height: 33px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: center;
            background-color: rgba(41, 41, 41, 0.7);
          }
          .dex-wide-image {
            width: 17px;
            height: 19px;
            align-self: center;
            object-fit: cover;
          }
          .dex-wide-text04 {
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
          }
          .dex-wide-container09 {
            top: 116px;
            left: 218px;
            width: 50px;
            cursor: pointer;
            height: 50px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            z-index: 1;
            position: absolute;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(41, 41, 41, 0.35);
            border-width: 6px;
            border-radius: var(--dl-radius-radius-round);
            backdrop-filter: blur(50px);
            justify-content: center;
            background-color: rgba(22, 22, 22, 0.72);
          }
          .dex-wide-container09:hover {
            animation-name: rotateIn;
            animation-delay: 1s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .dex-wide-icon {
            fill: #d9d9d9;
            width: auto;
            height: 33px;
          }
          .dex-wide-text05 {
            top: 108px;
            color: rgb(92, 92, 92);
            right: 65px;
            position: absolute;
            font-size: 12px;
          }
          .dex-wide-text08 {
            top: 159px;
            color: rgb(88, 88, 88);
            right: 58px;
            position: absolute;
          }
          .dex-wide-textinput1 {
            color: var(--dl-color-gray-700);
            width: 100%;
            height: var(--dl-size-size-medium);
            margin: 3px;
            padding: var(--dl-space-space-fourunits);
            font-size: 30px;
            text-align: right;
            font-family: 'Courier New';
            border-color: #484848;
            border-width: 0px;
            border-radius: 16px;
            backdop-filter: blur(50px);
            background-color: rgba(12, 12, 12, 0.7);
          }
          .dex-wide-text09 {
            left: 35px;
            color: rgb(92, 92, 92);
            bottom: 31px;
            position: absolute;
            font-size: 12px;
          }
          .dex-wide-container10 {
            top: 192px;
            left: 34px;
            width: 110px;
            height: 33px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: center;
            background-color: rgba(39, 39, 39, 0.73);
          }
          .dex-wide-text10 {
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
          }
          .dex-wide-icon3 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            align-self: center;
          }
          .dex-wide-text11 {
            left: 366px;
            color: rgb(92, 92, 92);
            bottom: 32px;
            position: absolute;
            font-size: 12px;
          }
          .dex-wide-container11 {
            width: 100%;
            cursor: pointer;
            height: 62px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            transition: 0.3s;
            align-items: center;
            border-color: #404040;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: rgba(30, 30, 30, 0.75);
          }
          .dex-wide-container11:hover {
            background: rgba(35, 41, 41, 0.7);
          }
          .dex-wide-text12 {
            color: #7f7f7f;
            font-size: 20px;
            text-align: center;
            font-family: 'Arial';
            font-weight: 900;
            letter-spacing: 2px;
          }
          .dex-wide-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: 34px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .dex-wide-text13 {
            font-size: 13px;
            align-self: center;
            font-family: 'Courier New';
          }
          .dex-wide-text14 {
            color: #e6e6e6;
            font-size: 13px;
            align-self: center;
            font-family: 'Courier New';
          }
          .dex-wide-container13 {
            flex: 0 0 auto;
            width: auto;
            height: 100%;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            margin-right: 0px;
            justify-content: flex-end;
          }
          .dex-wide-icon5 {
            fill: #5e5e5e;
            width: 24px;
            height: 24px;
          }
          .dex-wide-text15 {
            padding: var(--dl-space-space-halfunit);
            font-size: 13px;
            font-family: 'Courier New';
          }
          .dex-wide-text16 {
            padding: var(--dl-space-space-halfunit);
            font-size: 13px;
            font-family: 'Courier New';
          }
          .dex-wide-icon7 {
            top: 10px;
            fill: #d9d9d9;
            right: 12px;
            width: 24px;
            cursor: pointer;
            height: 24px;
            position: absolute;
          }
          @media (max-width: 1200px) {
            .dex-wide-textinput {
              width: 100%;
            }
            .dex-wide-textinput1 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .dex-wide-container01 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .dex-wide-container02 {
              width: 100%;
              padding: var(--dl-space-space-unit);
            }
            .dex-wide-container03 {
              width: 100%;
            }
            .dex-wide-container04 {
              width: auto;
              padding: var(--dl-space-space-unit);
            }
            .dex-wide-container05 {
              width: auto;
              padding: var(--dl-space-space-unit);
            }
            .dex-wide-container06 {
              width: auto;
              padding: var(--dl-space-space-unit);
            }
            .dex-wide-text03 {
              top: var(--dl-space-space-twounits);
              right: var(--dl-space-space-twounits);
              margin: auto;
              font-size: 16px;
            }
            .dex-wide-textinput {
              width: 100%;
            }
            .dex-wide-container08 {
              top: 66px;
              left: var(--dl-space-space-unit);
              margin: auto;
              position: absolute;
            }
            .dex-wide-container09 {
              top: 116px;
              left: 0px;
              right: 0px;
              margin: auto;
              position: absolute;
            }
            .dex-wide-text05 {
              top: 113px;
              left: var(--dl-space-space-twounits);
            }
            .dex-wide-text08 {
              top: 150px;
              color: rgb(88, 88, 88);
              right: var(--dl-space-space-twounits);
              bottom: 0its;
              font-size: 16px;
            }
            .dex-wide-textinput1 {
              width: 100%;
            }
            .dex-wide-text09 {
              left: 32px;
              bottom: 34px;
            }
            .dex-wide-container10 {
              left: var(--dl-space-space-unit);
              margin: auto;
            }
            .dex-wide-text11 {
              width: auto;
              text-align: left;
            }
            .dex-wide-container11 {
              width: 100%;
            }
            .dex-wide-text13 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .dex-wide-icon7 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

DexWide.defaultProps = {
  text4: 'CONNECT WALLET',
  text83: 'Bridge',
  rootClassName: '',
  text14: '$0.0 ',
  text6: '0.00 USDT',
  text12: 'SELECT',
  text831: 'Buy',
  text3: 'Balance: 0 $',
  text5: '1 CORE = ',
  text8: 'Swap',
  text13: 'GAS',
  text: 'You pay.',
  textinputPlaceholder1: 'O.O',
  textinputPlaceholder: 'O.O',
  imageAlt: 'image',
  text11: 'CORE',
  text1: 'You receive.',
  imageSrc: '/core-200w.webp',
  text2: '$0',
}

DexWide.propTypes = {
  text4: PropTypes.string,
  text83: PropTypes.string,
  rootClassName: PropTypes.string,
  text14: PropTypes.string,
  text6: PropTypes.string,
  text12: PropTypes.string,
  text831: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  text8: PropTypes.string,
  text13: PropTypes.string,
  text: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  imageAlt: PropTypes.string,
  text11: PropTypes.string,
  text1: PropTypes.string,
  imageSrc: PropTypes.string,
  text2: PropTypes.string,
}

export default DexWide
