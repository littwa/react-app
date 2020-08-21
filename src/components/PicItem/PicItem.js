import React from "react";
import { NavLink } from "react-router-dom";
import style from "./PicItem.module.css";

let PicItem = ({ pictures, location }) => {
 // handleClick(e){

 // }
 console.log(location);
 return pictures.map(p => (
  <li key={p.id}>
   <NavLink to={{ pathname: "/detail", state: { from: location, pic: pictures } }}>
    <img className={style.pic} src={p.webformatURL} alt="pic" />
   </NavLink>
  </li>
 ));
};

export default PicItem;
