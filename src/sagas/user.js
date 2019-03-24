import {all, call, put, select} from "redux-saga/effects";
import {fetchNextUsers, fetchUsers} from "../api/user";
import {
  doAddUsers,
  doAddVehicles, doClearUsers,
  doFetchErrorUsers,
  doToggleIsFetchingVehicles,
  doToggleShowVehiclesUser
} from "../actions/user";
import {getUser} from "../selectors/user";
import {fetchVehicleByUrl} from "../api/vehicle";

export function* handleSearch(action) {
  const {query} = action;

  yield put(doClearUsers());

  try {
    const response = yield call(fetchUsers, query);
    const users = response.results.map(user => ({
      url: user.url,
      name: user.name,
      height: user.height,
      mass: user.mass,
      gender: user.gender,
      edited: user.edited,
      vehicleUrls: user.vehicles,
    }));
    const next = response.next;
    yield put(doAddUsers(users, next));
  } catch (error) {
    yield put(doFetchErrorUsers(error));
  }
}

export function* handleFetchUsers(action) {
  const {query} = action;

  try {
    const response = yield call(fetchUsers, query);
    const users = response.results.map(user => ({
      url: user.url,
      name: user.name,
      height: user.height,
      mass: user.mass,
      gender: user.gender,
      edited: user.edited,
      vehicleUrls: user.vehicles,
    }));
    const next = response.next;
    yield put(doAddUsers(users, next));
  } catch (error) {
    yield put(doFetchErrorUsers(error));
  }
}

export function* handleFetchUserVehicles(action) {
  const {userUrl} = action;

  yield put(doToggleIsFetchingVehicles(userUrl));
  yield put(doToggleShowVehiclesUser(userUrl));

  // TODO: Try to refactor this out (not get state in saga)
  // https://github.com/redux-saga/redux-saga/tree/master/docs/api#notes-13
  const user = yield select(getUser, userUrl);
  const vehicles = yield all(
      user.vehicleUrls.map(
          url => call(fetchVehicleByUrl, url)
      )
  );

  yield put(doAddVehicles(userUrl, vehicles));
  yield put(doToggleIsFetchingVehicles(userUrl));
}

export function* handleFetchNextUsers(action) {
  const {next} = action;

  const response = yield call(fetchNextUsers, next);
  const users = response.results.map(user => ({
    url: user.url,
    name: user.name,
    height: user.height,
    mass: user.mass,
    gender: user.gender,
    edited: user.edited,
    vehicleUrls: user.vehicles,
  }));
  const newNext = response.next;
  yield put(doAddUsers(users, newNext));
}