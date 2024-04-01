import React from 'react'

import PropTypes from 'prop-types'

const Sliders = (props) => {
  return (
    <>
      <div className={`sliders-container ${props.rootClassName} `}>
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="false"
          data-pagination="false"
          data-autoplay-delay="1500"
          className="sliders-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="sliders-slider-slide swiper-slide"
            >
              <div className="sliders-container01">
                <div className="sliders-container02"></div>
                <div className="sliders-container03"></div>
              </div>
              <div className="sliders-container04">
                <div className="sliders-container05"></div>
                <div className="sliders-container06"></div>
              </div>
              <div className="sliders-container07">
                <div className="sliders-container08"></div>
                <div className="sliders-container09"></div>
              </div>
              <div className="sliders-container10">
                <div className="sliders-container11"></div>
                <div className="sliders-container12"></div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="sliders-slider-slide1 swiper-slide"
            >
              <div className="sliders-container13">
                <div className="sliders-container14"></div>
                <div className="sliders-container15"></div>
              </div>
              <div className="sliders-container16">
                <div className="sliders-container17"></div>
                <div className="sliders-container18"></div>
              </div>
              <div className="sliders-container19">
                <div className="sliders-container20"></div>
                <div className="sliders-container21"></div>
              </div>
              <div className="sliders-container22">
                <div className="sliders-container23"></div>
                <div className="sliders-container24"></div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="sliders-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          ></div>
          <div
            data-thq="slider-button-prev"
            className="sliders-slider-button-prev swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="sliders-slider-button-next swiper-button-next"
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
          className="sliders-slider1 swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="sliders-slider-slide2 swiper-slide"
            >
              <div className="sliders-container25">
                <div className="sliders-container26"></div>
                <div className="sliders-container27"></div>
              </div>
              <div className="sliders-container28">
                <div className="sliders-container29"></div>
                <div className="sliders-container30"></div>
              </div>
              <div className="sliders-container31">
                <div className="sliders-container32"></div>
                <div className="sliders-container33"></div>
              </div>
              <div className="sliders-container34">
                <div className="sliders-container35"></div>
                <div className="sliders-container36"></div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="sliders-slider-slide3 swiper-slide"
            >
              <div className="sliders-container37">
                <div className="sliders-container38"></div>
                <div className="sliders-container39"></div>
              </div>
              <div className="sliders-container40">
                <div className="sliders-container41"></div>
                <div className="sliders-container42"></div>
              </div>
              <div className="sliders-container43">
                <div className="sliders-container44"></div>
                <div className="sliders-container45"></div>
              </div>
              <div className="sliders-container46">
                <div className="sliders-container47"></div>
                <div className="sliders-container48"></div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="sliders-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          ></div>
          <div
            data-thq="slider-button-prev"
            className="sliders-slider-button-prev1 swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="sliders-slider-button-next1 swiper-button-next"
          ></div>
        </div>
      </div>
      <style jsx>
        {`
          .sliders-container {
            width: auto;
            height: 531px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .sliders-slider {
            width: 500px;
            height: 264px;
            display: inline-block;
          }
          .sliders-slider-slide {
            width: 501px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .sliders-container01 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sliders-container02 {
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
          .sliders-container03 {
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
          .sliders-container04 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sliders-container05 {
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
          .sliders-container06 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/images%20(4)-200h.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .sliders-container07 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sliders-container08 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/images%20(1)-200h.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .sliders-container09 {
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
          .sliders-container10 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sliders-container11 {
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
          .sliders-container12 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/image-200h.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .sliders-slider-slide1 {
            width: 501px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .sliders-container13 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sliders-container14 {
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
          .sliders-container15 {
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
          .sliders-container16 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sliders-container17 {
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
          .sliders-container18 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/images%20(3)-200h.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .sliders-container19 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sliders-container20 {
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
          .sliders-container21 {
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
          .sliders-container22 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sliders-container23 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/images%20(9)-200h.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .sliders-container24 {
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
          .sliders-slider-pagination {
            display: none;
          }
          .sliders-slider-button-prev {
            color: #fbfbfb;
            display: none;
          }
          .sliders-slider-button-next {
            color: #ffffff;
            display: none;
          }
          .sliders-slider1 {
            width: 500px;
            height: 269px;
            display: inline-block;
          }
          .sliders-slider-slide2 {
            width: 501px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .sliders-container25 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sliders-container26 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/images%20(7)-200h.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .sliders-container27 {
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
          .sliders-container28 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sliders-container29 {
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
          .sliders-container30 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/images%20(8)-200h.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .sliders-container31 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sliders-container32 {
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
          .sliders-container33 {
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
          .sliders-container34 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sliders-container35 {
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
          .sliders-container36 {
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
          .sliders-slider-slide3 {
            width: 501px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .sliders-container37 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sliders-container38 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/images%20(10)-200h.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .sliders-container39 {
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
          .sliders-container40 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sliders-container41 {
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
          .sliders-container42 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/images%20(2)-200h.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .sliders-container43 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sliders-container44 {
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
          .sliders-container45 {
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
          .sliders-container46 {
            flex: 0 0 auto;
            width: 117px;
            height: 297px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sliders-container47 {
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
          .sliders-container48 {
            width: 78px;
            height: 87px;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/images%20(6)-200h.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .sliders-slider-pagination1 {
            display: none;
          }
          .sliders-slider-button-prev1 {
            color: #fbfbfb;
            display: none;
          }
          .sliders-slider-button-next1 {
            color: #ffffff;
            display: none;
          }

          @media (max-width: 1200px) {
            .sliders-container {
              width: auto;
            }
          }
          @media (max-width: 767px) {
            .sliders-container {
              width: auto;
              height: 297px;
              margin: var(--dl-space-space-unit);
            }
            .sliders-slider1 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .sliders-container {
              width: 100%;
              height: 253px;
            }
            .sliders-slider {
              width: 100%;
              height: 282px;
            }
            .sliders-slider-slide {
              width: 100%;
              height: 212px;
              align-items: center;
            }
            .sliders-container01 {
              width: 95px;
            }
            .sliders-container04 {
              width: 90px;
            }
            .sliders-container07 {
              width: 75px;
            }
            .sliders-container10 {
              width: 105px;
            }
            .sliders-slider-slide1 {
              width: 100%;
              height: 255px;
              align-items: center;
            }
            .sliders-container13 {
              width: 91px;
            }
            .sliders-container16 {
              width: 87px;
            }
            .sliders-container19 {
              width: 85px;
            }
            .sliders-container22 {
              width: 97px;
            }
            .sliders-slider1 {
              width: 100%;
              height: 878px;
            }
            .sliders-slider-slide2 {
              width: 100%;
              height: 205px;
              align-items: center;
            }
            .sliders-container25 {
              width: 97px;
            }
            .sliders-container28 {
              width: 96px;
            }
            .sliders-container31 {
              width: 98px;
            }
            .sliders-container34 {
              width: 89px;
            }
            .sliders-slider-slide3 {
              width: 100%;
              height: 241px;
              align-items: center;
            }
            .sliders-container37 {
              width: 85px;
            }
            .sliders-container40 {
              width: 91px;
            }
            .sliders-container43 {
              width: 85px;
            }
            .sliders-container46 {
              width: 84px;
            }
          }
        `}
      </style>
    </>
  )
}

Sliders.defaultProps = {
  rootClassName: '',
}

Sliders.propTypes = {
  rootClassName: PropTypes.string,
}

export default Sliders
