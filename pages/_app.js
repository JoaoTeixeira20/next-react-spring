import React from 'react'
import App from 'next/app'
import SpringContextProvider from './context/SpringContext'
import '../styles/globals.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <SpringContextProvider><Component {...pageProps} /></SpringContextProvider>
  }
}

export default MyApp
