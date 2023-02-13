import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, global }) => {
  return (
    <>
      <Header global={global} heroOn={true} />
      <div className="app-container">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
