import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import GlobalStyle from '../styles/globalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <GlobalStyle />
    </Fragment>
  );
}

export default MyApp
