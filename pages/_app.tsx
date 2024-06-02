import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import DesignV from "./design-v";
import "./global.css";
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-T8WWJBTD'
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>CollabMaps</title>
        <link rel="icon" href="/faviconsquare.png" type="image/png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${tagManagerArgs.gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <Component {...pageProps} />
      <DesignV />
    </Fragment>
  );
}

export default MyApp;
