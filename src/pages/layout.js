import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      <NavBar />
      <div style={{ paddingBottom: "5%" }}>{children}</div>
      <Footer />
    </div>
  );
}
