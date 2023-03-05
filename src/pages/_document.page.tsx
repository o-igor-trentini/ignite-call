import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@ignite-ui/react'
import { FC } from 'react'

const Document: FC = () => (
  <Html lang="pt-BR">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    </Head>

    <body>
      <Main />

      <NextScript />
    </body>
  </Html>
)

export default Document
