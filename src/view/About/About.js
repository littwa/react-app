import React from "react";
import { connect } from "react-redux";
import { actionCreator1, actionCreator2, reduxOperation } from "../../redux/reduxActions";

class About extends React.Component {
 handleSubmit = e => {
  e.preventDefault();
  this.props.actionCreator1(10);
  this.props.actionCreator2(100, 200);
  this.props.reduxOperation(1, 2);
 };
 render() {
  return (
   <div>
    <p>
     {this.props.x} {this.props.x2.g} {this.props.x2.k}
    </p>
    <button type="button" onClick={this.handleSubmit}>
     Press
    </button>
   </div>
  );
 }
}

const mapStateToProps = state => ({ x: state.reducer1.t, x2: state.reducer2 });
const mapDispatchToProps = { actionCreator1, actionCreator2, reduxOperation };
// const mapDispatchToProps = dispatch => ({
//  method: z => dispatch(actionCreator1(z)),
//  method2: (z, w) => dispatch(actionCreator2(z, w))
// });
export default connect(mapStateToProps, mapDispatchToProps)(About);

// import style from "./About.module.css";

// className={style.content}
