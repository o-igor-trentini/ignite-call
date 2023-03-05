import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { FC } from 'react'

globalStyles()

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default App
