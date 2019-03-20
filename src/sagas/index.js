import {all, takeEvery} from 'redux-saga/effects';
import {USERS_FETCH} from "../constants/actionTypes";
import {handleFetchUsers} from "./user";

function *watchAll() {
  yield all([
      takeEvery(USERS_FETCH, handleFetchUsers),
  ])
}

export default watchAll;