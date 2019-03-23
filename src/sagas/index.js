import {all, takeEvery} from 'redux-saga/effects';
import {USER_FETCH_VEHICLES, USERS_FETCH} from "../constants/actionTypes";
import {handleFetchUsers, handleFetchUserVehicles} from "./user";

function *watchAll() {
  yield all([
      takeEvery(USERS_FETCH, handleFetchUsers),
      takeEvery(USER_FETCH_VEHICLES, handleFetchUserVehicles),
  ])
}

export default watchAll;