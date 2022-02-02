import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { tableReducer } from "./table";

export const rootReducer = combineReducers({
    auth: authReducer,
    table: tableReducer
})