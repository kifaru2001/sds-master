import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import ReactThemeToggleButton from "./toggle"
import {useTheme} from "next-themes";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { Blockie } from 'web3uikit';

const dark = { background: "white" };
const light = { background: "black" };

const GlobalStyle = createGlobalStyle`
.body{
  background: black;
  transition: background 0.4s;
  color: white;
}
`;


const Nav = (props) => {
const [ isDark, setDark ] = useState(true)

const theme = isDark ? light : dark;
const { themes, setTheme } = useTheme(dark)
const themez = isDark ? setTheme("dark") : setTheme("light");

const address = useAddress()

const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  if (!address) {
    setIsLoggedIn(true);
  } else {
    setIsLoggedIn(false);
  }
}, [address]);


  return (
    <>
        <ThemeProvider theme={theme}>
      <div className={`nav-container ${props.rootClassName} `}>
        <div className="nav-container01">
        
            <a className="nav-link">
              <div className="nav-container02">
                <div className="nav-container03">
                <Link  legacyBehavior  href="/welcome">
                  <img
                    alt={props.imageAlt}
                    src={props.imageSrc}
                    className="nav-image"
                  />
                
                  <span className="nav-text">{props.text}</span>
                  <span className="nav-text01">{props.text1}</span>
                  </Link>
                </div>
          
              </div>
            </a>
        
             <Link  legacyBehavior  href="/nf-ts">
            <a className="nav-link01">{props.text5}</a>
          </Link>
             <Link  legacyBehavior  href="/tokens">
            <a className="nav-link02">{props.text51}</a>
          </Link>
             <Link  legacyBehavior  href="/ecosystem">
            <a className="nav-link03">{props.text511}</a>
          </Link>
             <Link  legacyBehavior  href="/mining">
            <a className="nav-link04">{props.text5111}</a>
          </Link>
          <div className="nav-container04">
            <div className="nav-container05">
              <div className="nav-container06">
                <div className="nav-container07">
                  <div className="nav-container08">
                    <svg viewBox="0 0 1024 1024" className="nav-icon04">
                      <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                    </svg>
                  </div>
                  <div className="nav-container09">
                    <div className="nav-container10">
                      <input
                        type="text"
                        placeholder={props.textinputPlaceholder}
                        className="nav-textinput input"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-container11">
            <div data-thq="thq-dropdown" className="nav-thq-dropdown list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="nav-dropdown-toggle"
              >
                <svg viewBox="0 0 1024 1024" className="nav-icon06">
                  <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                </svg>
              </div>
              <ul data-thq="thq-dropdown-list" className="nav-dropdown-list">
                <li data-thq="thq-dropdown" className="nav-dropdown list-item">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="nav-dropdown-toggle01"
                  >
                    <svg viewBox="0 0 1024 1024" className="nav-icon08">
                      <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                    </svg>
                    <span className="nav-text02">Mainnet</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="nav-dropdown01 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="nav-dropdown-toggle02"
                  >
                    <svg viewBox="0 0 1024 1024" className="nav-icon10">
                      <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                    </svg>
                    <span className="nav-text03">Testnet</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="nav-dropdown02 list-item"
                >
                  <ul
                    data-thq="thq-dropdown-list"
                    className="nav-dropdown-list01"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="nav-dropdown03 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="nav-dropdown-toggle03"
                      >
                        <svg viewBox="0 0 1024 1024" className="nav-icon12">
                          <path d="M470 854l170-172h256v172h-426zM264 768l370-370-52-52-368 370v52h50zM786 248q26 26 26 60t-26 60l-486 486h-172v-174q480-478 486-484 26-26 60-26t60 26z"></path>
                        </svg>
                        <span className="nav-text04">User Nickname</span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="nav-dropdown04 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="nav-dropdown-toggle04"
                      >
                        <svg viewBox="0 0 1024 1024" className="nav-icon14">
                          <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                        </svg>
                        <span className="nav-text05">User Avatar</span>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-container12">
            <div
              data-thq="thq-dropdown"
              className="nav-thq-dropdown1 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="nav-dropdown-toggle05"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="nav-icon16"
                >
                  <path d="M373.714 616c-1.143 4-29.143-9.143-36.571-12-7.429-3.429-41.143-22.286-49.714-28s-41.143-32.571-45.143-34.286v0c-20.571 31.429-46.857 68.571-76.571 103.429-10.286 12-41.143 50.857-60 62.857-2.857 1.714-19.429 3.429-21.714 2.286 9.143-6.857 35.429-39.429 46.857-52.571 14.286-16.571 82.286-111.429 93.714-133.143 12-21.714 48-93.714 49.714-100.571-5.714-0.571-50.857 14.857-62.857 18.857-11.429 3.429-42.857 10.857-45.143 12.571-2.286 2.286-0.571 9.143-1.714 11.429s-11.429 7.429-17.714 8.571c-5.714 1.714-18.857 2.286-26.857 0-7.429-1.714-14.286-9.143-16-12 0 0-2.286-3.429-2.857-13.143 6.857-2.286 18.286-2.857 30.857-6.286s43.429-12.571 60-18.286 48.571-17.714 58.286-20c10.286-1.714 36-18.857 49.714-23.429s23.429-10.286 24-7.429 0 15.429-0.571 18.857c-0.571 2.857-28 56.571-32 65.143-2.286 4.571-18.286 34.857-44 74.857 9.143 4 28.571 12 36.571 16 9.714 4.571 77.714 33.143 81.143 34.286s9.714 27.429 8.571 32zM256.571 338.286c1.714 9.714-1.143 13.714-2.286 16-5.714 10.857-20 18.286-28.571 21.714s-22.857 6.857-34.286 6.857c-5.143-0.571-15.429-2.286-28-14.857-6.857-7.429-12-27.429-9.714-25.143s18.857 4.571 26.286 2.857 25.143-6.857 33.143-9.143c8.571-2.857 25.714-7.429 31.429-8 5.714 0 10.286 2.286 12 9.714zM655.429 412l36 129.714-79.429-24zM22.286 869.143l396.571-132.571v-589.714l-396.571 133.143v589.143zM731.429 688l58.286 17.714-103.429-375.429-57.143-17.714-123.429 306.286 58.286 17.714 25.714-62.857 120.571 37.143zM444 138.286l327.429 105.143v-217.143zM621.714 894.286l90.286 7.429-30.857 91.429-22.857-37.714c-46.286 29.714-103.429 52.571-157.714 61.714-16.571 3.429-35.429 6.857-52 6.857h-48c-60.571 0-170.857-36-218.857-70.857-3.429-2.857-4.571-5.143-4.571-9.143 0-6.286 4.571-10.857 10.286-10.857 5.143 0 32 16.571 39.429 20 51.429 25.714 123.429 49.143 181.143 49.143 71.429 0 120-9.143 185.143-37.143 18.857-8.571 35.429-19.429 53.143-29.143zM877.714 277.714v616.571c-441.714-140.571-442.286-140.571-442.286-140.571-9.143 4-418.857 142.286-424.571 142.286-4.571 0-8.571-2.857-10.286-7.429 0-0.571-0.571-1.143-0.571-1.714v-616c0.571-1.714 1.143-4.571 2.286-5.714 3.429-4 8-5.143 11.429-6.286 1.714-0.571 36.571-12 85.143-28.571v-219.429l318.857 113.143c4-1.143 359.429-124 364.571-124 6.286 0 11.429 4.571 11.429 12v238.857z"></path>
                </svg>
              </div>
              <ul data-thq="thq-dropdown-list" className="nav-dropdown-list02">
                <li
                  data-thq="thq-dropdown"
                  className="nav-dropdown05 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="nav-dropdown-toggle06"
                  >
                    <span className="nav-text06">English-US</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="nav-dropdown06 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="nav-dropdown-toggle07"
                  >
                    <span className="nav-text07">中文</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="nav-dropdown-toggle08"
                  >
                    <span className="nav-text08">Española</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="nav-dropdown-toggle09"
                  >
                    <span className="nav-text09">日本語</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="nav-dropdown-toggle10"
                  >
                    <span className="nav-text10">Français</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-container13">
            <div
              data-thq="thq-dropdown"
              className="nav-thq-dropdown2 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="nav-dropdown-toggle11"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="nav-icon18"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM877.714 449.714v126.857c0 8.571-6.857 18.857-16 20.571l-105.714 16c-6.286 18.286-13.143 35.429-22.286 52 19.429 28 40 53.143 61.143 78.857 3.429 4 5.714 9.143 5.714 14.286s-1.714 9.143-5.143 13.143c-13.714 18.286-90.857 102.286-110.286 102.286-5.143 0-10.286-2.286-14.857-5.143l-78.857-61.714c-16.571 8.571-34.286 16-52 21.714-4 34.857-7.429 72-16.571 106.286-2.286 9.143-10.286 16-20.571 16h-126.857c-10.286 0-19.429-7.429-20.571-17.143l-16-105.143c-17.714-5.714-34.857-12.571-51.429-21.143l-80.571 61.143c-4 3.429-9.143 5.143-14.286 5.143s-10.286-2.286-14.286-6.286c-30.286-27.429-70.286-62.857-94.286-96-2.857-4-4-8.571-4-13.143 0-5.143 1.714-9.143 4.571-13.143 19.429-26.286 40.571-51.429 60-78.286-9.714-18.286-17.714-37.143-23.429-56.571l-104.571-15.429c-9.714-1.714-16.571-10.857-16.571-20.571v-126.857c0-8.571 6.857-18.857 15.429-20.571l106.286-16c5.714-18.286 13.143-35.429 22.286-52.571-19.429-27.429-40-53.143-61.143-78.857-3.429-4-5.714-8.571-5.714-13.714s2.286-9.143 5.143-13.143c13.714-18.857 90.857-102.286 110.286-102.286 5.143 0 10.286 2.286 14.857 5.714l78.857 61.143c16.571-8.571 34.286-16 52-21.714 4-34.857 7.429-72 16.571-106.286 2.286-9.143 10.286-16 20.571-16h126.857c10.286 0 19.429 7.429 20.571 17.143l16 105.143c17.714 5.714 34.857 12.571 51.429 21.143l81.143-61.143c3.429-3.429 8.571-5.143 13.714-5.143s10.286 2.286 14.286 5.714c30.286 28 70.286 63.429 94.286 97.143 2.857 3.429 4 8 4 12.571 0 5.143-1.714 9.143-4.571 13.143-19.429 26.286-40.571 51.429-60 78.286 9.714 18.286 17.714 37.143 23.429 56l104.571 16c9.714 1.714 16.571 10.857 16.571 20.571z"></path>
                </svg>
              </div>
              <ul data-thq="thq-dropdown-list" className="nav-dropdown-list03">
              
                 
                <li
                  data-thq="thq-dropdown"
                  className="nav-dropdown09 list-item"
                >
                     <Link  legacyBehavior  href="/portfolio">
                    <a>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="nav-dropdown-toggle14"
                      >
                        <svg viewBox="0 0 1024 1024" className="nav-icon24">
                          <path d="M896 896v-85.333c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464h-341.333c-58.88 0-112.299 23.936-150.869 62.464s-62.464 91.989-62.464 150.869v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333c0-35.371 14.293-67.285 37.504-90.496s55.125-37.504 90.496-37.504h341.333c35.371 0 67.285 14.293 90.496 37.504s37.504 55.125 37.504 90.496v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM725.333 298.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464-112.299 23.936-150.869 62.464-62.464 91.989-62.464 150.869 23.936 112.299 62.464 150.869 91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869zM640 298.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496 14.293-67.285 37.504-90.496 55.125-37.504 90.496-37.504 67.285 14.293 90.496 37.504 37.504 55.125 37.504 90.496z"></path>
                        </svg>
                        <span className="nav-text13">Profile Settings</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="nav-dropdown10 list-item"
                >
                     <Link  legacyBehavior  href="/mining">
                    <a>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="nav-dropdown-toggle15"
                      >
                        <svg viewBox="0 0 1024 1024" className="nav-icon26">
                          <path d="M746.752 513.408l-180.949-104.875 91.221-218.923c2.816-5.717 4.395-12.16 4.395-18.944 0-23.552-18.987-42.667-42.539-42.667-10.624 0.171-19.499 3.541-26.539 9.131-1.408 1.109-2.261 1.792-2.987 2.56l-320 302.933c-9.771 9.259-14.592 22.571-13.056 35.925 1.536 13.355 9.344 25.216 20.949 32l180.992 104.96-92.288 221.44c-7.808 18.603-1.451 40.107 15.104 51.541 7.381 5.035 15.872 7.509 24.277 7.509 10.581 0 21.163-3.968 29.355-11.691l320-303.019c9.771-9.259 14.592-22.571 13.056-35.925-1.579-13.355-9.387-25.216-20.992-31.957z"></path>
                        </svg>
                        <span className="nav-text14">Mine RareCoin</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <div
                    data-thq="thq-dropdown-toggle"
                    className="nav-dropdown-toggle12"
                  >
                     <ReactThemeToggleButton
                     invertedIconLogic
        isDark={isDark}
        onChange={() => setDark((prev) => !prev)}
        />   
                  </div>
              </ul>
            </div>
          </div>
          <div className="nav-container14">
            <div className="nav-container15">
              <div
                data-thq="thq-dropdown"
                className="nav-thq-dropdown3 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="nav-dropdown-toggle16"
                >
                  <svg viewBox="0 0 1024 1024" className="nav-icon28">
                    <path d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"></path>
                  </svg>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="nav-dropdown-arrow"
                  ></div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="nav-dropdown-list04"
                >
                  <ConnectWallet
        theme={({
          colors: {
            modalBg: "rgba(0, 0, 0, 0.5)",
            primaryButtonText: "white",
            selectedTextColor: "#d9d9d9",
            separatorLine: "transparent",
            secondaryText: "white",
            secondaryButtonText: "#c2c2c7",
            primaryText: "#cccccc",
            borderColor: "rgba(100, 100, 100, 0.3)",
          },
        })}
        modalTitle={"RareBay Connect"}
        auth={{ loginOptional: false }}
        switchToActiveChain={true}
        modalSize={"compact"}
        modalTitleIconUrl={
          "https://rarebay.xyz/fav.ico"
        }
        showThirdwebBranding={false}
        style={{color: "white", border: "solid 1px", marginBottom: "10%"}}
      />
                  <li
                    data-thq="thq-dropdown"
                    className="nav-dropdown11 list-item"
                  >
                    <ul
                      data-thq="thq-dropdown-list"
                      className="nav-dropdown-list05"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="nav-dropdown12 list-item"
                      ></li>
                      <li
                        data-thq="thq-dropdown"
                        className="nav-dropdown13 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="nav-dropdown-toggle17"
                        >
                          <svg viewBox="0 0 1024 1024" className="nav-icon30">
                            <path d="M960 364q22 12 22 34v228q0 24-22 36-20 10-60 26-44 98-124 161t-172 80-184 0-172-80-124-161q-20-8-60-28-22-10-22-34v-228q0-24 22-34 40-20 60-28 50-112 155-181t233-69 233 69 155 181q20 8 60 28zM512 162q-170 0-274 134 272-80 548 0-108-134-274-134zM512 862q70 0 150-39t124-95q-278 80-548 0 106 134 274 134zM914 608v-192q-404-190-804 0v192q2 0 6 2t6 2q156 78 390 78 152 0 258-32 100-28 144-50z"></path>
                          </svg>
                          <span className="nav-text15">NFT Collections</span>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="nav-dropdown14 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="nav-dropdown-toggle18"
                        >
                          <svg viewBox="0 0 1024 1024" className="nav-icon32">
                            <path d="M480 64c-265.096 0-480 214.904-480 480s214.904 480 480 480c265.098 0 480-214.902 480-480s-214.902-480-480-480zM480 928c-212.078 0-384-171.922-384-384s171.922-384 384-384c212.076 0 384 171.922 384 384s-171.924 384-384 384z"></path>
                            <path d="M608 576c17.674 0 32-14.326 32-32s-14.326-32-32-32h-68.208l94.832-142.25c9.804-14.704 5.83-34.572-8.876-44.376-14.704-9.802-34.572-5.83-44.376 8.876l-101.372 152.062-101.374-152.062c-9.804-14.706-29.672-18.68-44.376-8.876-14.706 9.804-18.678 29.672-8.876 44.376l94.834 142.25h-68.208c-17.672 0-32 14.326-32 32s14.328 32 32 32h96v64h-96c-17.672 0-32 14.326-32 32s14.328 32 32 32h96v96c0 17.674 14.328 32 32 32s32-14.326 32-32v-96h96c17.674 0 32-14.326 32-32s-14.326-32-32-32h-96v-64h96z"></path>
                          </svg>
                          <span className="nav-text16">Coins/Tokens</span>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="nav-dropdown15 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="nav-dropdown-toggle19"
                        >
                          <svg viewBox="0 0 1024 1024" className="nav-icon35">
                            <path d="M384 128l170 170h-128v300h-84v-300h-128zM682 726h128l-170 170-170-170h128v-300h84v300z"></path>
                          </svg>
                          <span className="nav-text17">DeFi</span>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-dropdown16 list-item"
                  >
                       <Link  legacyBehavior  href="/portfolio">
                      <a>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="nav-dropdown-toggle20"
                        >
                          <svg viewBox="0 0 1024 1024" className="nav-icon37">
                            <path d="M725.333 384c0-58.923-23.893-112.256-62.464-150.827-38.613-38.613-91.947-62.507-150.869-62.507s-112.256 23.893-150.869 62.507c-38.571 38.571-62.464 91.904-62.464 150.827s23.893 112.256 62.464 150.827c38.613 38.613 91.947 62.507 150.869 62.507s112.256-23.893 150.869-62.507c38.571-38.571 62.464-91.904 62.464-150.827z"></path>
                            <path d="M256 810.667c0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333 0-85.333-100.437-170.667-256-170.667-160 0-256 85.333-256 170.667z"></path>
                          </svg>
                          <span className="nav-text18">Portfolio</span>
                        </div>
                      </a>
                    </Link>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="nav-dropdown-list06"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="nav-dropdown17 list-item"
                      ></li>
                    </ul>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-dropdown18 list-item"
                  >
                    <ul
                      data-thq="thq-dropdown-list"
                      className="nav-dropdown-list07"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="nav-dropdown19 list-item"
                      ></li>
                      
                    </ul>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-dropdown20 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-dropdown-toggle21"
                    >
                      <svg
                        viewBox="0 0 760.0274285714286 1024"
                        className="nav-icon40"
                      >
                        <path d="M666.857 365.714c7.429 76-24.571 121.714-74.857 147.429 83.429 20 136 69.714 125.714 181.143-13.143 138.857-116 176-263.429 184v145.714h-88v-143.429c-22.286 0-45.714 0-69.714-0.571v144h-88v-145.714c-20.571 0-41.143-0.571-62.286-0.571h-114.286l17.714-104.571c64.571 1.143 63.429 0 63.429 0 24.571 0 31.429-17.714 33.143-29.143v-229.714h9.143c-3.429-0.571-6.857-0.571-9.143-0.571v-164c-3.429-18.286-14.857-38.857-50.857-38.857 0 0 1.143-1.143-63.429 0v-93.714l121.143 0.571c17.714 0 36.571 0 55.429-0.571v-144h88v141.143c23.429-0.571 46.857-1.143 69.714-1.143v-140h88v144c113.143 9.714 202.857 44.571 212.571 148.571zM544 677.143c0-113.143-186.286-96.571-245.714-96.571v193.143c59.429 0 245.714 12.571 245.714-96.571zM503.429 405.143c0-103.429-155.429-88-205.143-88v175.429c49.714 0 205.143 11.429 205.143-87.429z"></path>
                      </svg>
                      <span className="nav-text19">Bitcoin Ordinals</span>
                      <span className="nav-text20">{props.text3}</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-dropdown-toggle22"
                    >
                      <svg viewBox="0 0 1024 1024" className="nav-icon42">
                        <path d="M320 192c0-106.039 85.961-192 192-192s192 85.961 192 192c0 106.039-85.961 192-192 192s-192-85.961-192-192zM768.078 448h-35.424l-199.104 404.244 74.45-372.244-96-96-96 96 74.45 372.244-199.102-404.244h-35.424c-127.924 0-127.924 85.986-127.924 192v320h768v-320c0-106.014 0-192-127.922-192z"></path>
                      </svg>
                      <span className="nav-text21">Borrow/Lend</span>
                      <span className="nav-text22">{props.text32}</span>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="nav-dropdown-list08"
                    ></ul>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-dropdown21 list-item"
                  ></li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-dropdown22 list-item"
                  ></li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-dropdown23 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-dropdown-toggle23"
                    >
                      <svg viewBox="0 0 1024 1024" className="nav-icon44">
                        <path d="M640 256v-256h-448l-192 192v576h384v256h640v-768h-384zM192 90.51v101.49h-101.49l101.49-101.49zM64 704v-448h192v-192h320v192l-192 192v256h-320zM576 346.51v101.49h-101.49l101.49-101.49zM960 960h-512v-448h192v-192h320v640z"></path>
                      </svg>
                      <span className="nav-text23">Documentation</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-dropdown24 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-dropdown-toggle24"
                    >
                      <svg viewBox="0 0 1024 1024" className="nav-icon46">
                        <path d="M544.010 1024.004c-2.296 0-4.622-0.25-6.94-0.764-14.648-3.25-25.070-16.238-25.070-31.24v-480h-480c-15.002 0-27.992-10.422-31.24-25.070-3.25-14.646 4.114-29.584 17.708-35.928l960-448c12.196-5.688 26.644-3.144 36.16 6.372 9.516 9.514 12.060 23.966 6.372 36.16l-448 960c-5.342 11.44-16.772 18.47-28.99 18.47zM176.242 448h367.758c17.674 0 32 14.328 32 32v367.758l349.79-749.546-749.548 349.788z"></path>
                      </svg>
                      <span className="nav-text24">Explorer</span>
                      <svg viewBox="0 0 1024 1024" className="nav-icon48">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="nav-dropdown-list09"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="nav-dropdown25 list-item"
                      >
                           <Link  legacyBehavior  href="/nf-ts">
                          <a>
                            <div
                              data-thq="thq-dropdown-toggle"
                              className="nav-dropdown-toggle25"
                            >
                              <svg
                                viewBox="0 0 1024 1024"
                                className="nav-icon50"
                              >
                                <path d="M960 364q22 12 22 34v228q0 24-22 36-20 10-60 26-44 98-124 161t-172 80-184 0-172-80-124-161q-20-8-60-28-22-10-22-34v-228q0-24 22-34 40-20 60-28 50-112 155-181t233-69 233 69 155 181q20 8 60 28zM512 162q-170 0-274 134 272-80 548 0-108-134-274-134zM512 862q70 0 150-39t124-95q-278 80-548 0 106 134 274 134zM914 608v-192q-404-190-804 0v192q2 0 6 2t6 2q156 78 390 78 152 0 258-32 100-28 144-50z"></path>
                              </svg>
                              <span className="nav-text25">
                                NFT Collections
                              </span>
                            </div>
                          </a>
                        </Link>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="nav-dropdown26 list-item"
                      >
                           <Link  legacyBehavior  href="/tokens">
                          <a>
                            <div
                              data-thq="thq-dropdown-toggle"
                              className="nav-dropdown-toggle26"
                            >
                              <svg
                                viewBox="0 0 586.8251428571429 1024"
                                className="nav-icon52"
                              >
                                <path d="M344.571 877.714h-98.286c-10.286 0-18.286-8-18.286-18.286v-188.571h-164.571c-10.286 0-18.286-8-18.286-18.286v-58.857c0-10.286 8-18.286 18.286-18.286h164.571v-48.571h-164.571c-10.286 0-18.286-8-18.286-18.286v-59.429c0-9.714 8-18.286 18.286-18.286h122.286l-183.429-330.286c-2.857-5.714-2.857-12.571 0-18.286 3.429-5.714 9.714-9.143 16-9.143h110.857c6.857 0 13.143 4 16.571 10.286l122.857 242.857c13.714 26.857 22.857 49.714 32 71.429 9.714-24.571 22.286-48.571 33.143-73.714l109.143-240c2.857-6.857 9.714-10.857 16.571-10.857h109.143c6.286 0 12 3.429 15.429 9.143 3.429 5.143 3.429 12 0.571 17.714l-178.857 330.857h122.857c10.286 0 18.286 8.571 18.286 18.286v59.429c0 10.286-8 18.286-18.286 18.286h-165.714v48.571h165.714c10.286 0 18.286 8 18.286 18.286v58.857c0 10.286-8 18.286-18.286 18.286h-165.714v188.571c0 10.286-8.571 18.286-18.286 18.286z"></path>
                              </svg>
                              <span className="nav-text26">Tokens</span>
                            </div>
                          </a>
                        </Link>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="nav-dropdown27 list-item"
                      >
                           <Link  legacyBehavior  href="/users">
                          <a>
                            <div
                              data-thq="thq-dropdown-toggle"
                              className="nav-dropdown-toggle27"
                            >
                              <svg
                                viewBox="0 0 1024 1024"
                                className="nav-icon54"
                              >
                                <path d="M470 896h-44l44-298h-150q-32 0-16-28 6-10 2-6 102-178 248-436h44l-44 298h150q28 0 18 28z"></path>
                              </svg>
                              <span className="nav-text27">Members</span>
                            </div>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <div className="nav-container16">
                    <svg viewBox="0 0 1024 1024" className="nav-icon56">
                      <path d="M888.875 224.512c-7.936 10.325-16.683 20.267-26.283 29.696-9.941 9.899-14.805 24.192-11.861 38.741 1.579 7.765 2.56 17.237 2.603 27.051 0 224.256-103.637 382.763-247.893 464.981-112.939 64.384-253.355 83.413-393.472 47.787 53.12-15.403 104.96-39.296 153.301-72.107 6.272-4.224 11.648-10.368 15.019-17.963 9.557-21.547-0.128-46.763-21.675-56.32-118.357-52.608-176.213-125.056-203.477-195.968-17.792-46.251-23.296-93.781-22.187-137.685 0.896-34.603 5.888-66.56 11.861-93.099 16.853 14.592 34.304 30.080 52.736 44.245 87.509 67.285 197.291 105.813 315.563 102.741 23.083-0.64 41.557-19.499 41.557-42.667v-43.136c-0.085-7.637 0.384-15.232 1.451-22.784 4.821-34.389 21.504-66.944 49.579-91.349 30.933-26.923 69.803-38.741 107.776-36.096s74.795 19.755 101.717 50.688c10.752 12.203 27.691 17.749 44.075 12.971 9.856-2.859 19.755-6.101 29.653-9.728zM956.757 93.141c-31.573 22.272-64.981 39.509-97.579 51.413-39.723-35.669-89.216-55.552-139.776-59.093-59.648-4.139-121.003 14.464-169.685 56.832-44.203 38.443-70.485 89.899-78.080 143.872-1.579 11.307-2.347 22.741-2.304 34.133-82.005-6.059-157.611-36.267-219.776-84.096-33.067-25.429-62.336-55.851-86.784-90.24-13.653-19.2-40.277-23.765-59.477-10.112-6.571 4.651-11.392 10.795-14.293 17.451 0 0-5.632 12.757-12.16 32.427-4.779 14.379-10.283 33.067-15.232 55.040-6.955 30.805-12.885 68.352-13.909 109.696-1.323 52.352 5.12 111.445 27.819 170.496 29.141 75.733 83.883 148.395 176.939 205.781-66.944 30.976-138.453 44.331-207.915 41.259-23.552-1.024-43.477 17.195-44.501 40.747-0.725 16.597 8.107 31.403 21.888 39.168 209.28 116.267 444.843 114.261 625.749 11.136 172.416-98.176 290.987-285.867 290.987-539.051-0.043-7.125-0.341-14.080-0.981-20.864 42.923-47.573 71.509-103.637 85.163-161.323 5.419-22.912-8.789-45.909-31.701-51.328-12.373-2.944-24.747-0.128-34.432 6.656z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="nav-icon58">
                      <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="nav-icon60">
                      <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                    </svg>
                  </div>
                </ul>
              </div>
              {isLoggedIn ? (
                <>
                 <Link  legacyBehavior  href="/portfolio">
<div style={{cursor: "pointer", width: "45px", height: "45px", padding: "1px", border: "none", marginTop: "5px", borderRadius: "100%", marginLeft: "5px", color: "initial", justifyContent: "center", alignItems: "center", display: "flex" }}><Blockie seed={address} />
   </div>
   </Link>
                </>
              ) : (
                <>
                              <Link  legacyBehavior  href="/portfolio">
<div style={{cursor: "pointer", width: "45px", height: "45px", padding: "1px", border: "none", marginTop: "5px", borderRadius: "100%", marginLeft: "5px", color: "initial", justifyContent: "center", alignItems: "center", display: "flex" }}><Blockie seed={address} />
   </div>
   </Link>
                </>
              ) }

            
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .nav-container {
            width: 100%;
            height: 58px;
            display: flex;
            z-index: 200;
            position: fixed;
            align-items: center;
            flex-direction: column;
            backdrop-filter: blur(20px);
            justify-content: center;
            background-color: rgba(20, 20, 20, 0.38);
          }
          .nav-container01 {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .nav-link {
            display: contents;
          }
          .nav-container02 {
            flex: 0 0 auto;
            width: 281px;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: center;
            justify-content: flex-start;
            text-decoration: none;
          }
          .nav-container03 {
            flex: 0 0 auto;
            width: 136px;
            height: 100%;
            margin: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: flex-start;
          }
          .nav-image {
            width: 54px;
            height: 59px;
            object-fit: cover;
          }
          .nav-text {
            color: rgba(200, 200, 200, 0.8);
            font-size: 24px;
            font-family: 'Arial';
            font-weight: 900;
          }
          .nav-text01 {
            color: #ffffff;
            font-size: 24px;
            font-family: 'Arial';
            font-weight: 900;
          }
          .nav-icon {
            width: 24px;
            height: 24px;
          }
          .nav-icon02 {
            top: 21px;
            fill: #d9d9d9;
            left: 209px;
            width: 12px;
            height: 12px;
            position: absolute;
          }
          .nav-link01 {
            color: #c8c8c8;
            padding: var(--dl-space-space-halfunit);
            transition: 0.3s;
            font-family: 'Arial Black';
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
          }
          .nav-link01:hover {
            background: #222222;
          }
          .nav-link02 {
            color: #c8c8c8;
            padding: var(--dl-space-space-halfunit);
            transition: 0.3s;
            font-family: 'Arial Black';
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
          }
          .nav-link02:hover {
            background: #222222;
          }
          .nav-link03 {
            color: #c8c8c8;
            padding: var(--dl-space-space-halfunit);
            transition: 0.3s;
            font-family: 'Arial Black';
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
          }
          .nav-link03:hover {
            background: #222222;
          }
          .nav-link04 {
            color: #c8c8c8;
            padding: var(--dl-space-space-halfunit);
            transition: 0.3s;
            font-family: 'Arial Black';
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
          }
          .nav-link04:hover {
            background: #222222;
          }
          .nav-container04 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .nav-container05 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .nav-container06 {
            flex: 0 0 auto;
            width: 583px;
            height: 103px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .nav-container07 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .nav-container08 {
            top: 37.9964599609375px;
            left: 100.9990234375px;
            width: 23.985748291015625px;
            height: 23.985748291015625px;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
          .nav-icon04 {
            fill: #7e7e7e;
            left: -57px;
            width: 24px;
            bottom: -2px;
            height: 24px;
            position: absolute;
          }
          .nav-container09 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .nav-container10 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .nav-textinput {
            color: var(--dl-color-gray-900);
            width: 541px;
            height: 40px;
            text-align: center;
            border-color: #e2e2e2;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: rgba(255, 255, 255, 0.14);
          }
          .nav-container11 {
            flex: 0 0 auto;
            width: 44px;
            cursor: pointer;
            height: 41px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .nav-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 31px;
            display: inline-flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius2);
            justify-content: center;
          }
          .nav-icon06 {
            fill: #d9d9d9;
            width: 39px;
            height: 25px;
          }
          .nav-dropdown-list {
            left: 0%;
            width: 141px;
            height: auto;
            display: none;
            padding: var(--dl-space-space-unit);
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #131313;
            list-style-position: inside;
          }
          .nav-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle01 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-dropdown-toggle01:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon08 {
            fill: #00ff14;
            width: 24px;
            height: 24px;
          }
          .nav-text02 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-halfunit);
          }
          .nav-dropdown01 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle02 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .nav-dropdown-toggle02:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon10 {
            fill: #fc8500;
            width: 24px;
            height: 24px;
          }
          .nav-text03 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-halfunit);
          }
          .nav-dropdown02 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-list01 {
            width: 172px;
            height: 90px;
            display: none;
            padding: var(--dl-space-space-halfunit);
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #000000;
            list-style-position: inside;
          }
          .nav-dropdown03 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle03 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-dropdown-toggle03:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon12 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .nav-text04 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown04 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle04 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-dropdown-toggle04:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon14 {
            width: 24px;
            height: 24px;
          }
          .nav-text05 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-container12 {
            flex: 0 0 auto;
            width: 44px;
            cursor: pointer;
            height: 41px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .nav-thq-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle05 {
            fill: #595959;
            color: #595959;
            width: 47px;
            display: inline-flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius2);
            justify-content: center;
          }
          .nav-icon16 {
            fill: #d9d9d9;
            width: 57px;
            height: 37px;
            padding: var(--dl-space-space-halfunit);
          }
          .nav-dropdown-list02 {
            left: 0px;
            width: 134px;
            height: auto;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            list-style-type: none;
            background-color: #131313;
            list-style-position: inside;
          }
          .nav-dropdown05 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle06 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-dropdown-toggle06:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-text06 {
            width: 123px;
            cursor: pointer;
            display: flex;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-halfunit);
          }
          .nav-dropdown06 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle07 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-dropdown-toggle07:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-text07 {
            width: 123px;
            cursor: pointer;
            display: flex;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-halfunit);
          }
          .nav-dropdown-toggle08 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-dropdown-toggle08:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-text08 {
            width: 123px;
            cursor: pointer;
            display: flex;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-halfunit);
          }
          .nav-dropdown-toggle09 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-dropdown-toggle09:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-text09 {
            width: 123px;
            cursor: pointer;
            display: flex;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-halfunit);
          }
          .nav-dropdown-toggle10 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-dropdown-toggle10:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-text10 {
            width: 123px;
            cursor: pointer;
            display: flex;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-halfunit);
          }
          .nav-container13 {
            flex: 0 0 auto;
            width: 44px;
            cursor: pointer;
            height: 41px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .nav-thq-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle11 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .nav-icon18 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .nav-dropdown-list03 {
            left: 0%;
            width: max-content;
            height: auto;
            display: none;
            padding: var(--dl-space-space-unit);
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #131313;
            list-style-position: inside;
          }
          .nav-dropdown07 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle12 {
            display: flex;
            justify-content: center;
            fill: #595959;
            color: #595959;
            width: 100%;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-icon20 {
            fill: #009ff7;
            width: 24px;
            height: 24px;
          }
          .nav-text11 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-halfunit);
          }
          .nav-dropdown08 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle13 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-dropdown-toggle13:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon22 {
            fill: #ef8500;
            width: 24px;
            height: 24px;
          }
          .nav-text12 {
            width: 100%;
            color: white;
            text-align: enter;
            align-items: center;
            justify-content: center;
            margin: 1%;
            border-bottom: solid 1px gray;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown09 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle14 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .nav-dropdown-toggle14:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon24 {
            fill: #ea00ff;
            width: 24px;
            height: 24px;
          }
          .nav-text13 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown10 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle15 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .nav-dropdown-toggle15:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon26 {
            fill: #d9d9d9;
            width: 31px;
            height: 32px;
          }
          .nav-text14 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-container14 {
            flex: 0 0 auto;
            width: 221px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .nav-container15 {
            flex: 0 0 auto;
            width: 142px;
            height: 46px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: center;
          }
          .nav-thq-dropdown3 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle16 {
            fill: #595959;
            color: #595959;
            width: 48px;
            height: 35px;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .nav-icon28 {
            fill: #d9d9d9;
            width: 40px;
            height: 24px;
            z-index: 200;
          }
          .nav-dropdown-arrow {
            transition: 0.3s;
          }
          .nav-dropdown-list04 {
            top: 0;
            right: 100%;
            width: 292px;
            height: 512px;
            display: none;
            padding: var(--dl-space-space-unit);
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            backdrop-filter: blur(10px);
            list-style-type: none;
            background-color: #151515;
            list-style-position: inside;
          }
          .nav-dropdown11 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-list05 {
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: transparent;
            list-style-position: inside;
          }
          .nav-dropdown12 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown13 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle17 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .nav-dropdown-toggle17:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon30 {
            fill: #ec01ff;
            width: 24px;
            height: 24px;
          }
          .nav-text15 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown14 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle18 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .nav-dropdown-toggle18:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon32 {
            fill: #008886;
            width: 24px;
            height: 24px;
          }
          .nav-text16 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown15 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle19 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .nav-dropdown-toggle19:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon35 {
            width: 24px;
            height: 24px;
          }
          .nav-text17 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown16 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle20 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            position: relative;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            text-decoration: none;
          }
          .nav-dropdown-toggle20:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon37 {
            fill: #0144f7;
            width: 24px;
            height: 24px;
          }
          .nav-text18 {
            width: 169px;
            cursor: pointer;
            height: 19px;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-unit);
          }
          .nav-dropdown-list06 {
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #1b1b1b;
            list-style-position: inside;
          }
          .nav-dropdown17 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown18 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-list07 {
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #1b1b1b;
            list-style-position: inside;
          }
          .nav-dropdown19 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown20 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle21 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .nav-dropdown-toggle21:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon40 {
            fill: #f5af00;
            width: 24px;
            height: 24px;
          }
          .nav-text19 {
            width: 169px;
            cursor: pointer;
            height: 19px;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-unit);
          }
          .nav-text20 {
            color: #cecece;
            padding: 4px;
            font-size: 12px;
            border-color: #2b2b2b;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .nav-dropdown-toggle22 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .nav-dropdown-toggle22:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon42 {
            fill: #656565;
            width: 24px;
            height: 24px;
          }
          .nav-text21 {
            width: 169px;
            cursor: pointer;
            height: 19px;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-unit);
          }
          .nav-text22 {
            color: #cecece;
            padding: 4px;
            font-size: 12px;
            border-color: #2b2b2b;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .nav-dropdown-list08 {
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            list-style-position: inside;
          }
          .nav-dropdown21 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius2);
            flex-direction: column;
          }
          .nav-dropdown22 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown23 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle23 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .nav-dropdown-toggle23:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon44 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .nav-text23 {
            width: 169px;
            cursor: pointer;
            height: 19px;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-unit);
          }
          .nav-dropdown24 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle24 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            position: relative;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .nav-dropdown-toggle24:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon46 {
            fill: #016dff;
            width: 24px;
            height: 24px;
          }
          .nav-text24 {
            width: 169px;
            cursor: pointer;
            height: 19px;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-unit);
          }
          .nav-icon48 {
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .nav-dropdown-list09 {
            width: max-content;
            height: 147px;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #1b1b1b;
            list-style-position: inside;
          }
          .nav-dropdown25 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle25 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .nav-dropdown-toggle25:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon50 {
            fill: #e100fe;
            width: 24px;
            height: 24px;
          }
          .nav-text25 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown26 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle26 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .nav-dropdown-toggle26:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon52 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .nav-text26 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown27 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle27 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .nav-dropdown-toggle27:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon54 {
            fill: #00c0ff;
            width: 24px;
            height: 24px;
          }
          .nav-text27 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-container16 {
            width: 100%;
            height: 219px;
            display: flex;
            align-items: flex-end;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .nav-icon56 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .nav-icon58 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .nav-icon60 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .nav-link11 {
            display: contents;
          }
          .nav-container17 {
            flex: 0 0 auto;
            width: 42px;
            height: 40px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            align-self: center;
            align-items: center;
            border-color: #6b6b6b;
            border-width: 3px;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            text-decoration: none;
            background-image: url('/image-200h.webp');
          }
          .nav-thq-dropdown4 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-list10 {
            top: 0;
            right: 100%;
            width: 312px;
            height: 513px;
            display: none;
            padding: var(--dl-space-space-unit);
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            backdrop-filter: blur(10px);
            list-style-type: none;
            background-color: rgba(0, 0, 0, 0.87);
            list-style-position: inside;
          }
          .nav-dropdown28 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-list11 {
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #1b1b1b;
            list-style-position: inside;
          }
          .nav-dropdown29 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown30 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle28 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .nav-dropdown-toggle28:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon62 {
            fill: #ec01ff;
            width: 24px;
            height: 24px;
          }
          .nav-text28 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown31 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle29 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .nav-dropdown-toggle29:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon64 {
            fill: #008886;
            width: 24px;
            height: 24px;
          }
          .nav-text29 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown32 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle30 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .nav-dropdown-toggle30:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon67 {
            width: 24px;
            height: 24px;
          }
          .nav-text30 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown33 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle31 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            position: relative;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .nav-dropdown-toggle31:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon69 {
            fill: #0144f7;
            width: 24px;
            height: 24px;
          }
          .nav-text31 {
            width: 169px;
            cursor: pointer;
            height: 19px;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-unit);
          }
          .nav-dropdown-list12 {
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #1b1b1b;
            list-style-position: inside;
          }
          .nav-dropdown34 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown35 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-list13 {
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #1b1b1b;
            list-style-position: inside;
          }
          .nav-dropdown36 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown37 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle32 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .nav-dropdown-toggle32:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon72 {
            fill: #f5af00;
            width: 24px;
            height: 24px;
          }
          .nav-text32 {
            width: 169px;
            cursor: pointer;
            height: 19px;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-unit);
          }
          .nav-text33 {
            color: #cecece;
            padding: 4px;
            font-size: 12px;
            border-color: #2b2b2b;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .nav-dropdown-toggle33 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .nav-dropdown-toggle33:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon74 {
            fill: #656565;
            width: 24px;
            height: 24px;
          }
          .nav-text34 {
            width: 169px;
            cursor: pointer;
            height: 19px;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-unit);
          }
          .nav-text35 {
            color: #cecece;
            padding: 4px;
            font-size: 12px;
            border-color: #2b2b2b;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .nav-dropdown-list14 {
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #080808;
            list-style-position: inside;
          }
          .nav-dropdown38 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius2);
            flex-direction: column;
          }
          .nav-dropdown-toggle34 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .nav-dropdown-toggle34:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon76 {
            fill: #1bb8c8;
            width: 24px;
            height: 24px;
          }
          .nav-text36 {
            width: 169px;
            cursor: pointer;
            height: 19px;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-unit);
          }
          .nav-dropdown39 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle35 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .nav-dropdown-toggle35:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon78 {
            fill: #e50202;
            width: 24px;
            height: 24px;
          }
          .nav-text37 {
            width: 169px;
            cursor: pointer;
            height: 19px;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-unit);
          }
          .nav-dropdown40 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle36 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .nav-dropdown-toggle36:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon80 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .nav-text38 {
            width: 169px;
            cursor: pointer;
            height: 19px;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-unit);
          }
          .nav-dropdown41 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle37 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            position: relative;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .nav-dropdown-toggle37:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon82 {
            fill: #016dff;
            width: 24px;
            height: 24px;
          }
          .nav-text39 {
            width: 169px;
            cursor: pointer;
            height: 19px;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-unit);
          }
          .nav-icon84 {
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .nav-dropdown-list15 {
            width: max-content;
            height: 147px;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #1b1b1b;
            list-style-position: inside;
          }
          .nav-dropdown42 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle38 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-dropdown-toggle38:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon86 {
            fill: #e100fe;
            width: 24px;
            height: 24px;
          }
          .nav-text40 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown43 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle39 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-dropdown-toggle39:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon88 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .nav-text41 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-dropdown44 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-dropdown-toggle40 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-dropdown-toggle40:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-icon90 {
            fill: #00c0ff;
            width: 24px;
            height: 24px;
          }
          .nav-text42 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-container18 {
            width: 282px;
            height: 219px;
            display: flex;
            align-items: flex-end;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .nav-icon92 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .nav-icon94 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .nav-icon96 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }

          @media (max-width: 1200px) {
            .nav-container02 {
              width: 219px;
            }
            .nav-container06 {
              width: 372px;
            }
            .nav-textinput {
              width: 299px;
              height: 38px;
            }
            .nav-container14 {
              width: auto;
            }
          }
          @media (max-width: 767px) {
            .nav-container {
              width: 766px;
            }
            .nav-container01 {
              width: 494px;
            }
            .nav-link01 {
              display: none;
            }
            .nav-link02 {
              display: none;
            }
            .nav-link03 {
              display: none;
            }
            .nav-link04 {
              display: none;
            }
            .nav-container06 {
              display: none;
            }
            .nav-container11 {
              display: none;
            }
            .nav-container12 {
              display: none;
            }
            .nav-container13 {
              display: none;
            }
            .nav-container14 {
              width: 110px;
              height: 61px;
              justify-content: center;
            }
            .nav-root-class-name7 {
              width: 100%;
            }
            .nav-root-class-name10 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .nav-container {
              width: 100%;
            }
            .nav-container01 {
              width: 100%;
            }
            .nav-container02 {
              width: 243px;
              height: auto;
              justify-content: space-between;
            }
            .nav-container03 {
              width: 49px;
            }
            .nav-icon02 {
              top: 56px;
              right: 19px;
            }
            .nav-container06 {
              display: none;
            }
            .nav-container11 {
              display: none;
            }
            .nav-container12 {
              display: none;
            }
            .nav-container13 {
              display: none;
            }
            .nav-container14 {
              width: auto;
              height: 60px;
            }
            .nav-container15 {
              width: 107px;
            }
            .nav-icon28 {
              fill: #d9d9d9;
            }
            .nav-dropdown-list04 {
              top: 0;
              right: 100%;
              width: 272px;
              display: none;
              background-color: #1a1a1a;
            }
            .nav-dropdown-list10 {
              top: 0;
              right: 100%;
              width: 272px;
              display: none;
              background-color: rgba(0, 0, 0, 0.9);
            }
          }
        `}
      </style>
      </ThemeProvider>
    </>
  )
}

Nav.defaultProps = {
  text5: 'NFTs',
  text321: 'Soon',
  rootClassName: '',
  textinputPlaceholder: 'Search NFT, Tokens, Address',
  text511: 'Stats',
  text: 'Rare',
  text32: 'Soon',
  text5111: 'Mining',
  text4: 'Settings',
  text51: 'Tokens',
  text31: 'Soon',
  imageSrc: '/favicon-200h.webp',
  text2: 'Soon',
  imageAlt: 'image',
  rootClassName1: '',
  text6: 'Simple',
  text3: 'Soon',
  text1: 'Bay',
}

Nav.propTypes = {
  text5: PropTypes.string,
  text321: PropTypes.string,
  rootClassName: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  text511: PropTypes.string,
  text: PropTypes.string,
  text32: PropTypes.string,
  text5111: PropTypes.string,
  text4: PropTypes.string,
  text51: PropTypes.string,
  text31: PropTypes.string,
  imageSrc: PropTypes.string,
  text2: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName1: PropTypes.string,
  text6: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
}

export default Nav
