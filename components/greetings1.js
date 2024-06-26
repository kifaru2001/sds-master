import React from 'react'

import PropTypes from 'prop-types'

const Greetings1 = (props) => {
  return (
    <>
      <div className="greetings1-container">
        <div className="greetings1-container1">
          <div className="greetings1-container2">
            <div className="greetings1-container3">
              <svg viewBox="0 0 1024 1024" className="greetings1-icon">
                <path d="M810 896v-598h-468v598h468zM810 214q34 0 60 25t26 59v598q0 34-26 60t-60 26h-468q-34 0-60-26t-26-60v-598q0-34 26-59t60-25h468zM682 42v86h-512v598h-84v-598q0-34 25-60t59-26h512z"></path>
              </svg>
              <div className="greetings1-container4">
                <img
                  alt={props.imageAlt1}
                  src={props.imageSrc1}
                  className="greetings1-image"
                />
                <div className="greetings1-container5">
                  <svg viewBox="0 0 1024 1024" className="greetings1-icon2">
                    <path d="M1024 657.542c0-82.090-56.678-150.9-132.996-169.48-3.242-128.7-108.458-232.062-237.862-232.062-75.792 0-143.266 35.494-186.854 90.732-24.442-31.598-62.69-51.96-105.708-51.96-73.81 0-133.642 59.874-133.642 133.722 0 6.436 0.48 12.76 1.364 18.954-11.222-2.024-22.766-3.138-34.57-3.138-106.998-0.002-193.732 86.786-193.732 193.842 0 107.062 86.734 193.848 193.73 193.848l656.262-0.012c96.138-0.184 174.008-78.212 174.008-174.446z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="greetings1-icon4">
                    <path d="M448 853.333c-36.736 0-72.96-6.443-107.648-19.243l-56.192-20.693 37.973-46.379c54.4-66.56 83.2-147.371 83.2-233.685s-28.8-167.125-83.243-233.685l-37.973-46.379 56.192-20.693c34.731-12.8 70.955-19.243 107.691-19.243 176.469 0 320 143.531 320 320s-143.531 320-320 320zM426.283 766.976c7.211 0.683 14.464 1.024 21.717 1.024 129.365 0 234.667-105.301 234.667-234.667s-105.301-234.667-234.667-234.667c-7.253 0-14.507 0.341-21.717 1.024 42.283 70.187 64.384 149.803 64.384 233.643s-22.101 163.456-64.384 233.643z"></path>
                  </svg>
                </div>
                <div className="greetings1-container6">
                  <h1 className="greetings1-text">{props.heading21}</h1>
                  <h1 className="greetings1-text1">{props.heading31}</h1>
                </div>
              </div>
            </div>
            <div className="greetings1-container7">
              <h1 className="greetings1-text2">{props.heading4}</h1>
              <h1 className="greetings1-text3">{props.heading11}</h1>
            </div>
          </div>
          <svg
            viewBox="0 0 1024.5851428571427 1024"
            className="greetings1-icon6"
          >
            <path d="M507.429 676.571l66.286-66.286-86.857-86.857-66.286 66.286v32h54.857v54.857h32zM758.857 265.143c-5.143-5.143-13.714-4.571-18.857 0.571l-200 200c-5.143 5.143-5.714 13.714-0.571 18.857s13.714 4.571 18.857-0.571l200-200c5.143-5.143 5.714-13.714 0.571-18.857zM804.571 604.571v108.571c0 90.857-73.714 164.571-164.571 164.571h-475.429c-90.857 0-164.571-73.714-164.571-164.571v-475.429c0-90.857 73.714-164.571 164.571-164.571h475.429c22.857 0 45.714 4.571 66.857 14.286 5.143 2.286 9.143 7.429 10.286 13.143 1.143 6.286-0.571 12-5.143 16.571l-28 28c-5.143 5.143-12 6.857-18.286 4.571-8.571-2.286-17.143-3.429-25.714-3.429h-475.429c-50.286 0-91.429 41.143-91.429 91.429v475.429c0 50.286 41.143 91.429 91.429 91.429h475.429c50.286 0 91.429-41.143 91.429-91.429v-72c0-4.571 1.714-9.143 5.143-12.571l36.571-36.571c5.714-5.714 13.143-6.857 20-4s11.429 9.143 11.429 16.571zM749.714 182.857l164.571 164.571-384 384h-164.571v-164.571zM1003.429 258.286l-52.571 52.571-164.571-164.571 52.571-52.571c21.143-21.143 56.571-21.143 77.714 0l86.857 86.857c21.143 21.143 21.143 56.571 0 77.714z"></path>
          </svg>
        </div>
      </div>
      <style jsx>
        {`
          .greetings1-container {
            width: 1329px;
            height: 349px;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .greetings1-container1 {
            flex: 0 0 auto;
            color: var(--dl-color-gray-500);
            width: 100%;
            height: 261px;
            display: flex;
            position: relative;
            box-shadow: 0px 0px 15px 0px #1f1f1f;
            align-items: center;
            border-radius: 16px;
            justify-content: flex-start;
            background-color: rgba(204, 204, 204, 0.19);
          }
          .greetings1-container2 {
            flex: 0 0 auto;
            width: XXLarge;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .greetings1-container3 {
            width: 555px;
            height: 135px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .greetings1-icon {
            top: 41px;
            fill: #d9d9d9;
            right: -4px;
            width: 43px;
            height: 36px;
            padding: var(--dl-space-space-halfunit);
            position: absolute;
          }
          .greetings1-container4 {
            flex: 0 0 auto;
            width: 555px;
            height: auto;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: center;
          }
          .greetings1-image {
            width: 98px;
            height: 99px;
            object-fit: cover;
            border-color: rgba(4, 4, 4, 0.25);
            border-width: 3px;
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-round);
          }
          .greetings1-container5 {
            width: 99px;
            height: 76px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .greetings1-icon2 {
            fill: #ffffff;
            left: -13px;
            width: 100%;
            bottom: 0px;
            height: 42px;
            position: absolute;
            animation-name: slideInLeft;
            animation-delay: 2s;
            animation-duration: 5s;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .greetings1-icon4 {
            fill: #d9d9d9;
            width: 67px;
            height: 55px;
          }
          .greetings1-container6 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .greetings1-text {
            color: rgb(239, 239, 239);
            height: 44px;
          }
          .greetings1-text1 {
            color: rgb(188, 188, 188);
            font-size: 12px;
            align-self: flex-start;
          }
          .greetings1-container7 {
            flex: 0 0 auto;
            width: 100%;
            height: 96px;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .greetings1-text2 {
            color: rgb(188, 188, 188);
            width: var(--dl-size-size-xxlarge);
            height: 22px;
            font-size: 1.2em;
            text-align: left;
            margin-bottom: var(--dl-space-space-unit);
          }
          .greetings1-text3 {
            color: #dcdcdc;
            width: var(--dl-size-size-xxlarge);
            font-size: 3em;
            text-align: left;
          }
          .greetings1-icon6 {
            fill: #d9d9d9;
            right: 20px;
            width: 38px;
            bottom: 19px;
            height: 25px;
            position: absolute;
          }
          @media (max-width: 1200px) {
            .greetings1-container {
              width: 100%;
              height: auto;
              flex-direction: column;
            }
            .greetings1-icon {
              top: 25px;
              left: 508px;
            }
          }
          @media (max-width: 767px) {
            .greetings1-container {
              height: auto;
              flex-direction: column;
            }
            .greetings1-container4 {
              justify-content: flex-start;
            }
            .greetings1-text2 {
              text-align: left;
              padding-left: var(--dl-space-space-unit);
            }
            .greetings1-text3 {
              position: static;
              text-align: left;
              padding-left: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .greetings1-container {
              width: 100%;
              height: auto;
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .greetings1-container1 {
              height: auto;
            }
            .greetings1-container3 {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: flex-start;
            }
            .greetings1-icon {
              top: 11px;
              right: 65px;
              width: 16px;
              height: 13px;
            }
            .greetings1-container4 {
              width: 264px;
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              margin-left: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .greetings1-image {
              width: 50px;
              height: 50px;
            }
            .greetings1-container5 {
              width: 32px;
            }
            .greetings1-icon2 {
              width: 40px;
              height: 38px;
            }
            .greetings1-text {
              height: auto;
              font-size: 1.2em;
              margin-left: var(--dl-space-space-unit);
            }
            .greetings1-text1 {
              margin-left: var(--dl-space-space-unit);
            }
            .greetings1-text2 {
              text-align: left;
              padding-left: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .greetings1-text3 {
              position: static;
              font-size: 1.5em;
              text-align: left;
              padding-left: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Greetings1.defaultProps = {
  imageSrc1:
    'https://images.unsplash.com/photo-1614854262340-ab1ca7d079c7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fGJsdWUlMjBncmFkaWVudHxlbnwwfHx8fDE3MTAzNTU0NTd8MA&ixlib=rb-4.0.3&w=200',
  heading21: 'GN, 0x00..000',
  heading11: '$0.0',
  heading31: 'Welcome to your portfolio',
  imageAlt1: 'image',
  heading4: 'Your Balance',
}

Greetings1.propTypes = {
  imageSrc1: PropTypes.string,
  heading21: PropTypes.string,
  heading11: PropTypes.string,
  heading31: PropTypes.string,
  imageAlt1: PropTypes.string,
  heading4: PropTypes.string,
}

export default Greetings1
