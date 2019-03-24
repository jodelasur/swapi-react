import {all, takeEvery} from 'redux-saga/effects';
import {USER_FETCH_VEHICLES, USERS_FETCH, USERS_FETCH_NEXT} from "../constants/actionTypes";
import {handleFetchNextUsers, handleFetchUsers, handleFetchUserVehicles} from "./user";

function *watchAll() {
  yield all([
      takeEvery(USERS_FETCH, handleFetchUsers),
      takeEvery(USER_FETCH_VEHICLES, handleFetchUserVehicles),
      takeEvery(USERS_FETCH_NEXT, handleFetchNextUsers),
  ])
}

export default watchAll;