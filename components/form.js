import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Form = (props) => {
  return (
    <>
      <div className={`form-container ${props.rootClassName} `}>
        <form enctype="application/x-www-form-urlencoded" className="form-form">
          <h1 className="form-text">{props.heading}</h1>
          <input
            type="text"
            name="First Name"
            required="true"
            autoFocus="true"
            placeholder="First Name"
            className="form-textinput input"
          />
          <input
            type="text"
            name="Last Name"
            required="true"
            autoFocus="true"
            placeholder="Last Name"
            className="form-textinput1 input"
          />
          <select className="form-select">
            <option value="Male" className="form-option">
              Male
            </option>
            <option value="Female" className="form-option1">
              Female
            </option>
          </select>
          <div className="form-container1">
            <svg viewBox="0 0 1024 1024" className="form-icon">
              <path d="M1024 810.667v-469.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-147.84l-72.661-109.013c-7.765-11.52-20.736-18.987-35.499-18.987h-256c-13.909 0.085-27.307 6.741-35.499 18.987l-72.661 109.013h-147.84c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v469.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h768c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496zM938.667 810.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-768c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-469.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h170.667c14.763 0 27.733-7.467 35.499-18.987l72.661-109.013h210.347l72.661 109.013c8.192 12.245 21.589 18.901 35.499 18.987h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165zM725.333 554.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464-112.299 23.936-150.869 62.464-62.464 91.989-62.464 150.869 23.936 112.299 62.464 150.869 91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869zM640 554.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496 14.293-67.285 37.504-90.496 55.125-37.504 90.496-37.504 67.285 14.293 90.496 37.504 37.504 55.125 37.504 90.496z"></path>
            </svg>
            <span className="form-text1">{props.text1}</span>
          </div>
          <div className="form-container2 button">
            <button type="submit" className="button">
              {props.button}
            </button>
          </div>
          <Link href="/step-two">
            <a className="form-link">
              <div className="form-container3">
                <h1 className="form-text2">{props.heading1}</h1>
                <svg viewBox="0 0 1024 1024" className="form-icon2">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </div>
            </a>
          </Link>
        </form>
      </div>
      <style jsx>
        {`
          .form-container {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .form-form {
            gap: var(--dl-space-space-halfunit);
            width: 301px;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .form-text {
            color: #bdbdbd;
            font-size: 1em;
            align-self: flex-start;
            text-align: left;
          }
          .form-textinput {
            color: rgba(234, 234, 234, 0.52);
            width: 100%;
            height: 48px;
            background-color: rgba(0, 0, 0, 0.52);
          }
          .form-textinput1 {
            color: #e2e2e2;
            width: 100%;
            height: 48px;
            background-color: rgba(0, 0, 0, 0.52);
          }
          .form-select {
            color: var(--dl-color-gray-white);
            width: 100%;
            padding: var(--dl-space-space-halfunit);
            background: transparent;
          }
          .form-option {
            color: var(--dl-color-gray-500);
            background: black;
          }
          .form-option1 {
            color: var(--dl-color-gray-700);
            background: black;
          }
          .form-container1 {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            height: 100px;
            display: flex;
            align-items: center;
            border-color: rgba(60, 60, 60, 0.51);
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            justify-content: center;
          }
          .form-icon {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .form-text1 {
            color: #d0d0d0;
          }
          .form-container2 {
            width: 100%;
            cursor: pointer;
            height: 45px;
            display: flex;
            z-index: 100;
            box-shadow: 5px 5px 10px 0px #0a0a0a;
            transition: 0.3s;
            align-items: center;
            border-color: #404040;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            animation-name: slideInUp;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            background-color: rgba(18, 18, 18, 0.75);
            animation-duration: 2000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .form-container2:hover {
            background: rgba(35, 41, 41, 0.7);
          }
          .form-button {
            color: #bbbbbb;
          }
          .form-link {
            display: contents;
          }
          .form-container3 {
            gap: var(--dl-space-space-sixunits);
            width: 100%;
            height: 35px;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            border-color: rgba(52, 52, 52, 0.65);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: center;
            text-decoration: none;
          }
          .form-text2 {
            color: #e6e6e6;
            font-size: 1em;
          }
          .form-icon2 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .form-root-class-name {
            align-self: center;
            background-color: transparent;
          }
          @media (max-width: 479px) {
            .form-form {
              width: 100%;
              padding: var(--dl-space-space-unit);
            }
            .form-container2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Form.defaultProps = {
  heading: 'Step 1',
  heading1: 'Step 2',
  text1: 'Take a Selfie',
  rootClassName: '',
  button: 'Submit',
}

Form.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default Form
