import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import GlobalStyle from '../styles/global.style'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <Fragment>
         <GlobalStyle />
         <Component {...pageProps} />
      </Fragment>
   )
}

export default MyApp
