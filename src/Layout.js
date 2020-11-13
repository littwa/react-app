import React from "react";
import Formak from "./Formak";

class Layout extends React.Component {
  render() {
    return (
      <>
        <Formak />
        {this.props.children}
      </>
    );
  }
}

export default Layout;
