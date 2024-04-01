import React from 'react'

import PropTypes from 'prop-types'

const Intro = (props) => {
  return (
    <>
      <div className={`intro-container ${props.rootClassName} `}>
        <div className="intro-container01">
          <span className="intro-text">{props.text}</span>
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="intro-image"
          />
          <span className="intro-text01">{props.text424}</span>
        </div>
        <div className="intro-container02">
          <span className="intro-text02">{props.text41}</span>
          <img
            alt={props.imageAlt14}
            src={props.imageSrc14}
            className="intro-image01"
          />
          <span className="intro-text03">{props.text9}</span>
        </div>
        <div className="intro-container03">
          <span className="intro-text04">{props.text3}</span>
          <img
            alt={props.imageAlt13}
            src={props.imageSrc13}
            className="intro-image02"
          />
          <span className="intro-text05">{props.text421}</span>
        </div>
        <div className="intro-container04">
          <span className="intro-text06">{props.text2}</span>
          <img
            alt={props.imageAlt12}
            src={props.imageSrc12}
            className="intro-image03"
          />
          <span className="intro-text07">{props.text42}</span>
        </div>
        <div className="intro-container05">
          <span className="intro-text08">{props.text21}</span>
          <img
            alt={props.imageAlt121}
            src={props.imageSrc121}
            className="intro-image04"
          />
          <span className="intro-text09">{props.text428}</span>
        </div>
        <div className="intro-container06">
          <span className="intro-text10">{props.text1}</span>
          <img
            alt={props.imageAlt11}
            src={props.imageSrc11}
            className="intro-image05"
          />
          <span className="intro-text11">{props.text422}</span>
        </div>
        <div className="intro-container07">
          <span className="intro-text12">{props.text6}</span>
          <img
            alt={props.imageAlt16}
            src={props.imageSrc16}
            className="intro-image06"
          />
          <span className="intro-text13">{props.text423}</span>
        </div>
        <div className="intro-container08">
          <span className="intro-text14">{props.text7}</span>
          <img
            alt={props.imageAlt17}
            src={props.imageSrc17}
            className="intro-image07"
          />
          <span className="intro-text15">{props.text427}</span>
        </div>
        <div className="intro-container09">
          <span className="intro-text16">{props.text8}</span>
          <img
            alt={props.imageAlt18}
            src={props.imageSrc18}
            className="intro-image08"
          />
          <span className="intro-text17">{props.text426}</span>
        </div>
        <div className="intro-container10">
          <span className="intro-text18">{props.text5}</span>
          <img
            alt={props.imageAlt15}
            src={props.imageSrc15}
            className="intro-image09"
          />
          <span className="intro-text19">{props.text425}</span>
        </div>
      </div>
      <style jsx>
        {`
          .intro-container {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            overflow: hidden;
            position: fixed;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            z-index: 100;
            background-image: linear-gradient(
                0deg,
                rgb(32, 32, 32) 0%,
                rgba(0, 0, 0, 0.51) 100%
              ),
              url('/nnnoise.svg');
          }
          .intro-container01 {
            top: 554px;
            flex: 0 0 auto;
            left: 950px;
            width: 160px;
            filter: blur(10px);
            height: 160px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            animation-name: heartBeat;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            animation-duration: 10s;
            animation-direction: normal;
            animation-iteration-count: 100;
            animation-timing-function: ease;
          }
          .intro-container01:hover {
            cursor: pointer;
            filter: blur();
            backdrop-filter: blur(10px);
          }
          .intro-text {
            color: #ffffff;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-image {
            width: auto;
            height: var(--dl-size-size-medium);
            object-fit: cover;
            animation-name: swing;
            animation-delay: 0s;
            animation-duration: 3000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .intro-text01 {
            color: #0092d6;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-container02 {
            top: 122px;
            flex: 0 0 auto;
            left: 50px;
            width: 160px;
            filter: blur(10px);
            height: 160px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            animation-name: heartBeat;
            flex-direction: column;
            animation-delay: 10s;
            justify-content: center;
            animation-duration: 10s;
            animation-direction: normal;
            animation-iteration-count: 100;
            animation-timing-function: ease;
          }
          .intro-container02:hover {
            cursor: pointer;
          }
          .intro-text02 {
            color: #ffffff;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-image01 {
            width: auto;
            height: var(--dl-size-size-medium);
            object-fit: cover;
            animation-name: swing;
            animation-delay: 0s;
            animation-duration: 3000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .intro-text03 {
            color: #0092d6;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-container03 {
            flex: 0 0 auto;
            left: 485px;
            width: 160px;
            bottom: 94px;
            filter: blur(10px);
            height: 160px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            animation-name: heartBeat;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            animation-duration: 10s;
            animation-direction: normal;
            animation-iteration-count: 100;
            animation-timing-function: ease;
          }
          .intro-container03:hover {
            cursor: pointer;
            filter: blur();
          }
          .intro-text04 {
            color: #ffffff;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-image02 {
            width: auto;
            height: var(--dl-size-size-medium);
            object-fit: cover;
            animation-name: swing;
            animation-delay: 0s;
            animation-duration: 3000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .intro-text05 {
            color: #0092d6;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-container04 {
            top: 434px;
            flex: 0 0 auto;
            left: 242px;
            width: 160px;
            filter: blur(10px);
            height: 160px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            animation-name: heartBeat;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            animation-duration: 10s;
            animation-direction: normal;
            animation-iteration-count: 100;
            animation-timing-function: ease;
          }
          .intro-container04:hover {
            cursor: pointer;
            filter: blur();
          }
          .intro-text06 {
            color: #ffffff;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-image03 {
            width: auto;
            height: var(--dl-size-size-medium);
            object-fit: cover;
            animation-name: swing;
            animation-delay: 0s;
            animation-duration: 3000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .intro-text07 {
            color: #0092d6;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-container05 {
            flex: 0 0 auto;
            left: 60px;
            width: 160px;
            bottom: 66px;
            filter: blur(10px);
            height: 160px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            animation-name: heartBeat;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            animation-duration: 10s;
            animation-direction: normal;
            animation-iteration-count: 100;
            animation-timing-function: ease;
          }
          .intro-container05:hover {
            cursor: pointer;
            filter: blur();
          }
          .intro-text08 {
            color: #ffffff;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-image04 {
            width: auto;
            height: var(--dl-size-size-medium);
            object-fit: cover;
            animation-name: swing;
            animation-delay: 0s;
            animation-duration: 3000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .intro-text09 {
            color: #0092d6;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-container06 {
            flex: 0 0 auto;
            left: 1151px;
            width: 160px;
            bottom: 13px;
            filter: blur(10px);
            height: 160px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            animation-name: heartBeat;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            animation-duration: 10s;
            animation-direction: normal;
            animation-iteration-count: 100;
            animation-timing-function: ease;
          }
          .intro-container06:hover {
            cursor: pointer;
            filter: blur();
          }
          .intro-text10 {
            color: #ffffff;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-image05 {
            width: auto;
            height: var(--dl-size-size-medium);
            object-fit: cover;
            animation-name: swing;
            animation-delay: 0s;
            animation-duration: 3000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .intro-text11 {
            color: #0092d6;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-container07 {
            top: 556px;
            flex: 0 0 auto;
            right: 23px;
            width: 160px;
            filter: blur(10px);
            height: 160px;
            display: flex;
            z-index: 100;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            animation-name: heartBeat;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            animation-duration: 10s;
            animation-direction: normal;
            animation-iteration-count: 100;
            animation-timing-function: ease;
          }
          .intro-container07:hover {
            cursor: pointer;
            filter: blur();
            backdrop-filter: blur(10px);
          }
          .intro-text12 {
            color: #ffffff;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-image06 {
            width: auto;
            height: var(--dl-size-size-medium);
            object-fit: cover;
            animation-name: swing;
            animation-delay: 0s;
            animation-duration: 3000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .intro-text13 {
            color: #0092d6;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-container08 {
            top: 263px;
            flex: 0 0 auto;
            left: 401px;
            width: 160px;
            filter: blur(10px);
            height: 160px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            animation-name: heartBeat;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            animation-duration: 10s;
            animation-direction: normal;
            animation-iteration-count: 100;
            animation-timing-function: ease;
          }
          .intro-container08:hover {
            cursor: pointer;
            filter: blur();
            backdrop-filter: blur(10px);
          }
          .intro-text14 {
            color: #ffffff;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-image07 {
            width: auto;
            height: var(--dl-size-size-medium);
            object-fit: cover;
            animation-name: swing;
            animation-delay: 0s;
            animation-duration: 3000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .intro-text15 {
            color: #0092d6;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-container09 {
            top: 130px;
            flex: 0 0 auto;
            left: 930px;
            width: 160px;
            filter: blur(10px);
            height: 160px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            animation-name: heartBeat;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            animation-duration: 10s;
            animation-direction: normal;
            animation-iteration-count: 100;
            animation-timing-function: ease;
          }
          .intro-container09:hover {
            cursor: pointer;
            filter: blur();
          }
          .intro-text16 {
            color: #ffffff;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-image08 {
            width: auto;
            height: var(--dl-size-size-medium);
            object-fit: cover;
            animation-name: swing;
            animation-delay: 0s;
            animation-duration: 3000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .intro-text17 {
            color: #0092d6;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-container10 {
            top: 236px;
            flex: 0 0 auto;
            right: 209px;
            width: 160px;
            filter: blur(10px);
            height: 160px;
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            animation-name: heartBeat;
            flex-direction: column;
            animation-delay: 1s;
            justify-content: center;
            animation-duration: 10s;
            animation-direction: normal;
            animation-iteration-count: 100;
            animation-timing-function: ease;
          }
          .intro-container10:hover {
            cursor: pointer;
            filter: blur();
          }
          .intro-text18 {
            color: #ffffff;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-image09 {
            width: auto;
            height: var(--dl-size-size-medium);
            object-fit: cover;
            animation-name: swing;
            animation-delay: 0s;
            animation-duration: 3000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .intro-text19 {
            color: #0092d6;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-root-class-name {
            left: 0px;
            right: 0px;
            bottom: 0px;
            margin: auto;
            position: absolute;
          }
          .intro-root-class-name1 {
            top: 0px;
            left: 0px;
            position: absolute;
            min-height: 100vh;
          }

          @media (max-width: 479px) {
            .intro-container01 {
              left: -17px;
              bottom: 248px;
            }
            .intro-container08 {
              top: -67px;
              left: -32px;
            }
            .intro-container10 {
              top: 378px;
              left: -58px;
            }
            .intro-root-class-name {
              min-height: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Intro.defaultProps = {
  imageAlt11: 'image',
  imageSrc14: '/bitcoin-btc-logo-200h.webp',
  imageAlt1: 'image',
  text422: '$0.0',
  text427: '$0.0',
  imageAlt121: 'image',
  text6: '$0.0',
  text421: '$0.0',
  imageSrc18: '/solana-sol-logo-200h.webp',
  imageAlt13: 'image',
  imageSrc15: '/core-200w.webp',
  imageAlt18: 'image',
  imageAlt14: 'image',
  text9: '$0.0',
  text426: '$0.0',
  text424: '$0.0',
  text8: '$0.0',
  imageAlt12: 'image',
  text41: 'BTC',
  text42: '$0.0',
  imageSrc11: '/chainlink-link-logo-200h.webp',
  text423: '$0.0',
  imageAlt16: 'image',
  text21: '$0.0',
  text5: '$0.0',
  imageSrc17: '/polygon-matic-logo-200h.webp',
  imageSrc121: '/shiba-inu-shib-logo-200h.webp',
  text3: '$0.0',
  imageAlt17: 'image',
  text1: '$0.0',
  imageSrc12: '/ethereum-eth-logo-200h.webp',
  text425: '$0.0',
  text7: '$0.0',
  imageSrc13: '/dogecoin-doge-logo-200h.webp',
  text428: '$0.0',
  imageSrc16: '/h8ei27bq_400x400-removebg-preview-200w.webp',
  text2: '$0.0',
  imageSrc1: '/avalanche-avax-logo-200w.webp',
  imageAlt15: 'image',
  rootClassName: '',
  text: '$0.0',
}

Intro.propTypes = {
  imageAlt11: PropTypes.string,
  imageSrc14: PropTypes.string,
  imageAlt1: PropTypes.string,
  text422: PropTypes.string,
  text427: PropTypes.string,
  imageAlt121: PropTypes.string,
  text6: PropTypes.string,
  text421: PropTypes.string,
  imageSrc18: PropTypes.string,
  imageAlt13: PropTypes.string,
  imageSrc15: PropTypes.string,
  imageAlt18: PropTypes.string,
  imageAlt14: PropTypes.string,
  text9: PropTypes.string,
  text426: PropTypes.string,
  text424: PropTypes.string,
  text8: PropTypes.string,
  imageAlt12: PropTypes.string,
  text41: PropTypes.string,
  text42: PropTypes.string,
  imageSrc11: PropTypes.string,
  text423: PropTypes.string,
  imageAlt16: PropTypes.string,
  text21: PropTypes.string,
  text5: PropTypes.string,
  imageSrc17: PropTypes.string,
  imageSrc121: PropTypes.string,
  text3: PropTypes.string,
  imageAlt17: PropTypes.string,
  text1: PropTypes.string,
  imageSrc12: PropTypes.string,
  text425: PropTypes.string,
  text7: PropTypes.string,
  imageSrc13: PropTypes.string,
  text428: PropTypes.string,
  imageSrc16: PropTypes.string,
  text2: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt15: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Intro
