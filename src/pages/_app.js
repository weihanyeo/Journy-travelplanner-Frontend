import "./globals.css";
import RootLayout from "./layout";
import { SessionProvider } from "next-auth/react";

import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap stylesheet

export default function App({ Component, pageProps }) {

  /* return (
    <SessionProvider session={pageProps.session}>
      {Component.auth ? (
        <Auth>
          <RootLayout>
            <Component {...pageProps.session} />
          </RootLayout>
        </Auth>
      ) : (

        <RootLayout>
          <Component {...pageProps.session} />
        </RootLayout>
      )}
    </SessionProvider>
  ); */

  return (

    /* <SessionProvider session={pageProps.session}>
      <RootLayout>
        <Component {...pageProps.session} />
      </RootLayout>
    </SessionProvider> */

    < RootLayout >
      <Component {...pageProps} />
    </RootLayout >
  )
}
