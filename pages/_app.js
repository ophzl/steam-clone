import "../styles/globals.css";

import Head from "next/head";
import { AnimateSharedLayout } from "framer-motion";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Steam Clone</title>
      </Head>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </>
  );
}

export default App;
