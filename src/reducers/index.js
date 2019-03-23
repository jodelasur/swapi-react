import {combineReducers} from "redux";
import usersReducer from "./user";

const rootReducer = combineReducers({
  usersState: usersReducer,
});

export default rootReducer;