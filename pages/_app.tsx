import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SuiProvider } from '../context/SuiContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SuiProvider>
      <Component {...pageProps} />
    </SuiProvider>
  )
}