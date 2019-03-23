import {all, call, put, select} from "redux-saga/effects";
import {fetchUsers} from "../api/user";
import {doAddUsers, doAddVehicles, doFetchErrorUsers, doToggleShowVehiclesUser} from "../actions/user";
import {getUser} from "../selectors/user";
import {fetchVehicleByUrl} from "../api/vehicle";

function* handleFetchUsers(action) {
  const {query} = action;

  try {
    const users = yield call(fetchUsers, query);
    yield put(doAddUsers(users));
  } catch (error) {
    yield put(doFetchErrorUsers(error));
  }
}

function* handleFetchUserVehicles(action) {
  const {userUrl} = action;

  // TODO: Try to refactor this out (not get state in saga)
  // https://github.com/redux-saga/redux-saga/tree/master/docs/api#notes-13
  const user = yield select(getUser, userUrl);
  const vehicles = yield all(
      user.vehicleUrls.map(
          url => call(fetchVehicleByUrl, url)
      )
  );

  yield put(doAddVehicles(userUrl, vehicles));
  yield put(doToggleShowVehiclesUser(userUrl));
}

export {
  handleFetchUsers,
  handleFetchUserVehicles,
};