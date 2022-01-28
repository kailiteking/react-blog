import 'antd/dist/antd.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BlogLayout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BlogLayout>
      <Component {...pageProps} />
    </BlogLayout>
  )
}

export default MyApp
