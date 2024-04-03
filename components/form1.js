import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Form1 = (props) => {
  return (
    <>
      <div className={`form1-container ${props.rootClassName} `}>
        <form
          enctype="application/x-www-form-urlencoded"
          className="form1-form"
        >
          <h1 className="form1-text">{props.heading}</h1>
          <input
            type="text"
            name="First Name"
            disabled="true"
            required="true"
            autoFocus="true"
            placeholder="Country"
            className="form1-textinput input"
          />
          <input
            type="email"
            id="eml"
            name="Email"
            disabled="true"
            required="true"
            autoFocus="true"
            maxlength="14"
            minlength="10"
            placeholder="example@email.com"
            className="form1-textinput1 input"
          />
          <input
            type="tel"
            id="tel"
            name="Phone Number"
            disabled="true"
            required="true"
            autoFocus="true"
            maxlength="14"
            minlength="10"
            placeholder="+ 123-456-789"
            className="form1-textinput2 input"
          />
          <select disabled="true" required="true" className="form1-select">
            <option value="Identity Document" className="form1-option">
              Identity Document
            </option>
            <option value="Driving License" className="form1-option1">
              Driving License
            </option>
            <option value="Passport" className="form1-option2">
              Passport
            </option>
          </select>
          <div className="form1-container1">
            <svg viewBox="0 0 877.7142857142857 1024" className="form1-icon">
              <path d="M838.857 217.143c21.143 21.143 38.857 63.429 38.857 93.714v658.286c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h512c30.286 0 72.571 17.714 93.714 38.857zM585.143 77.714v214.857h214.857c-3.429-9.714-8.571-19.429-12.571-23.429l-178.857-178.857c-4-4-13.714-9.143-23.429-12.571zM804.571 950.857v-585.143h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-438.857v877.714h731.429zM731.429 694.857v182.857h-585.143v-109.714l109.714-109.714 73.143 73.143 219.429-219.429zM256 585.143c-60.571 0-109.714-49.143-109.714-109.714s49.143-109.714 109.714-109.714 109.714 49.143 109.714 109.714-49.143 109.714-109.714 109.714z"></path>
            </svg>
            <span className="form1-text1">{props.text1}</span>
            <span className="form1-text2">{props.text11}</span>
          </div>
          <div className="form1-container2 button">
            <button type="submit" className="button" style={{background: "transparent"}}>
              {props.button}
            </button>
          </div>
          <Link href="/status">
            <a className="form1-link">
              <div className="form1-container3">
                <h1 className="form1-text3">{props.heading11}</h1>
                <svg viewBox="0 0 1024 1024" className="form1-icon2">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </div>
            </a>
          </Link>
        </form>
      </div>
      <style jsx>
        {`
          .form1-container {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .form1-form {
            gap: var(--dl-space-space-halfunit);
            width: 301px;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .form1-text {
            color: #bdbdbd;
            font-size: 1em;
            align-self: flex-start;
            text-align: left;
          }
          .form1-textinput {
            color: rgba(234, 234, 234, 0.52);
            width: 100%;
            height: 48px;
            background-color: rgba(0, 0, 0, 0.52);
          }
          .form1-textinput1 {
            color: #e2e2e2;
            width: 100%;
            height: 48px;
            background-color: rgba(0, 0, 0, 0.52);
          }
          .form1-textinput2 {
            color: #e2e2e2;
            width: 100%;
            height: 48px;
            background-color: rgba(0, 0, 0, 0.52);
          }
          .form1-select {
            color: var(--dl-color-gray-white);
            width: 100%;
            padding: var(--dl-space-space-halfunit);
            background: transparent;
          }
          .form1-option {
            color: var(--dl-color-gray-500);
            background: black;
          }
          .form1-option1 {
            color: var(--dl-color-gray-700);
            background: black;
          }
          .form1-option2 {
            color: var(--dl-color-gray-700);
            background: black;
          }
          .form1-container1 {
            width: 100%;
            cursor: pointer;
            height: 124px;
            display: flex;
            align-items: center;
            border-color: rgba(60, 60, 60, 0.51);
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .form1-icon {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            margin: var(--dl-space-space-unit);
          }
          .form1-text1 {
            color: #d0d0d0;
          }
          .form1-text2 {
            color: #797979;
            font-size: 12px;
          }
          .form1-container2 {
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
          .form1-container2:hover {
            background: rgba(35, 41, 41, 0.7);
          }
          .form1-button {
            color: #bbbbbb;
          }
          .form1-link {
            display: contents;
          }
          .form1-container3 {
            gap: var(--dl-space-space-sixunits);
            width: 100%;
            height: 35px;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            padding-left: 5%;
            padding-right: 5%;
            align-items: center;

            border-radius: var(--dl-radius-radius-radius8);
            justify-content: center;
            text-decoration: none;
          }
          .form1-text3 {
            color: #e6e6e6;
            font-size: 1em;
          }
          .form1-icon2 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .form1-root-class-name {
            background-color: transparent;
          }
          @media (max-width: 479px) {
            .form1-container {
              padding: var(--dl-space-space-unit);
            }
            .form1-form {
              width: 100%;
            }
            .form1-container2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Form1.defaultProps = {
  heading11: 'Complete',
  rootClassName: '',
  button: 'Submit',
  text1: 'Drop File',
  text11: 'png, jpeg, pdf.',
  heading: 'Step 2',
}

Form1.propTypes = {
  heading11: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  text1: PropTypes.string,
  text11: PropTypes.string,
  heading: PropTypes.string,
}

export default Form1
