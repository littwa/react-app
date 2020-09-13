import React from "react";

class RenderProp extends React.Component {
  state = {
    q: 7,
    n: 5,
  };

  render() {
    return this.props.children(this.state.q, this.state.n);
  }
}
export default RenderProp;
