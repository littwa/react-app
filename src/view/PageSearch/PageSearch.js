import React from "react";
import style from "./PageSearch.module.css";
import { NavLink } from "react-router-dom";

class PageSearch extends React.Component {
 render() {
  console.log(this.props);
  return (
   <div className={style.content}>
    <div>PageSearch</div>
    <NavLink to={{ pathname: `${this.props.match.url}/inner`, state: { from: this.props.location } }}>
     to inner
    </NavLink>
   </div>
  );
 }
}

export default PageSearch;
