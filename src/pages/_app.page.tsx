import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { FC } from 'react'
import { SessionProvider } from 'next-auth/react'

globalStyles()

const App: FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => (
  <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
)

export default App
