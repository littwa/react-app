import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Opel from "../components/Opel";

class Contact extends React.Component {
  arr = [1, 2, 3, 4, 5, 6, 7];
  render() {
    console.log(this.props);
    return (
      <>
        <div>Contact!!</div>
        {this.arr.map(ar => (
          <NavLink key={ar} to={`${this.props.match.url}/${ar}`}>
            Opel{ar}{" "}
          </NavLink>
        ))}

        <Route exact path={`${this.props.match.path}/:numberopel`} component={Opel} />
      </>
    );
  }
}

export default Contact;
