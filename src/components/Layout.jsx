import React from "react";
import Footer from "../pages/Footer";
import Header from "../pages/Header";

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 mt-5">{children}</main>
      <Footer className="fixed-bottom" />
    </div>
  );
}

export default Layout;
