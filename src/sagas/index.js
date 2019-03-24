import {all, takeEvery} from "redux-saga/effects";
import {SEARCH_QUERY, USER_FETCH_VEHICLES, USERS_FETCH_NEXT} from "../constants/actionTypes";
import {handleFetchNextUsers, handleFetchUserVehicles, handleSearch} from "./user";

function *watchAll() {
  yield all([
    takeEvery(SEARCH_QUERY, handleSearch),
    takeEvery(USER_FETCH_VEHICLES, handleFetchUserVehicles),
    takeEvery(USERS_FETCH_NEXT, handleFetchNextUsers),
  ])
}

export default watchAll;