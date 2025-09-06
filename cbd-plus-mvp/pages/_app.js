import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    // Simple direction toggle based on locale
    if (router.locale === 'ar') {
      document.documentElement.dir = 'rtl'
    } else {
      document.documentElement.dir = 'ltr'
    }
  }, [router.locale])
  return <Component {...pageProps} />
}

export default MyApp
