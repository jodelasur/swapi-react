import {USERS_ADD, USERS_FETCH_ERROR} from "../constants/actionTypes";

const INITIAL_STATE = {
  users: [],
  error: null,
};

const applyAddUsers = (state, action) => ({
  users: action.users,
  error: null,
});

const applyFetchErrorUsers = (state, action) => ({
  users: [],
  error: action.error,
});

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USERS_ADD:
      return applyAddUsers(state, action);
    case USERS_FETCH_ERROR:
      return applyFetchErrorUsers(state, action);
    default:
      return state;
  }
}

export default userReducer;