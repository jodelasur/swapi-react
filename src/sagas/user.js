import {call, put} from "redux-saga/effects";
import {fetchUsers} from "../api/user";
import {doAddUsers, doFetchErrorUsers} from "../actions/user";

function* handleFetchUsers(action) {
  const {query} = action;

  try {
    const result = yield call(fetchUsers, query);
    yield put(doAddUsers(result.results));
  } catch (error) {
    yield put(doFetchErrorUsers(error));
  }
}

export {
  handleFetchUsers,
};