import React from "react";
import ContextCompProvider from "./ContextCompProvider";

const withContextComp = WrappedComponent => {
  return class WithContextComp extends React.Component {
    render() {
      return (
        <ContextCompProvider.Consumer>
          {ctx => <WrappedComponent {...this.props} ctxprop={ctx} />}
        </ContextCompProvider.Consumer>
      );
    }
  };
};

export default withContextComp;
