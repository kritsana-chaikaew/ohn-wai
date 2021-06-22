import React, { useEffect } from 'react'
import propTypes from 'prop-types'
import '../styles/globals.css'

const liffId = process.env.NEXT_PUBLIC_LIFF_ID

export default function App ({ Component, pageProps }) {
  useEffect(async () => {
    if (process.env.NODE_ENV === 'production') {
      const liff = (await import('@line/liff')).default
      try {
        await liff.init({ liffId })
      } catch (error) {
        console.error('liff init error', error.message)
      }
      if (!liff.isLoggedIn()) {
        liff.login()
      }
    }
  }, [])
  return <Component {...pageProps} />
}
App.defaultProps = {
  pageProps: null,
  Component: null
}

App.propTypes = {
  Component: propTypes.any,
  pageProps: propTypes.any
}
