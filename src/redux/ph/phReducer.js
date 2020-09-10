import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import phAction from "./phAction";

const redTest = createReducer(0, {});
const contacts = createReducer([], { [phAction.act]: (s, a) => [...s, a.payload.contact] });

export default combineReducers({ redTest, contacts });
