import React from 'react'

import PropTypes from 'prop-types'

const Hero = (props) => {
  return (
    <>
      <div className={`hero-container ${props.rootClassName} `}>
        <div className="hero-container01">
          <animate-on-reveal
            animation="wobble"
            duration="3s"
            delay="2s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <h1 data-thq-animate-on-reveal="true" className="hero-text">
              {props.heading}
            </h1>
          </animate-on-reveal>
          <h1 className="hero-text1">
            <span>RareBay utility NFT is a membership ticket for users.</span>
            <br></br>
          </h1>
          <h1 className="hero-text4">
            <span>
              NFT owners are eligible for KYC verification. Verified members can
              list tokens, mine RareCoin and ready sell on Dex.
            </span>
            <br></br>
          </h1>
          <div className="hero-container02">
            <span className="hero-text7">{props.text1}</span>
            <animate-on-reveal
              animation="shakeX"
              duration="1000ms"
              delay="1s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <svg
                viewBox="0 0 1024 1024"
                data-thq-animate-on-reveal="true"
                className="hero-icon"
              >
                <path d="M725.333 341.333c0 171.136 40.405 278.187 78.976 341.333h-584.619c38.571-63.147 78.976-170.197 78.976-341.333 0-58.923 23.851-112.213 62.464-150.869s91.947-62.464 150.869-62.464 112.213 23.851 150.869 62.464 62.464 91.947 62.464 150.869zM810.667 341.333c0-82.475-33.493-157.184-87.467-211.2s-128.725-87.467-211.2-87.467-157.184 33.493-211.2 87.467-87.467 128.725-87.467 211.2c0 261.419-102.101 343.339-109.355 348.757-19.328 13.141-24.448 39.424-11.477 58.923 8.192 12.245 21.589 18.901 35.499 18.987h768c23.552 0 42.667-19.115 42.667-42.667 0-14.464-7.168-27.221-18.304-35.029-7.509-5.547-109.696-87.467-109.696-348.971zM548.907 874.581c-5.931 10.197-15.317 17.024-25.941 19.84s-22.187 1.579-32.384-4.309c-6.912-4.011-12.075-9.472-15.317-15.232-11.691-20.48-37.717-27.605-58.197-15.915s-27.605 37.717-15.915 58.197c10.667 18.731 26.581 35.115 46.635 46.763 30.549 17.749 65.493 21.376 97.109 12.971s60.117-28.928 77.824-59.477c11.819-20.395 4.864-46.507-15.488-58.325s-46.507-4.864-58.325 15.488z"></path>
              </svg>
            </animate-on-reveal>
          </div>
        </div>
        <div className="hero-container03">
          <div
            data-thq="slider"
            data-loop="true"
            data-autoplay="true"
            data-navigation="false"
            data-pagination="false"
            data-autoplay-delay="1500"
            className="hero-slider swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="hero-slider-slide swiper-slide"
              >
                <div className="hero-container04">
                  <img
                    alt={props.imageAlt}
                    src={props.imageSrc}
                    className="hero-image"
                  />
                  <img
                    alt={props.imageAlt1}
                    src={props.imageSrc1}
                    className="hero-image01"
                  />
                </div>
                <div className="hero-container05">
                  <img
                    alt={props.imageAlt2}
                    src={props.imageSrc2}
                    className="hero-image02"
                  />
                  <img
                    alt={props.imageAlt3}
                    src={props.imageSrc3}
                    className="hero-image03"
                  />
                </div>
                <div className="hero-container06">
                  <img
                    alt={props.imageAlt4}
                    src={props.imageSrc4}
                    className="hero-image04"
                  />
                  <img
                    alt={props.imageAlt5}
                    src={props.imageSrc5}
                    className="hero-image05"
                  />
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="hero-slider-slide1 swiper-slide"
              >
                <div className="hero-container07">
                  <img
                    alt={props.imageAlt6}
                    src={props.imageSrc6}
                    className="hero-image06"
                  />
                  <img
                    alt={props.imageAlt7}
                    src={props.imageSrc7}
                    className="hero-image07"
                  />
                </div>
                <div className="hero-container08">
                  <img
                    alt={props.imageAlt8}
                    src={props.imageSrc8}
                    className="hero-image08"
                  />
                  <img
                    alt={props.imageAlt9}
                    src={props.imageSrc9}
                    className="hero-image09"
                  />
                </div>
                <div className="hero-container09">
                  <img
                    alt={props.imageAlt10}
                    src={props.imageSrc10}
                    className="hero-image10"
                  />
                  <img
                    alt={props.imageAlt11}
                    src={props.imageSrc11}
                    className="hero-image11"
                  />
                </div>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="hero-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
            </div>
            <div
              data-thq="slider-button-prev"
              className="hero-slider-button-prev swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="hero-slider-button-next swiper-button-next"
            ></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-container {
            width: 100%;
            height: 487px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .hero-container01 {
            width: 667px;
            height: 336px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
          }
          .hero-text {
            color: #8c8c8c;
            width: 661px;
            height: 90px;
            font-size: 4em;
            align-self: center;
            text-align: left;
          }
          .hero-text1 {
            color: rgb(165, 165, 165);
            width: 661px;
            height: 90px;
            font-size: 2.5em;
            align-self: center;
            text-align: left;
          }
          .hero-text4 {
            color: rgb(208, 208, 208);
            width: 661px;
            height: 90px;
            font-size: 1.5em;
            align-self: center;
            font-style: italic;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-family: 'Noto Sans';
            font-weight: 100;
          }
          .hero-container02 {
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
            background-color: rgba(34, 34, 34, 0.5);
          }
          .hero-text7 {
            color: rgb(188, 188, 188);
            font-size: 30px;
            text-align: center;
            font-family: 'Arial Black';
            font-weight: 800;
            margin-right: var(--dl-space-space-twounits);
          }
          .hero-icon {
            fill: #d9d9d9;
            width: 33px;
            height: 38px;
            transition: 0.3s;
          }

          .hero-container03 {
            width: 590px;
            height: 336px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .hero-slider {
            width: 500px;
            height: 300px;
            display: inline-block;
          }
          .hero-slider-slide {
            width: 501px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .hero-container04 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .hero-image {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .hero-image01 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .hero-container05 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .hero-image02 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .hero-image03 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .hero-container06 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .hero-image04 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .hero-image05 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .hero-slider-slide1 {
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .hero-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .hero-image06 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .hero-image07 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .hero-container08 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .hero-image08 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .hero-image09 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .hero-container09 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .hero-image10 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .hero-image11 {
            width: auto;
            height: var(--dl-size-size-medium);
            margin: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .hero-slider-pagination {
            display: none;
          }
          .hero-slider-button-prev {
            color: #fbfbfb;
            display: none;
          }
          .hero-slider-button-next {
            color: #ffffff;
            display: none;
          }
          .hero-root-class-name {
            margin-top: var(--dl-space-space-twounits);
          }
          @media (max-width: 1200px) {
            .hero-container {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .hero-container01 {
              width: auto;
              padding-left: var(--dl-space-space-twounits);
            }
            .hero-container03 {
              width: auto;
            }
          }
          @media (max-width: 767px) {
            .hero-container {
              width: 100%;
              height: 739px;
              flex-direction: column;
            }
            .hero-container01 {
              height: 266px;
            }
            .hero-text {
              width: 100%;
              height: 100%;
            }
            .hero-text1 {
              width: 100%;
            }
            .hero-text4 {
              width: 100%;
            }
            .hero-container02 {
              align-self: center;
            }
            .hero-icon {
              animation-name: rubberBand;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
          }
          @media (max-width: 479px) {
            .hero-container {
              width: 100%;
              height: 768px;
              flex-direction: column;
            }
            .hero-container01 {
              width: 100%;
              height: 338px;
              padding-left: var(--dl-space-space-unit);
            }
            .hero-text {
              width: 100%;
              height: 89px;
              font-size: 2.5em;
              font-family: Arial Black;
            }
            .hero-text1 {
              width: 100%;
              height: 129px;
            }
            .hero-text4 {
              width: 100%;
              height: 51px;
            }
            .hero-container02 {
              width: 100%;
            }
            .hero-text7 {
              font-size: 25px;
            }
            .hero-container03 {
              width: 100%;
              height: 232px;
            }
            .hero-slider {
              width: 100%;
            }
            .hero-slider-slide {
              width: 100%;
              align-items: center;
            }
            .hero-container04 {
              width: 62px;
            }
            .hero-image {
              height: var(--dl-size-size-small);
            }
            .hero-image01 {
              height: var(--dl-size-size-small);
            }
            .hero-container05 {
              width: 72px;
            }
            .hero-image02 {
              height: var(--dl-size-size-small);
            }
            .hero-image03 {
              height: var(--dl-size-size-small);
            }
            .hero-container06 {
              width: 64px;
            }
            .hero-image04 {
              height: var(--dl-size-size-small);
            }
            .hero-image05 {
              height: var(--dl-size-size-small);
            }
            .hero-slider-slide1 {
              width: 409px;
            }
            .hero-container07 {
              width: 62px;
            }
            .hero-image06 {
              height: var(--dl-size-size-small);
            }
            .hero-image07 {
              height: var(--dl-size-size-small);
            }
            .hero-container08 {
              width: 72px;
            }
            .hero-image08 {
              height: var(--dl-size-size-small);
            }
            .hero-image09 {
              height: var(--dl-size-size-small);
            }
            .hero-container09 {
              width: 64px;
            }
            .hero-image10 {
              height: var(--dl-size-size-small);
            }
            .hero-image11 {
              height: var(--dl-size-size-small);
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  imageSrc10: '/images%20(6)-200h.webp',
  imageAlt9: 'image',
  imageSrc9: '/image-200h.webp',
  imageSrc3: '/images%20(5)-200h.webp',
  imageAlt3: 'image',
  imageAlt1: 'image',
  imageAlt8: 'image',
  imageAlt2: 'image',
  imageAlt5: 'image',
  rootClassName: '',
  imageSrc2: '/images%20(10)-200h.webp',
  imageAlt7: 'image',
  imageAlt4: 'image',
  imageAlt11: 'image',
  imageSrc8: '/rand4_free-200h.webp',
  imageSrc1: '/images%20(4)-200h.webp',
  imageAlt6: 'image',
  heading: '3,100 RAR31ONES',
  imageSrc: '/image-200h.webp',
  imageAlt10: 'image',
  text: 'Coming Soon',
  imageSrc7: '/images%20(1)-200h.webp',
  imageSrc11: '/images%20(3)-200h.webp',
  imageSrc4: '/images%20(8)-200h.webp',
  imageSrc6: '/images-200h.webp',
  text1: 'Coming Soon',
  imageSrc5: '/images%20(9)-200h.webp',
  imageAlt: 'image',
}

Hero.propTypes = {
  imageSrc10: PropTypes.string,
  imageAlt9: PropTypes.string,
  imageSrc9: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageAlt8: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt5: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt7: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageSrc8: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt6: PropTypes.string,
  heading: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt10: PropTypes.string,
  text: PropTypes.string,
  imageSrc7: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageSrc6: PropTypes.string,
  text1: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Hero
