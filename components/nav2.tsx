import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useState } from 'react'
import styles from "./nav.module.css"
import Dex from './dex'
import Add from './add'

const Nav2 = (props: { rootClassName: any }) => {
  const [tab, setTab] = useState<"Swap" | "liquididty" >("Swap");

  return (
    <>
      <div className={`nav2-container ${props.rootClassName} `}>
      <div className={styles.tabs}> 
          <a className="nav2-link">
            <div id="swap" className="nav2-container1">
            <h1
          className={`${styles.tab} 
        ${tab === "Swap" ? styles.activeTab : ""}`}
          onClick={() => setTab("Swap")}
        >
          SWAP
        </h1>
            </div>
          </a>

           <Link  legacyBehavior  href="/liquidity">
          <a className="nav2-link1">
            <div className="nav2-container2">
            <h1
          className={`${styles.tab} 
        ${tab === "Swap" ? styles.activeTab : ""}`}
          onClick={() => setTab("Swap")}
        >
          Liquididty
        </h1>
            </div>
          </a>
        </Link>
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
          tab === "liquididty" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        <Add />
      </div>
 
      
      <style jsx>
        {`
          .nav2-container {
            width: 100%;
            height: 51px;
            display: flex;
            position: fixed;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: #010101;
          }
          .nav2-link {
            display: contents;
          }
          .nav2-container1 {
            width: 85px;
            cursor: pointer;
            height: 50px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            justify-content: center;
            text-decoration: none;
          }
          .nav2-container1:hover {
            border-bottom: solid 7px #535353;
          }
          .nav2-container1:active {
            border-bottom: solid 7px #535353;
          }
          .nav2-text {
            color: #c6c6c6;
            font-size: 1.2em;
          }
          .nav2-link1 {
            display: contents;
          }
          .nav2-container2 {
            width: 108px;
            cursor: pointer;
            height: 50px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            justify-content: center;
            text-decoration: none;
          }
          .nav2-container2:hover {
            border-bottom: solid 7px #535353;
          }
          .nav2-container2:active {
            border-bottom: solid 7px #535353;
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
