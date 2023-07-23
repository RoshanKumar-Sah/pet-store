import Header from '@/components/Header'
import '@/styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
  </>
}
