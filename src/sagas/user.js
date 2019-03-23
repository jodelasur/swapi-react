import {call, put} from "redux-saga/effects";
import {fetchUsers} from "../api/user";
import {doAddUsers, doAddVehicles, doFetchErrorUsers} from "../actions/user";

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
  const vehicles = [
    {
      url: 'url1',
      name: "Snowspeeder",
      model: "t-47 airspeeder",
      manufacturer: "Incom corporation",
      vehicleClass: "airspeeder",
    },
    {
      url: 'url2',
      name: "Imperial Speeder Bike",
      model: "74-Z speeder bike",
      manufacturer: "Aratech Repulsor Company",
      vehicleClass: "speeder",
    },
  ];

  const {userUrl} = action;

  // yield console.log(action);
  yield put(doAddVehicles(userUrl, vehicles));
}

export {
  handleFetchUsers,
  handleFetchUserVehicles,
};