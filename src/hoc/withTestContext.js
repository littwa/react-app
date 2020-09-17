import React from "react";
import { testContext } from "../view/Home/Home";

const withTestContext = WrappedComponent => {
 return function WithTestContext(props) {
  return (
   <testContext.Consumer>
    {ctx => <WrappedComponent {...props} ctx={ctx}></WrappedComponent>}
   </testContext.Consumer>
  );
 };
};

export default withTestContext;
