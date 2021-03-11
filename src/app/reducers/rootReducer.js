import { combineReducers } from "redux";
import { task } from "./taskReducer";
import { step } from "./stepReducer";
import { auth } from "./authReducer";

export const rootReducer = combineReducers({
    task,
    step,
    auth
});