import * as React from "react";
import Header from "./header";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <html lang="en">
      <Header></Header>
      <div>{children}</div>
      <Footer></Footer>
    </html>
  );
};

export default Layout;
