import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import DesignV from "./design-v";
import "./global.css";
/*
test
*/
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-B7P2MLQHH8"></script>
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
        
        
        <title>YourLeads AI</title>
        <link rel="icon" href="/favicon.png" type="image/png" />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <DesignV />
    </Fragment>
  );
}

export default MyApp;
