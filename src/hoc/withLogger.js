import React from "react";
// import { T } from "../components/App";
import App from "../components/App";
// console.log(T);

//----------------V1-------------------
// export const withT = WrappedComp => {
//  return function WithT(props) {
//   return <T.Consumer>{context => <WrappedComp {...props} context={context} />}</T.Consumer>;
//  };
// };
//----------------V2-------------------
export const withT = WrappedComp => props => (
 <App.T.Consumer>{context => <WrappedComp {...props} context={context} />}</App.T.Consumer>
);

//-----------------------------RenderProps--------------------------------------------
class RenderProps extends React.Component {
 state = { x: "Mrecedes", y: "S-63", z: "AMG" };

 render() {
  return (
   <>
    {this.props.children(this.state.x, this.state.y, this.state.z)}
    {this.props.children(-2, 2, 1)}
    <p>1212</p>
   </>
  );
 }
}

export default RenderProps;
