import React from "react";

const ContextComp = React.createContext();

class ContextCompProvider extends React.Component {
  static Consumer = ContextComp.Consumer;
  method() {}
  state = {
    value: 17,
    method: this.method,
  };

  render() {
    return <ContextComp.Provider value={this.state}>{this.props.children}</ContextComp.Provider>;
  }
}

export default ContextCompProvider;
