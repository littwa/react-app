// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";
// import styles from "./styles.css";
// import { BrowserRouter } from "react-router-dom";

// import { Provider } from "react-redux";
// import { configureStore, createReducer } from "@reduxjs/toolkit";
// import { actionCreator1, actionCreator2, actionCreator3 } from "./redux/reduxActions";
// // import { createStore, combineReducers } from "redux";

// const reducer1 = createReducer(
//   { t: 0 },
//   { [actionCreator1]: (state, action) => ({ t: state.t + action.payload }) },
// );

// const reducer2 = createReducer(
//   { g: 1, k: 5 },
//   {
//     [actionCreator2]: (state, action) => ({
//       g: state.g + action.payload.g,
//       k: state.k + action.payload.k,
//     }),
//   },
// );

// const store = configureStore({ reducer: { reducer1, reducer2 } });

// // const store = createStore(
// //  combineReducers({ reducer1, reducer2 }),
// //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// // );

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.querySelector("#root"),
// );

import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider, connect } from "react-redux";
const action1 = () => ({ type: "test", p: 7 });
const reducer1 = (state = { x: 8, y: 0 }, action) => {
  switch (action.type) {
    case "test":
      return { ...state, y: state.y + action.p };
    default:
      return state;
  }
};
const store = createStore(
  combineReducers({ reducer1 }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

class Clasik extends React.Component {
  handleClic = () => {
    this.props.m();
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <p>Class redux: {this.props.st.x}</p>
        <p onClick={this.handleClic}>Class redux: {this.props.st.y}</p>
        <p>Class props: {this.props.q}</p>
        <p>Class children: {this.props.children}</p>
      </div>
    );
  }
}

function Fn({ children }) {
  return (
    <div>
      <p>44</p>
      {children}
    </div>
  );
}

let mstp = state => ({ st: state.reducer1 });
let mdtp = { m: action1 };

let ClasikPLUS = connect(mstp, mdtp)(Clasik);

ReactDOM.render(
  <Provider store={store}>
    <Fn>
      <div>777</div>
    </Fn>
    <ClasikPLUS q={2}>chilik-string</ClasikPLUS>
    <div>1212</div>
  </Provider>,
  document.querySelector("#root"),
);
