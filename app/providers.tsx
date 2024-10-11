'use client'
import ProviderProps from '@/interface/props/ProviderProps'
import { ChakraProvider, extendTheme, StyleFunctionProps, type ThemeConfig } from '@chakra-ui/react'
import Aos from 'aos'
import React, { useEffect } from 'react'
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  colors: {
    bg: '#1b1b1b',
    card: '#2a2a2a',
    card40: '#2a2a2a28',
    card60: '#2a2a2a3c',
    text: '#d6d6d8',
    text95: '#d6d6d864',
    primary: '#7a22c9',
    primary20: '#7a22c9',
    error: '#ff5252',
    success: '#80ff52',
    footer: '#141414',
    white10: '#ffffff0a',
    white20: '#ffffff14',
    white40: '#ffffff28',
    hover: {
      primary: '#661ca7'
    }
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      "*": {
        scrollbarWidth: 'thin'
      },
      body: {
        bg: 'bg',
        color: 'text',
        fontWeight: 500
      },
      '.ps__rail-x, .ps__rail-y': {
        backgroundColor: 'rgba(255, 255, 255, 0)',
      },
      '.ps__thumb-x, .ps__thumb-y': {
        backgroundColor: 'rgba(255, 255, 255, 0)',
      },
    })
  }
})

export { theme as ConfigTheme }

export default function Provider(props: ProviderProps) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <ChakraProvider theme={theme}>
      <PerfectScrollbar
        options={{
          wheelSpeed: .5,
          swipeEasing: true,
        }}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0)'
        }}
      >
        {props.children}
      </PerfectScrollbar>
    </ChakraProvider>
  )
}
