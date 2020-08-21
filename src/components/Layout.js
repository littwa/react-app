import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import style from "./Layout.module.css";

let Layout = ({ children }) => (
 <div className={style.lay}>
  <Header />
  {children}
  <Footer />
 </div>
);

export default Layout;
