import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment, useEffect } from "react";
import DesignV from "./design-v";
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Google Tag Manager script
    const script = document.createElement('script');
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-T8WWJBTD');`;
    document.head.appendChild(script);
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
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FSE2SL24SV"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FSE2SL24SV');
            `,
          }}
        />
      </Head>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T8WWJBTD"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
      </noscript>
      <DesignV />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
