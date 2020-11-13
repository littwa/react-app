import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import { configureStore } from "@reduxjs/toolkit";
// const store = configureStore({ reducer: { reducer1 } });

// import { Provider } from "react-redux";
// import { combineReducers, createStore } from "redux";

// const initialState = { t: 1, y: 2, u: { i: 3 } };

// const reducer1 = (state = initialState, action) => {
//   switch (action.type) {
//     case "test":
//       return { ...state, t: state.t + action.payload.number };
//     default:
//       return state;
//   }
// };

// const store = createStore(
//   combineReducers({ reducer1 }),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root"),
// );

//-------------------------------------

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const initialState = { t: 1, y: 2, u: { i: 3 } };
const reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case "test":
      return { ...state, t: state.t + action.payload.number };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ reducer1 }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
