import {
  USER_ADD_VEHICLES,
  USER_FETCH_VEHICLES,
  USER_TOGGLE_SHOW_VEHICLES,
  USERS_ADD,
  USERS_FETCH,
  USERS_FETCH_ERROR
} from "../constants/actionTypes";

const doAddUsers = users => ({
  type: USERS_ADD,
  users,
});

const doFetchUsers = query => ({
  type: USERS_FETCH,
  query,
});

const doFetchErrorUsers = error => ({
  type: USERS_FETCH_ERROR,
  error,
});

const doToggleShowVehiclesUser = userUrl => ({
  type: USER_TOGGLE_SHOW_VEHICLES,
  userUrl,
});

const doFetchVehiclesUser = userUrl => ({
  type: USER_FETCH_VEHICLES,
  userUrl,
});

const doAddVehicles = (userUrl, vehicles) => ({
  type: USER_ADD_VEHICLES,
  userUrl,
  vehicles,
});

export {
  doAddUsers,
  doFetchUsers,
  doFetchErrorUsers,
  doToggleShowVehiclesUser,
  doFetchVehiclesUser,
  doAddVehicles,
};