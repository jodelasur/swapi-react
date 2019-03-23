import {USER_ADD_VEHICLES, USER_TOGGLE_SHOW_VEHICLES} from "../constants/actionTypes";

const INITIAL_STATE_USER = {
  url: null,
  name: null,
  height: null,
  mass: null,
  gender: null,
  edited: null,
  vehicleUrls: [],
  vehicles: [],
  showVehicles: false,
  isFetchingVehicles: false,
};

const applyToggleShowVehiclesUser = (state, action) => {
  return state.url !== action.userUrl
      ? state
      : {...state, showVehicles: !state.showVehicles};
};

const applyAddVehicles = (state, action) => {
  return state.url !== action.userUrl
      ? state
      : {...state, vehicles: action.vehicles};
};

function userReducer(state = INITIAL_STATE_USER, action) {
  switch (action.type) {
    case USER_TOGGLE_SHOW_VEHICLES:
      return applyToggleShowVehiclesUser(state, action);
    case USER_ADD_VEHICLES:
      return applyAddVehicles(state, action);
    default:
      return state;
  }
}

export default userReducer;