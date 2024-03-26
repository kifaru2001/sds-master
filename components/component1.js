import React from 'react'

import PropTypes from 'prop-types'

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
            <span className="component1-text2">{props.text}</span>
          </div>
          <div className="component1-container06">
            <div className="component1-container07">
              <svg viewBox="0 0 1024 1024" className="component1-icon02">
                <path d="M1009.996 828.976l-301.544-301.544c-18.668-18.668-49.214-18.668-67.882 0l-22.626 22.626-184-184 302.056-302.058h-320l-142.058 142.058-14.060-14.058h-67.882v67.882l14.058 14.058-206.058 206.060 160 160 206.058-206.058 184 184-22.626 22.626c-18.668 18.668-18.668 49.214 0 67.882l301.544 301.544c18.668 18.668 49.214 18.668 67.882 0l113.136-113.136c18.67-18.666 18.67-49.214 0.002-67.882z"></path>
              </svg>
              <h1 className="component1-text3">{props.heading1}</h1>
            </div>
            <span className="component1-text4">{props.text1}</span>
          </div>
          <div className="component1-container08">
            <div className="component1-container09">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="component1-icon04"
              >
                <path d="M932.571 548.571c0 20-16.571 36.571-36.571 36.571h-128c0 71.429-15.429 125.143-38.286 165.714l118.857 119.429c14.286 14.286 14.286 37.143 0 51.429-6.857 7.429-16.571 10.857-25.714 10.857s-18.857-3.429-25.714-10.857l-113.143-112.571s-74.857 68.571-172 68.571v-512h-73.143v512c-103.429 0-178.857-75.429-178.857-75.429l-104.571 118.286c-7.429 8-17.143 12-27.429 12-8.571 0-17.143-2.857-24.571-9.143-14.857-13.714-16-36.571-2.857-52l115.429-129.714c-20-39.429-33.143-90.286-33.143-156.571h-128c-20 0-36.571-16.571-36.571-36.571s16.571-36.571 36.571-36.571h128v-168l-98.857-98.857c-14.286-14.286-14.286-37.143 0-51.429s37.143-14.286 51.429 0l98.857 98.857h482.286l98.857-98.857c14.286-14.286 37.143-14.286 51.429 0s14.286 37.143 0 51.429l-98.857 98.857v168h128c20 0 36.571 16.571 36.571 36.571zM658.286 219.429h-365.714c0-101.143 81.714-182.857 182.857-182.857s182.857 81.714 182.857 182.857z"></path>
              </svg>
              <h1 className="component1-text5">{props.heading11}</h1>
            </div>
            <span className="component1-text6">{props.text11}</span>
          </div>
          <div className="component1-container10">
            <button type="button" className="component1-button button">
              <span className="component1-text7">{props.text3}</span>
              <svg viewBox="0 0 1024 1024" className="component1-icon06">
                <path d="M237.254 877.254l530.746-530.744v229.49c0 35.346 28.654 64 64 64s64-28.654 64-64v-384c0-25.884-15.594-49.222-39.508-59.126-7.924-3.284-16.242-4.84-24.492-4.838v-0.036h-384c-35.346 0-64 28.654-64 64 0 35.348 28.654 64 64 64h229.49l-530.744 530.746c-12.498 12.496-18.746 28.876-18.746 45.254s6.248 32.758 18.746 45.254c24.992 24.994 65.516 24.994 90.508 0z"></path>
              </svg>
            </button>
            <button type="button" className="component1-button1 button">
              <span className="component1-text8">{props.text2}</span>
              <svg viewBox="0 0 1024 1024" className="component1-icon08">
                <path d="M237.254 877.254l530.746-530.744v229.49c0 35.346 28.654 64 64 64s64-28.654 64-64v-384c0-25.884-15.594-49.222-39.508-59.126-7.924-3.284-16.242-4.84-24.492-4.838v-0.036h-384c-35.346 0-64 28.654-64 64 0 35.348 28.654 64 64 64h229.49l-530.744 530.746c-12.498 12.496-18.746 28.876-18.746 45.254s6.248 32.758 18.746 45.254c24.992 24.994 65.516 24.994 90.508 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .component1-container {
            width: 100%;
            height: 3888px;
            display: flex;
            padding: var(--dl-space-space-sixunits);
            z-index: 100;
            overflow: hidden;
            position: relative;
            max-height: 100vh;
            min-height: 100vh;
            align-items: flex-start;
            backdrop-filter: blur(5px);
            justify-content: center;
            background-color: rgba(29, 29, 29, 0.1);
          }
          .component1-container01 {
            flex: 0 0 auto;
            width: 435px;
            height: 589px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-self: center;
            box-shadow: 0px 0px 30px 0px rgba(66, 66, 66, 0.49);
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
            background-color: rgba(177, 177, 177, 0.92);
          }
          .component1-container02 {
            width: 100%;
            height: 192px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGdyYWRpZW50fGVufDB8fHx8MTcxMTQxMzg5M3ww&ixlib=rb-4.0.3&w=1500');
            background-position: center;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .component1-text {
            color: #343434;
            margin: var(--dl-space-space-halfunit);
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
          }
          .component1-container05 {
            width: 100%;
            height: 130px;
            display: flex;
            padding: var(--dl-space-space-unit);
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: center;
          }
          .component1-text2 {
            width: 100%;
            font-size: 20px;
            font-style: italic;
            margin-top: var(--dl-space-space-halfunit);
            font-family: 'Exo 2';
            font-weight: 200;
          }
          .component1-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .component1-container07 {
            width: 100%;
            height: 46px;
            display: flex;
            align-self: flex-start;
            align-items: center;
            justify-content: flex-start;
          }
          .component1-icon02 {
            fill: #585858;
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .component1-text3 {
            color: #fefefe;
            font-size: 1.5em;
          }
          .component1-text4 {
            color: #292929;
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
          }
          .component1-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .component1-container09 {
            width: 100%;
            height: 46px;
            display: flex;
            align-self: flex-start;
            align-items: center;
            justify-content: flex-start;
          }
          .component1-icon04 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .component1-text5 {
            color: #fefefe;
            font-size: 1.5em;
          }
          .component1-text6 {
            color: #292929;
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
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
            border-color: #9f9f9f;
            flex-direction: row;
            background-color: rgba(81, 81, 81, 0.43);
          }
          .component1-text7 {
            color: #ffffff;
            align-self: center;
          }
          .component1-icon06 {
            fill: #d9d9d9;
            width: 19px;
            height: 20px;
          }
          .component1-button1 {
            display: flex;
            border-color: #a4a4a4;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.46);
          }
          .component1-text8 {
            align-self: center;
          }
          .component1-icon08 {
            width: 19px;
            height: 20px;
          }
          .component1-root-class-name {
            left: 0px;
            bottom: 0px;
            position: absolute;
          }
          .component1-root-class-name1 {
            top: -6px;
            right: -12px;
            position: absolute;
            align-self: center;
          }

          @media (max-width: 767px) {
            .component1-container01 {
              height: 781px;
            }
            .component1-container05 {
              height: 165px;
            }
          }
          @media (max-width: 479px) {
            .component1-container {
              padding: var(--dl-space-space-threeunits);
              z-index: 100;
            }
            .component1-container01 {
              top: -301px;
              left: 10px;
              width: 100%;
              height: 100%;
              position: static;
              padding-right: var(--dl-space-space-halfunit);
            }
            .component1-text {
              text-align: center;
            }
            .component1-container05 {
              width: 100%;
              height: 218px;
            }
            .component1-container06 {
              height: 142px;
            }
            .component1-text3 {
              font-size: 1em;
            }
            .component1-container08 {
              height: 128px;
            }
            .component1-text5 {
              font-size: 1em;
            }
            .component1-root-class-name1 {
              left: 0px;
              bottom: 0px;
              position: absolute;
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
  heading: 'Welcome to RareBay',
  text11: 'Find errors and bugs within RareBay and earn NFT rewards.',
  heading11: 'Bug hunting',
  text: 'RareBay TestNet is currently available for RAR31ONES owners, own NFT to start participating in Testnet.',
  text2: 'ENTER',
  text1:
    'Interacting with RareBay earns you RareCoin rewards. No need to of computational power, mine by interacting with ecosystem',
  heading1: 'Mine by interaction',
}

Component1.propTypes = {
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  heading12: PropTypes.string,
  heading: PropTypes.string,
  text11: PropTypes.string,
  heading11: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  heading1: PropTypes.string,
}

export default Component1
