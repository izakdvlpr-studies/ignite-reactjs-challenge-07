/* eslint-disable @next/next/no-page-custom-font */

import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            rel="shortcut icon"
            href="/images/logo-icon.png"
            type="image/png"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Barlow:wght@500;600&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
