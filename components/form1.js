import Link from 'next/link'

import PropTypes from 'prop-types'
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import toastStyle from "../util/toastConfig";
import { useRouter } from "next/router";
import { useAddress } from '@thirdweb-dev/react';

const Form = (props) => {
  const [Country, setCountry] = useState("");
  const [Phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const handleInputChange = (event) => {
    setCountry(event.target.value); // Update state
  };
  const handleInputChange2 = (event) => {
    setPhone(event.target.value); // Update state
  };
  const router = useRouter();
  const address = useAddress();
  
  async function onSubmit(event) {
    event.preventDefault()
 
    const formData = new FormData(event.target)
     toast(`Successfully submited Step 2`, {
        icon: "⚡",
        style: toastStyle,
        position: "bottom-center",
      });
    const response = await fetch(`/api/add-user-docs?Country=${Country}&Phone=${Phone}&address=${address}`, {
      method: 'POST',
      body: formData,
    })
    router.push("/complete");
    // Handle response if necessary
    const data = await response.json()

    // ...
  }

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className={`form-container ${props.rootClassName} `}>
        <form enctype="application/x-www-form-urlencoded" className="form-form" onSubmit={onSubmit}>
          <h1 className="form-text">KYC Step 2</h1>
          <input
            type="text"
            name="address"
            required="true"
            autoFocus="true"
            placeholder={address}
            disabled="true"
            className="hide input"
            value={address}
          
          />
          <input
            type="text"
            name="Country"
            required="true"
            autoFocus="true"
            placeholder="Country"
            className="form-textinput input"
            value={Country}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="Phone"
            required="true"
    
            placeholder="Phone Number"
            className="form-textinput1 input"
            value={Phone}
            onChange={handleInputChange2}
          />
        
       
          <div className="form-container2 button">
            <button type="submit" style={{background: "transparent"}}>
              {props.button}
            </button>
          </div>
        
        </form>
      </div>
      <style jsx>
        {`
        .hide{
          display: none;
        }
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
  heading: 'Step 2',
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
