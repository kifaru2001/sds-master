import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useState } from 'react'
import styles from "./nav.module.css"
import Dex from './dex'
import Add from '../pages/liquidity'

const Nav2 = (props: { rootClassName: any }) => {
  const [tab, setTab] = useState<"Swap" | "liquidity" >("Swap" || "");

  return (
    <>
      <div className={`nav2-container ${props.rootClassName} `}>
      <div className={styles.tabs}> 
     
           
            <h1
          className={`${styles.tab} 
        ${tab === "Swap" ? styles.activeTab : ""}`}
          onClick={() => setTab("Swap")}
        >
          Swap
        </h1>
         
          
       
        
            <h1
          className={`${styles.tab} 
        ${tab === "liquidity" ? styles.activeTab : ""}`}
          onClick={() => setTab("liquidity")}
        >
          Liquidity
        </h1>
       
       
      </div>
      </div>
      <div
        className={`${
          tab === "Swap" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        <Dex />
      </div>
      <div
        className={`${
          tab === "liquidity" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        <Add />
      </div>
 
      
      <style jsx>
        {`
        @font-face {
          font-family: consolas;
          src: url("../public/fonts/pixel_nes.otf");
        }        
          .nav2-container {
            width: 100%;
            height: 51px;
            display: flex;
            position: fixed;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: #010101;
            font-family: Pixel Nes
          }
          .nav2-link {
            display: contents;
          }
       
          .nav2-text {
            color: #c6c6c6;
            font-size: 1.2em;
          }
          .nav2-link1 {
            display: contents;
          }

          .nav2-text1 {
            color: #c6c6c6;
            font-size: 1.2em;
          }
          .nav2-root-class-name {
            margin-top: 58px;
            background-color: #0a0a0a;
          }
          .nav2-root-class-name1 {
            margin-top: 58px;
          }
          .nav2-root-class-name2 {
            margin-top: 58px;
          }
          .nav2-root-class-name3 {
            margin-top: 58px;
          }
          .nav2-root-class-name4 {
            margin-top: 58px;
          }
          .nav2-root-class-name5 {
            margin-top: 58px;
          }
        `}
      </style>
    </>
  )
}

Nav2.defaultProps = {
  heading2: 'Liquidity',
  heading1: 'Liquididty',
  heading: 'Swap',
  rootClassName: '',
}

Nav2.propTypes = {
  heading2: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Nav2
