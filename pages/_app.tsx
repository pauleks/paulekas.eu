import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="the virtual home on the web of Paulius / ghostwolf"
        />
        <meta property="og:title" content="paulekas.eu" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://paulekas.eu/" />
        <meta property="og:image" content="https://paulekas.eu/embed.png" />
        <meta
          property="og:description"
          content="the virtual home on the web of Paulius / ghostwolf"
        />
        <meta name="twitter:title" content="paulekas.eu" />
        <meta
          name="twitter:description"
          content="the virtual home on the web of Paulius / ghostwolf"
        />
        <meta name="twitter:image" content="https://paulekas.eu/embed.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
