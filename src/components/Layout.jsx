import React from "react";
import Header from "./Header";
import Footer from "./Footer";

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
