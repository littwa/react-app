import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import RenderP from "../../hoc/withLogger";

import { withT } from "../../hoc/withLogger";

class Header extends React.Component {
 render() {
  console.log(9, this.props);
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
    <RenderP>
     {(kiev, neznun, auto) => (
      <>
       <span>{kiev}|</span>
       <span>{neznun}|</span>
       <span>{auto}</span>
      </>
     )}
    </RenderP>
   </div>
  );
 }
}

export default withT(Header);
