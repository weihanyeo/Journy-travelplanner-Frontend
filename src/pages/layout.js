import React from "react";
import NavBar from "../components/NavBar";

export default function RootLayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
