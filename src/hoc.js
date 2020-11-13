import React from "react";
const withLog = Component => {
  return class WithLogComponent extends React.Component {
    componentDidMount() {
      console.log("LOG!");
    }

    render() {
      return <Component {...this.props} extraProps="Log" />;
    }
  };
};

export default withLog;
