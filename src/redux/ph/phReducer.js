import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import phAction from "./phAction";

const red1 = createReducer(0, { sd: (s, a) => s + a });
const contacts = createReducer([], { [phAction.act]: (s, a) => [...s, a.payload.contact] });

export default combineReducers({ red1, contacts });
