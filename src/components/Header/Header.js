import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
class Header extends React.Component {
 render() {
  return (
   <div className={style.head}>
    <h5 className={style.title}>Header</h5>
    <ul className={style.nav}>
     <li>
      <NavLink to={"/"}>Home</NavLink>
     </li>
     <li>
      <NavLink to={"/search"}>Search</NavLink>
     </li>
     <li>
      <NavLink to={"/about"}>About</NavLink>
     </li>
    </ul>
   </div>
  );
 }
}

export default Header;
