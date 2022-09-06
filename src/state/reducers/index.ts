import { combineReducers } from "@reduxjs/toolkit";

import headerReducer from "./headerReducer";
import loadingReducer from "./loadingReducer";
import ordersReducer from "./ordersReducer";

const reducers = combineReducers({
    header: headerReducer,
    orders: ordersReducer,
    loading: loadingReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>;