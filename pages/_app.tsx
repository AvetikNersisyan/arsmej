import { AppProps } from 'next/app'
import '../styles/index.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
   <Script src="https://www.googletagmanager.com/gtag/js?id=G-S653ZNY8SX" />
        <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-S653ZNY8SX');
        `}
      </Script>

      <Component {...pageProps} />
  </>
  )
}

export default MyApp
