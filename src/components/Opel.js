import React from "react";
import RenderProp from "../RenderProp";
import style from "./Opel.module.css";

import { connect } from "react-redux";
import withContextComp from "../Context/withContextComp";
import { CSSTransition } from "react-transition-group";
import amim from "./Animation.module.css";
import animappear from "./AnimAppear.module.css";
import chaining from "./Chaining.module.css";

class Opel extends React.Component {
  state = { show: false };
  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  handle = e => {
    e.preventDefault();

    this.props.method1(7);
  };
  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <>
        <CSSTransition appear={true} in={true} timeout={1000} unmountOnExit classNames={animappear}>
          {stage => (
            <div style={{ width: "max-content" }}>
              <span>First Anime!</span>{" "}
              <CSSTransition
                in={stage === "entered"}
                timeout={900}
                unmountOnExit
                classNames={chaining}
              >
                <span style={{ display: "inline-block" }}>Second Anime!</span>
              </CSSTransition>
            </div>
          )}
        </CSSTransition>
        <button onClick={this.handleClick}>{this.state.show === false ? "Show" : "Hide"}</button>
        <CSSTransition in={this.state.show} timeout={500} unmountOnExit classNames={amim}>
          <div className={style.q} style={{ color: "red" }} onClick={this.handle}>
            Opel Component!!! | {this.props.match.params.numberopel}
          </div>
        </CSSTransition>
        <RenderProp>{({ tank }) => <div>{tank}</div>}</RenderProp>
      </>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   method1: number => dispatch({ type: "test", payload: { number } }),
// });

// const mapStateToProps = state => ({ proper: state.reducer1.t });

// const actionCreator1 = number => ({ type: "test", payload: { number } });

// const mapDispatchToProps = { method1: actionCreator1 };

// export default connect(mapStateToProps, mapDispatchToProps)(Opel);

const mapStateToProps = state => ({ propeeeeer: state.reducer1.t });

const actionCreator1 = number => ({ type: "test", payload: { number } });

const mapDispatchToProps = { method1: actionCreator1 };

export default connect(mapStateToProps, mapDispatchToProps)(withContextComp(Opel));
