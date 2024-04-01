import AuthProvider from "./AuthProvider"
import "./globals.css";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap stylesheet

export default function App({ Component, pageProps }) {

  return (
    <div>
      <AuthProvider>
        <NavBar />
        <Component {...pageProps} />
        <div style={{ paddingBottom: "15%" }} />
      </AuthProvider>
      <Footer />
    </div >
  )
}
