import React from 'react'

import PropTypes from 'prop-types'

const Find = (props) => {
  return (
    <>
      <div className={`find-container ${props.rootClassName} `}>
        <div className="find-container1">
          <div className="find-container2">
            <svg viewBox="0 0 1024 1024" className="find-icon">
              <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
            </svg>
          </div>
          <div className="find-container3">
            <div className="find-container4">
              <input
                type="text"
                placeholder={props.textinputPlaceholder}
                className="find-textinput input"
              />
            </div>
          </div>
        </div>
        <div className="find-container5">
          <svg viewBox="0 0 956.5622857142856 1024" className="find-icon2">
            <path d="M334.286 561.714l-266.286 266.286c-7.429 7.429-18.857 7.429-26.286 0l-28.571-28.571c-7.429-7.429-7.429-18.857 0-26.286l224.571-224.571-224.571-224.571c-7.429-7.429-7.429-18.857 0-26.286l28.571-28.571c7.429-7.429 18.857-7.429 26.286 0l266.286 266.286c7.429 7.429 7.429 18.857 0 26.286zM950.857 822.857v36.571c0 10.286-8 18.286-18.286 18.286h-548.571c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h548.571c10.286 0 18.286 8 18.286 18.286z"></path>
          </svg>
        </div>
      </div>
      <style jsx>
        {`
          .find-container {
            flex: 0 0 auto;
            width: 727px;
            height: 103px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .find-container1 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .find-container2 {
            top: 37.9964599609375px;
            left: 100.9990234375px;
            width: 23.985748291015625px;
            height: 23.985748291015625px;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
          .find-icon {
            top: 0px;
            fill: #7e7e7e;
            left: 0px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .find-container3 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .find-container4 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .find-textinput {
            color: initial;
            width: 541px;
            height: 40px;
            text-align: center;
            border-color: #e2e2e2;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: rgba(255, 255, 255, 0.14);
          }
          .find-container5 {
            top: 38.986358642578125px;
            left: 600.0091552734375px;
            width: 23.985748291015625px;
            height: 23.985748291015625px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .find-icon2 {
            top: 0px;
            fill: #d9d9d9;
            left: 0px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          @media (max-width: 767px) {
            .find-container {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .find-container {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Find.defaultProps = {
  textinputPlaceholder: 'Search NFT, Tokens, Address',
  rootClassName: '',
}

Find.propTypes = {
  textinputPlaceholder: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Find
