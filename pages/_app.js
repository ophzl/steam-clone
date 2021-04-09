import "../styles/globals.css";

import Head from "next/head";
import { AnimateSharedLayout } from "framer-motion";
import dynamic from "next/dynamic";

const Loader = dynamic(
  () => {
    return import("../components/Layout/TopLoader");
  },
  { ssr: false }
);

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Vapor</title>
      </Head>
      <AnimateSharedLayout>
        <Component {...pageProps} />
        <Loader></Loader>
      </AnimateSharedLayout>
    </>
  );
}

export default App;
