import {
  SEARCH_QUERY,
  USER_ADD_VEHICLES,
  USER_FETCH_VEHICLES,
  USER_TOGGLE_IS_FETCHING_VEHICLES,
  USER_TOGGLE_SHOW_VEHICLES,
  USERS_ADD, USERS_CLEAR,
  USERS_FETCH,
  USERS_FETCH_ERROR,
  USERS_FETCH_NEXT
} from "../constants/actionTypes";

export const doSearch = query => ({
  type: SEARCH_QUERY,
  query,
});

export const doClearUsers = () => ({
  type: USERS_CLEAR,
});

export const doAddUsers = (users, next) => ({
  type: USERS_ADD,
  users,
  next,
});

export const doFetchUsers = query => ({
  type: USERS_FETCH,
  query,
});

export const doFetchNextUsers = next => ({
  type: USERS_FETCH_NEXT,
  next,
});

export const doFetchErrorUsers = error => ({
  type: USERS_FETCH_ERROR,
  error,
});

export const doToggleShowVehiclesUser = userUrl => ({
  type: USER_TOGGLE_SHOW_VEHICLES,
  userUrl,
});

export const doFetchVehiclesUser = userUrl => ({
  type: USER_FETCH_VEHICLES,
  userUrl,
});

export const doAddVehicles = (userUrl, vehicles) => ({
  type: USER_ADD_VEHICLES,
  userUrl,
  vehicles,
});

export const doToggleIsFetchingVehicles = userUrl => ({
  type: USER_TOGGLE_IS_FETCHING_VEHICLES,
  userUrl,
});