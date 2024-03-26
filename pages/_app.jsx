import "./style.css";
import styles from "../styles/x.module.scss"
import { ThirdwebProvider, lightTheme, okxWallet } from "@thirdweb-dev/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import styled, { createGlobalStyle } from "styled-components";
import NextNProgress from "nextjs-progressbar";
import { NETWORK } from "../const/contractAddresses";
import {
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  useAddress,
  smartWallet
} from "@thirdweb-dev/react";


import { ChakraProvider } from '@chakra-ui/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import Snowfall from 'react-snowfall'
import {BannerStrip } from "web3uikit"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 
import { WagmiProvider } from 'wagmi'


const queryClient = new QueryClient() 



import React from "react";
export default function MyApp({ Component: Component, pageProps: pageProps }) {

  return (
    <ChakraProvider theme={"dark"}>
      
    <ThirdwebProvider
    clientId="678d5b0199cde588796872ea22804505"
    authConfig={{
      domain: "rarebay.xyz",
      authUrl: "/api/auth",
    }}
    activeChain={NETWORK}
    supportedWallets={
      [
        metamaskWallet(),
        walletConnect(),
        okxWallet(),
        localWallet(),
      smartWallet(embeddedWallet({ recommended: true }), {
        factoryAddress: "0xA8e018B24A661Cff59A5b2d9E0Ab6f542Df961C6",
        gasless: true,
      }),


    ]}
  >

      <NextNProgress
        color="white"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
     
      <NextThemesProvider attribute="class" defaultTheme="dark">
<div  style={{position: "fixed",  zIndex: "-1",  width: "100%", height: "100%", justifyContent: "center", alignItems: "center", display: "flex"}}>
<div style={{position: "fixed", zIndex: "-1"}} className={styles.gradient} />
</div>

      <Component className="body" {...pageProps} />
      <div style={{position: "fixed", justifyContent: "end", alignItems: "end", display: "flex", flexDirection: "row"}} className={styles.gradient} />
      <SpeedInsights/>  
      <Analytics />
     
      </NextThemesProvider>
   
   
  </ThirdwebProvider>

  </ChakraProvider>

  
  )
}