import {USERS_ADD, USERS_FETCH, USERS_FETCH_ERROR} from "../constants/actionTypes";

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

export {
  doAddUsers,
  doFetchUsers,
  doFetchErrorUsers,
};