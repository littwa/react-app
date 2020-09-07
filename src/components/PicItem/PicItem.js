import React from "react";
import { NavLink } from "react-router-dom";
import style from "./PicItem.module.css";
import { render } from "@testing-library/react";
// import App from "../App";
// import { Qw } from "../App";

class PicItem extends React.Component {
 componentDidMount() {
  console.log(this.props);
 }

 cbClick = v => {
  this.props.onCh(v);
 };

 render() {
  let { pictures, location } = this.props;
  console.log(1111, this.props);
  return pictures.map(p => (
   <li key={p.id} onClick={() => this.cbClick(p)}>
    <NavLink to={{ pathname: `/detail/${p.id}`, state: { from: location, pic: p } }}>
     <img className={style.pic} src={p.webformatURL} alt="pic" />
    </NavLink>
    <NavLink to={{ pathname: `/detail`, state: { from: location, pic: p } }}>
     <div>{p.tags}</div>
    </NavLink>
   </li>
  ));
 }
}

export default PicItem;
