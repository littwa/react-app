import { createAction } from "@reduxjs/toolkit";
// import { createStore, combineReducers } from "redux";

export const actionCreator1 = createAction("test"); // , z => ({ payload: { p: z } })
// export const actionCreator1 = z => ({ type: "test", payload: { p: z } });
export const actionCreator2 = createAction("test2", (z, w) => ({ payload: { g: z, k: w } }));
// export const actionCreator2 = (z, w) => ({ type: "test2", payload: { g: z, k: w } });

//=================================Operation( асинхронный action creators)=======================================================

export const reduxOperation = (z, w) => (dispatch, getState) => {
 console.log(dispatch);
 console.log(getState());
 dispatch(actionCreator2(z, w));
};
