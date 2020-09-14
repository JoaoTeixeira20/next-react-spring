import React from 'react'
import App from 'next/app'
import SpringContextProvider from '../context/SpringContext'
import '../styles/globals.css'

class MyApp extends App {
  
  render() {
    const { Component, pageProps, router } = this.props

    console.log('props are ', this)
    return <SpringContextProvider><Component {...pageProps} key={router.route}/></SpringContextProvider>
  }
}

export default MyApp
