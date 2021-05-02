import "../styles/globals.css";
import "../styles/backgrounds.css";

import Head from "next/head";
import { AnimateSharedLayout } from "framer-motion";
import dynamic from "next/dynamic";
import { ThemeProvider } from "../hooks/useTheme";
import { AuthProvider } from "../hooks/useAuth";
import { InstallProvider } from "../hooks/useInstall";

const Loader = dynamic(
  () => {
    return import("../components/Layout/TopLoader");
  },
  { ssr: false }
);

function App({ Component, pageProps }) {
  return (
    <>
      <Loader />
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="An open-source game launcher and game store"
        />
        <meta
          name="keywords"
          content="vapor;steam;floriaaan;ophzl;game;games"
        />
        <title>Vapor</title>
        <link rel="manifest" href="/manifest.json" />
        {/* <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png" /> */}
        <meta name="theme-color" content="#ffb700" />
      </Head>
      <InstallProvider>
        <AuthProvider>
          <ThemeProvider>
            <AnimateSharedLayout>
              <Component {...pageProps} />
            </AnimateSharedLayout>
          </ThemeProvider>
        </AuthProvider>
      </InstallProvider>
    </>
  );
}

export default App;
