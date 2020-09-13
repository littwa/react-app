import { configureStore } from "@reduxjs/toolkit";
import red from "./ph/phReducer";

const store = configureStore({ reducer: { red } });
console.log(store.getState());

export default store;
