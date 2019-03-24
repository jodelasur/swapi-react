import {
  USER_ADD_VEHICLES,
  USER_FETCH_VEHICLES,
  USER_TOGGLE_IS_FETCHING_VEHICLES,
  USER_TOGGLE_SHOW_VEHICLES,
  USERS_ADD,
  USERS_FETCH,
  USERS_FETCH_ERROR,
  USERS_FETCH_NEXT
} from "../constants/actionTypes";

const doAddUsers = (users, next) => ({
  type: USERS_ADD,
  users,
  next,
});

const doFetchUsers = query => ({
  type: USERS_FETCH,
  query,
});

const doFetchNextUsers = next => ({
  type: USERS_FETCH_NEXT,
  next,
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

const doToggleIsFetchingVehicles = userUrl => ({
  type: USER_TOGGLE_IS_FETCHING_VEHICLES,
  userUrl,
});

export {
  doAddUsers,
  doFetchUsers,
  doFetchNextUsers,
  doFetchErrorUsers,
  doToggleShowVehiclesUser,
  doFetchVehiclesUser,
  doAddVehicles,
  doToggleIsFetchingVehicles,
};