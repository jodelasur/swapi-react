import userReducer from "./user";
import {doToggleIsFetchingVehicles} from "../actions/user";

describe("user reducer", () => {
  it("applies toggle: isFetchingVehicles", () => {
    const userUrl = "url";
    const action = doToggleIsFetchingVehicles(userUrl);
    const previousState = {url: userUrl, isFetchingVehicles: false};
    const expectedNewState = {...previousState, isFetchingVehicles: true};

    const newState = userReducer(previousState, action);

    expect(newState).toEqual(expectedNewState);
  });
});