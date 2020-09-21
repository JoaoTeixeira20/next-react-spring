import React from 'react'
import App from 'next/app'
import SpringContextProvider from '../context/SpringContext'
import '../styles/globals.css'
import Layout from '../components/main/Layout'
import { Transition, animated } from "react-spring";

class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  
  render() {
    const { Component, pageProps } = this.props
    const items = [
      {
        id: this.props.router.route,
        Component,
        pageProps
      }
    ];

    return <SpringContextProvider>
        <Layout>
            <Transition
              items={items}
              keys={(item) => item.id}
              initial={{
                opacity: 0,
                transform: "translate3D(0%, 0%, 0) rotate(0deg)"
              }}
              from={{
                opacity: 0,
                transform: "translate3D(-50%, 0%, 0) rotate(-45deg)"
              }}
              enter={{
                opacity: 1,
                transform: "translate3D(0%, 0%, 0) rotate(0deg)",
              }}
              leave={{
                position: "absolute",
                opacity: 0,
                transform: "translate3D(50%, 0%, 0) rotate(45deg)",
              }}
            >
              {(styles, { pageProps, Component }) => (
                <animated.div style={{ ...styles, width:"100%", height:"100%", background:"linear-gradient(0deg, rgba(238,174,202,1) 0%, rgba(164,170,169,1) 0%, rgba(105,150,173,1) 0%, rgba(173,216,230,1) 100%)"}}>
                  <Component {...pageProps} />
                </animated.div>
              )}
            </Transition>
        </Layout>
      </SpringContextProvider>
  }
}

export default MyApp
