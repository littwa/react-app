import { configureStore } from "@reduxjs/toolkit";
import red from "./ph/phReducer";

const store = configureStore({ reducer: { red } });

export default store;
