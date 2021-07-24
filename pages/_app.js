import { useState } from 'react'
import '../styles/globals.scss'
import ThemeButton from '../components/theme.button'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeButton />
      <div>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
