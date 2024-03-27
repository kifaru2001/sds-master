import Head from 'next/head'
import Nav from '../components/nav'
import Greetings from '../components/greetings'
import Ap from "../components/App" 
import Ap2 from "../components/Btc" 


const Portfolio = (props) => {

  return (
    <>
      <div className="portfolio-container">
        <Head>
          <title>
            Portfolio - Crazy-Fast! secure! Rare! Decentralized Exchange
          </title>
          <meta
            name="description"
            content="Verify, Mine, Stake, Trade, Swap, Track, Inscribe, Farm, Earn, Borrow, Lend, play! faster than ever, seamlessly anywhere anytime. "
          />
          <meta
            property="og:title"
            content="portfolio - Crazy-Fast! secure! Rare! Decentralized Exchange"
          />
          <meta
            property="og:description"
            content="Verify, Mine, Stake, Trade, Swap, Track, Inscribe, Farm, Earn, Borrow, Lend, play! faster than ever, seamlessly anywhere anytime. "
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/570fd2b2-89a0-4703-b4a7-3e4f1651829b/fb5a79b8-3e32-4626-b82b-b7d8be5392f1?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Nav rootClassName="nav-root-class-name5"></Nav>
        <div className="portfolio-container01"></div>
        <div className="portfolio-container02">
          <Greetings></Greetings>
          <div className="portfolio-container12">
            <div className="portfolio-container13">
           
            
            </div>
            
          </div>
          <div style={{display: "flex", width: "100%", justifyContent: "center", alignItems: "center", marginTop: "-2%", boxShadow: "1px 1px 20px initial"}} className='column'>
        
        <Ap />
        <Ap2 />
        </div>
        </div>
      </div>
      <style jsx>
        {`
          .portfolio-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .portfolio-container01 {
            width: 100%;
            height: 66px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .portfolio-container02 {
            width: 100%;
            height: auto;
            display: flex;
            padding: 2px;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .portfolio-container03 {
            width: 100%;
            height: 65px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .portfolio-container04 {
            flex: 0 0 auto;
            width: 450px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .portfolio-text {
            color: rgb(177, 177, 177);
            padding: var(--dl-space-space-unit);
            font-size: 20px;
            font-family: 'Arial Black';
          }
          .portfolio-text1 {
            color: rgb(177, 177, 177);
            padding: var(--dl-space-space-unit);
            font-size: 20px;
            font-family: 'Arial Black';
          }
          .portfolio-container05 {
            flex: 0 0 auto;
            width: 727px;
            height: 103px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .portfolio-container06 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .portfolio-container07 {
            top: 37.9964599609375px;
            left: 100.9990234375px;
            width: 23.985748291015625px;
            height: 23.985748291015625px;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
          .portfolio-icon {
            top: 0px;
            fill: #7e7e7e;
            left: 0px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .portfolio-container08 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .portfolio-container09 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .portfolio-textinput {
            color: var(--dl-color-gray-900);
            width: 541px;
            height: 40px;
            text-align: center;
            border-color: #e2e2e2;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: rgba(255, 255, 255, 0.14);
          }
          .portfolio-container10 {
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
          .portfolio-icon02 {
            top: 0px;
            fill: #d9d9d9;
            left: 0px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .portfolio-container11 {
            flex: 0 0 auto;
            width: 205px;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .portfolio-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .portfolio-dropdown-toggle {
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
            background-color: rgba(65, 65, 65, 0.08);
          }
          .portfolio-text2 {
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-right: 4px;
            vertical-align: middle;
          }
          .portfolio-dropdown-arrow {
            transition: 0.3s;
          }
          .portfolio-icon04 {
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .portfolio-dropdown-list {
            left: 0%;
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
            background-color: #1e1e1e;
            list-style-position: inside;
          }
          .portfolio-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .portfolio-dropdown-toggle1 {
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
          .portfolio-dropdown-toggle1:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .portfolio-text3 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .portfolio-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .portfolio-dropdown-toggle2 {
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
          .portfolio-dropdown-toggle2:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .portfolio-text4 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .portfolio-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .portfolio-dropdown-toggle3 {
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
          .portfolio-dropdown-toggle3:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .portfolio-text5 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .portfolio-container12 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .portfolio-container13 {
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            padding: 1%;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: center;
          }
          .portfolio-container14 {
            width: 100%;
            height: 289px;
            display: flex;
            align-items: center;
            border-color: #232323;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .portfolio-icon06 {
            fill: #d9d9d9;
            width: 257px;
            height: 82px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .portfolio-text6 {
            color: rgb(206, 206, 206);
          }
          .portfolio-text7 {
            color: rgb(97, 97, 97);
          }
          @media (max-width: 1200px) {
            .portfolio-container02 {
              width: 100%;
              height: auto;
            }
            .portfolio-container05 {
              width: 560px;
            }
            .portfolio-icon02 {
              left: -83px;
              bottom: 0px;
            }
            .portfolio-container12 {
              width: auto;
              height: auto;
            }
            .portfolio-container13 {
              width: 100%;
              height: auto;
            }
            .portfolio-container14 {
              width: 100%;
            }
            .portfolio-text6 {
              color: rgb(206, 206, 206);
            }
            .portfolio-text7 {
              color: rgb(97, 97, 97);
            }
          }
          @media (max-width: 767px) {
            .portfolio-container02 {
              height: 1600px;
            }
            .portfolio-container03 {
              width: 100%;
              justify-content: space-between;
            }
            .portfolio-container04 {
              width: 263px;
            }
            .portfolio-text {
              display: none;
            }
            .portfolio-text1 {
              display: none;
            }
            .portfolio-container05 {
              display: none;
            }
            .portfolio-container12 {
              width: 100%;
            }
            .portfolio-container13 {
              width: auto;
              height: auto;
            }
            .portfolio-container14 {
              width: 315px;
              height: 569px;
            }
          }
          @media (max-width: 479px) {
            .portfolio-container01 {
              width: 100%;
            }
            .portfolio-container02 {
              width: 100%;
              height: auto;
              padding: 0px;
            }
            .portfolio-container04 {
              width: 206px;
              height: 54px;
            }
            .portfolio-text {
              display: flex;
            }
            .portfolio-text1 {
              display: flex;
            }
            .portfolio-container05 {
              display: none;
            }
            .portfolio-container11 {
              width: 135px;
            }
            .portfolio-text2 {
              color: #bdbdbd;
            }
            .portfolio-container12 {
              width: 100%;
            }
            .portfolio-container13 {
              width: 100%;
              background-color: transparent;
            }
            .portfolio-container14 {
              width: 100%;
              background-color: rgba(21, 21, 21, 0.87);
            }
            .portfolio-text6 {
              width: 349px;
              height: 85px;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Portfolio
