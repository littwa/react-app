import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import styles from "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/stor";
//===================================================================
// npm install redux // combineReducers
// npm install react-redux // Provider, connect
// npm install @reduxjs/toolkit // createReducer, createAction, configureStore
// npm install react-router-dom

ReactDOM.render(
 <Provider store={store}>
  <BrowserRouter>
   <App />
  </BrowserRouter>
 </Provider>,
 document.querySelector("#root")
);
