import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import DesignV from "./design-v";
import "./global.css";
import Script from 'next/script';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>CollabMaps</title>
        <link rel="icon" href="/faviconsquare.png" type="image/png" />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <meta property="og:title" content="CollabMaps" />
        <meta property="og:description" content="Connecting Content Creators with Businesses" />
        <meta property="og:image" content="/opengraphimage.png" />
        <meta property="og:url" content="https://collabmaps.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FSE2SL24SV"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B7P2MLQHH8');
          `,
        }}
      />
      <DesignV />
    </Fragment>
  );
}

export default MyApp;
