import React from "react";
import { connect } from "react-redux";
import { actionCreator1, actionCreator2 } from "../../redux/reduxActions";

class About extends React.Component {
 handleSubmit = e => {
  e.preventDefault();
  this.props.method(10);
  this.props.method2(100, 200);
 };
 render() {
  return (
   <div>
    <p>{this.props.x}</p><button type="button" onClick={this.handleSubmit}>Press</button>
   </div>
  );
 }
}

const mapStateToProps = state => ({ x: state.reducer1.t });
const mapDispatchToProps = { method: actionCreator1, method2: actionCreator2 };
// const mapDispatchToProps = dispatch => ({
//  method: z => dispatch(indexJS.actionCreator1(z)),
//  method2: (z, w) => dispatch(indexJS.actionCreator2(z, w))
// });
export default connect(mapStateToProps, mapDispatchToProps)(About);

// import style from "./About.module.css";

// className={style.content}
