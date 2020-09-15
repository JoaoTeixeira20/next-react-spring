import React from 'react'
import App from 'next/app'
import SpringContextProvider from '../context/SpringContext'
import '../styles/globals.css'
import Header from '../components/main/Header'
import Layout from '../components/main/Layout'

class MyApp extends App {
  
  render() {
    const { Component, pageProps, router } = this.props

    console.log('props are ', this)
    return <SpringContextProvider>
        <Layout>
          <Header/>
          <Component {...pageProps} key={router.route}/>
        </Layout>
      </SpringContextProvider>
  }
}

export default MyApp
