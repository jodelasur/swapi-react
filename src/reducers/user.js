import {USER_ADD_VEHICLES, USER_TOGGLE_SHOW_VEHICLES, USERS_ADD, USERS_FETCH_ERROR} from "../constants/actionTypes";

const INITIAL_STATE = {
  users: [],
  error: null,
};

const applyAddUsers = (state, action) => ({
  users: action.users.map(user =>
      // TODO: change to spread operator
      Object.assign({}, user, {showVehicles: false})),
  error: null,
});

const applyFetchErrorUsers = (state, action) => ({
  users: [],
  error: action.error,
});

const applyToggleShowVehiclesUser = (state, action) => ({
  ...state,
  users: state.users.map(user => {
    return user.url !== action.userUrl
        ? user
        : {...user, showVehicles: !user.showVehicles};
  })
});

const applyAddVehicles = (state, action) => ({
  ...state,
  users: state.users.map(user => {
    return user.url !== action.userUrl
        ? user
        : {...user, vehicles: action.vehicles};
  })
});

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USERS_ADD:
      return applyAddUsers(state, action);
    case USERS_FETCH_ERROR:
      return applyFetchErrorUsers(state, action);
    case USER_TOGGLE_SHOW_VEHICLES:
      return applyToggleShowVehiclesUser(state, action);
    case USER_ADD_VEHICLES:
      return applyAddVehicles(state, action);
    default:
      return state;
  }
}

export default userReducer;