import React from 'react'

import PropTypes from 'prop-types'

const Intro = (props) => {
  return (
    <>
      <div className={`intro-container ${props.rootClassName} `}>
        <div id="2" className="intro-container01">
          <span className="intro-text">{props.text6}</span>
          <img
            alt={props.imageAlt16}
            src={props.imageSrc16}
            className="intro-image"
          />
          <span className="intro-text01">{props.text423}</span>
        </div>
        <div id="6" className="intro-container02">
          <span className="intro-text02">{props.text8}</span>
          <img
            alt={props.imageAlt18}
            src={props.imageSrc18}
            className="intro-image01"
          />
          <span className="intro-text03">{props.text426}</span>
        </div>
        <div id="10" className="intro-container03">
          <span className="intro-text04">{props.text87}</span>
          <img
            alt={props.imageAlt187}
            src={props.imageSrc187}
            className="intro-image02"
          />
          <span className="intro-text05">{props.text4267}</span>
        </div>
        <div id="9" className="intro-container04">
          <span className="intro-text06">{props.text86}</span>
          <img
            alt={props.imageAlt186}
            src={props.imageSrc186}
            className="intro-image03"
          />
          <span className="intro-text07">{props.text4266}</span>
        </div>
        <div id="8" className="intro-container05">
          <span className="intro-text08">{props.text85}</span>
          <img
            alt={props.imageAlt185}
            src={props.imageSrc185}
            className="intro-image04"
          />
          <span className="intro-text09">{props.text4265}</span>
        </div>
        <div id="4" className="intro-container06">
          <span className="intro-text10">{props.text84}</span>
          <img
            alt={props.imageAlt184}
            src={props.imageSrc184}
            className="intro-image05"
          />
          <span className="intro-text11">{props.text4264}</span>
        </div>
        <div id="1" className="intro-container07">
          <span className="intro-text12">{props.text83}</span>
          <img
            alt={props.imageAlt183}
            src={props.imageSrc183}
            className="intro-image06"
          />
          <span className="intro-text13">{props.text4263}</span>
        </div>
        <div id="5" className="intro-container08">
          <span className="intro-text14">{props.text81}</span>
          <img
            alt={props.imageAlt181}
            src={props.imageSrc181}
            className="intro-image07"
          />
          <span className="intro-text15">{props.text4261}</span>
        </div>
        <div id="7" className="intro-container09">
          <span className="intro-text16">{props.text811}</span>
          <img
            alt={props.imageAlt1811}
            src={props.imageSrc1811}
            className="intro-image08"
          />
          <span className="intro-text17">{props.text42611}</span>
        </div>
        <div id="3" className="intro-container10">
          <span className="intro-text18">{props.text8111}</span>
          <img
            alt={props.imageAlt18111}
            src={props.imageSrc18111}
            className="intro-image09"
          />
          <span className="intro-text19">{props.text426111}</span>
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
            justify-content: flex-start;
            background-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.68) 0%,
                rgba(23, 23, 23, 0.69) 98%
              ),
              url('/nnnoise.svg');
          }
          .intro-container01 {
            top: 110px;
            flex: 0 0 auto;
            left: 522px;
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
            top: 530px;
            flex: 0 0 auto;
            left: 962px;
            width: var(--dl-size-size-large);
            filter: blur(10px);
            height: var(--dl-size-size-large);
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            animation-name: bounce;
            flex-direction: column;
            animation-delay: 3s;
            justify-content: center;
            animation-duration: 10s;
            animation-direction: normal;
            animation-iteration-count: 100;
            animation-timing-function: ease;
          }
          .intro-container02:hover {
            cursor: pointer;
            filter: blur();
          }
          .intro-text02 {
            color: #ffffff;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-image01 {
            width: auto;
            height: 86px;
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
            right: 234px;
            width: var(--dl-size-size-large);
            bottom: 23px;
            filter: blur(10px);
            height: var(--dl-size-size-large);
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            animation-name: bounce;
            flex-direction: column;
            animation-delay: 4s;
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
            height: 86px;
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
            flex: 0 0 auto;
            left: 589px;
            width: var(--dl-size-size-large);
            bottom: 139px;
            filter: blur(10px);
            height: var(--dl-size-size-large);
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            animation-name: bounce;
            flex-direction: column;
            animation-delay: 2s;
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
            height: 86px;
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
            left: 97px;
            width: var(--dl-size-size-large);
            bottom: 63px;
            filter: blur(10px);
            height: var(--dl-size-size-large);
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            animation-name: bounce;
            flex-direction: column;
            animation-delay: 1s;
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
            height: 86px;
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
            top: 47px;
            flex: 0 0 auto;
            right: 66px;
            width: var(--dl-size-size-large);
            filter: blur(10px);
            height: var(--dl-size-size-large);
            display: flex;
            position: absolute;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            animation-name: bounce;
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
            height: 86px;
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
            top: 102px;
            flex: 0 0 auto;
            left: 126px;
            width: var(--dl-size-size-large);
            filter: blur(10px);
            height: var(--dl-size-size-large);
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
          .intro-container07:hover {
            cursor: pointer;
            filter: blur();
          }
          .intro-text12 {
            color: #ffffff;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-image06 {
            width: auto;
            height: 86px;
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
            top: 399px;
            flex: 0 0 auto;
            left: 332px;
            width: var(--dl-size-size-large);
            filter: blur(10px);
            height: var(--dl-size-size-large);
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
          }
          .intro-text14 {
            color: #ffffff;
            align-self: flex-end;
            text-shadow: 1px 1px 20px;
          }
          .intro-image07 {
            width: auto;
            height: 86px;
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
            top: 371px;
            flex: 0 0 auto;
            right: 139px;
            width: var(--dl-size-size-large);
            filter: blur(10px);
            height: var(--dl-size-size-large);
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
            height: 86px;
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
            top: 134px;
            flex: 0 0 auto;
            left: 942px;
            width: var(--dl-size-size-large);
            filter: blur(10px);
            height: var(--dl-size-size-large);
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
            height: 86px;
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
  imageSrc14: '35eeb40e-d21a-4c1e-bf3a-ef7e42615b9b',
  imageAlt1: 'image',
  text422: '$0.0',
  text427: '$0.0',
  imageAlt121: 'image',
  text6: '$0.0',
  text421: '$0.0',
  imageSrc18: '/avalanche-avax-logo-200w.webp',
  imageAlt13: 'image',
  imageSrc15: '74351a57-24c4-4d70-8dbc-858d0bb4aab5',
  imageAlt18: 'image',
  imageAlt14: 'image',
  text9: '$0.0',
  text426: '$0.0',
  text424: '$0.0',
  text8: '$0.0',
  imageAlt12: 'image',
  text41: 'BTC',
  text42: '$0.0',
  imageSrc11: '26b5fdd7-640b-4f06-8b0d-d6ad5d42ef44',
  text423: '$0.0',
  imageAlt16: 'image',
  text21: '$0.0',
  text5: '$0.0',
  imageSrc17: '35eeb40e-d21a-4c1e-bf3a-ef7e42615b9b',
  imageSrc121: 'e80ca783-c569-4dbe-bc31-6cea5af8cbee',
  text3: '$0.0',
  imageAlt17: 'image',
  text1: '$0.0',
  imageSrc12: 'adc0878a-e15f-4918-ba34-850b38848978',
  text425: '$0.0',
  text7: '$0.0',
  imageSrc13: '563bb7ba-1256-4e1b-af43-7358a72fad74',
  text428: '$0.0',
  imageSrc16: '/h8ei27bq_400x400-removebg-preview-200w.webp',
  text2: '$0.0',
  imageSrc1: '0f9c98a1-6d0e-4ebe-8e4e-becd6a5a60cf',
  imageAlt15: 'image',
  rootClassName: '',
  text: '$0.0',
  text71: '$0.0',
  imageSrc171: '5180364f-d883-4e15-a2d8-cf57abe5515e',
  imageAlt171: 'image',
  text4271: '$0.0',
  text81: '$0.0',
  imageSrc181: '/polygon-matic-logo-200h.webp',
  imageAlt181: 'image',
  text4261: '$0.0',
  text82: '$0.0',
  imageSrc182: '35eeb40e-d21a-4c1e-bf3a-ef7e42615b9b',
  imageAlt182: 'image',
  text4262: '$0.0',
  text811: '$0.0',
  imageSrc1811: '/core-200w.webp',
  imageAlt1811: 'image',
  text42611: '$0.0',
  text83: '$0.0',
  imageSrc183: '/bitcoin-btc-logo-200h.webp',
  imageAlt183: 'image',
  text4263: '$0.0',
  text84: '$0.0',
  imageSrc184: '/tron-trx-logo-200h.webp',
  imageAlt184: 'image',
  text4264: '$0.0',
  text85: '$0.0',
  imageSrc185: '/shiba-inu-shib-logo-200h.webp',
  imageAlt185: 'image',
  text4265: '$0.0',
  text86: '$0.0',
  imageSrc186: '/dogecoin-doge-logo-200h.webp',
  imageAlt186: 'image',
  text4266: '$0.0',
  text87: '$0.0',
  imageSrc187: '/bnb-bnb-logo-200h.webp',
  imageAlt187: 'image',
  text4267: '$0.0',
  text8111: '$0.0',
  imageSrc18111: '/solana-sol-logo-200h.webp',
  imageAlt18111: 'image',
  text426111: '$0.0',
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
  text71: PropTypes.string,
  imageSrc171: PropTypes.string,
  imageAlt171: PropTypes.string,
  text4271: PropTypes.string,
  text81: PropTypes.string,
  imageSrc181: PropTypes.string,
  imageAlt181: PropTypes.string,
  text4261: PropTypes.string,
  text82: PropTypes.string,
  imageSrc182: PropTypes.string,
  imageAlt182: PropTypes.string,
  text4262: PropTypes.string,
  text811: PropTypes.string,
  imageSrc1811: PropTypes.string,
  imageAlt1811: PropTypes.string,
  text42611: PropTypes.string,
  text83: PropTypes.string,
  imageSrc183: PropTypes.string,
  imageAlt183: PropTypes.string,
  text4263: PropTypes.string,
  text84: PropTypes.string,
  imageSrc184: PropTypes.string,
  imageAlt184: PropTypes.string,
  text4264: PropTypes.string,
  text85: PropTypes.string,
  imageSrc185: PropTypes.string,
  imageAlt185: PropTypes.string,
  text4265: PropTypes.string,
  text86: PropTypes.string,
  imageSrc186: PropTypes.string,
  imageAlt186: PropTypes.string,
  text4266: PropTypes.string,
  text87: PropTypes.string,
  imageSrc187: PropTypes.string,
  imageAlt187: PropTypes.string,
  text4267: PropTypes.string,
  text8111: PropTypes.string,
  imageSrc18111: PropTypes.string,
  imageAlt18111: PropTypes.string,
  text426111: PropTypes.string,
}

export default Intro
