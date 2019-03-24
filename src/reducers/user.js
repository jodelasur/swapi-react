import {USER_ADD_VEHICLES, USER_TOGGLE_IS_FETCHING_VEHICLES, USER_TOGGLE_SHOW_VEHICLES} from "../constants/actionTypes";

export const INITIAL_STATE_USER = {
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

const applyToggleShowVehiclesUser = (state) => {
  return {...state, showVehicles: !state.showVehicles};
};

const applyAddVehicles = (state, action) => {
  return {...state, vehicles: action.vehicles};
};

const applyToggleIsFetchingVehicles = (state) => {
  return {...state, isFetchingVehicles: !state.isFetchingVehicles};
};

function userReducer(state = INITIAL_STATE_USER, action) {
  if (state.url !== action.userUrl) {
    return state;
  }

  switch (action.type) {
    case USER_TOGGLE_SHOW_VEHICLES:
      return applyToggleShowVehiclesUser(state);
    case USER_ADD_VEHICLES:
      return applyAddVehicles(state, action);
    case USER_TOGGLE_IS_FETCHING_VEHICLES:
      return applyToggleIsFetchingVehicles(state);
    default:
      return state;
  }
}

export default userReducer;