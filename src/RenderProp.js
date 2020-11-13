import React from "react";

class RenderProp extends React.Component {
  state = { tank: "Oplot" };
  render() {
    return this.props.children({ tank: this.state.tank });
  }
}

export default RenderProp;
