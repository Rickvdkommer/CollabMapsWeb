import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import DesignV from "./design-v";
import "./global.css";
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FSE2SL24SV"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B7P2MLQHH8');
            `,
          }}
        />
        
        <title>CollabMaps</title>
        <link rel="icon" href="/faviconsquare.png" type="image/png" />

        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />


      </Head>
      <DesignV />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
