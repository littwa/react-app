import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import styles from "./styles.css";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { configureStore, createReducer } from "@reduxjs/toolkit";
import { actionCreator1, actionCreator2 } from "./redux/reduxActions";
// import { createStore, combineReducers } from "redux";

const reducer1 = createReducer(
 { t: 0 },
 { [actionCreator1]: (state, action) => ({ t: state.t + action.payload.p }) }
);

const reducer2 = createReducer(
 { g: 0, k: 5 },
 {
  [actionCreator2]: (state, action) => ({
   g: state.g + action.payload.g,
   k: state.k + action.payload.k
  })
 }
);

const store = configureStore({ reducer: { reducer1, reducer2 } });
console.log(store);

// const store = createStore(
//  combineReducers({ reducer1, reducer2 }),
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
 <Provider store={store}>
  <BrowserRouter>
   <App />
  </BrowserRouter>
 </Provider>,
 document.querySelector("#root")
);
