import {
  USER_ADD_VEHICLES,
  USER_TOGGLE_IS_FETCHING_VEHICLES,
  USER_TOGGLE_SHOW_VEHICLES,
  USERS_ADD,
  USERS_FETCH_ERROR
} from "../constants/actionTypes";
import userReducer, {INITIAL_STATE_USER} from "./user";

const INITIAL_STATE_USERS = {
  users: [],
  error: null,
};

const applyAddUsers = (state, action) => ({
  users: action.users.map(user => {
    return {...INITIAL_STATE_USER, ...user};
  }),
  error: null,
});

const applyFetchErrorUsers = (state, action) => ({
  users: [],
  error: action.error,
});

function usersReducer(state = INITIAL_STATE_USERS, action) {
  switch (action.type) {
    case USERS_ADD:
      return applyAddUsers(state, action);
    case USERS_FETCH_ERROR:
      return applyFetchErrorUsers(state, action);
    case USER_TOGGLE_SHOW_VEHICLES:
    case USER_ADD_VEHICLES:
    case USER_TOGGLE_IS_FETCHING_VEHICLES:
      return {
        ...state,
        users: state.users.map(
            user => userReducer(user, action)),
      };
    default:
      return state;
  }
}

export default usersReducer;