import {doToggleIsFetchingVehicles} from "../actions/user";
import usersReducer from "./users";

describe("users reducer", () => {
  it("applies toggle: isFetchingVehicles", () => {
    const userUrl1 = "url1";
    const userUrl2 = "url2";
    const action = doToggleIsFetchingVehicles(userUrl1);
    const previousState = {
      users: [
        {
          url: userUrl1,
          isFetchingVehicles: false,
        },
        {
          url: userUrl2,
          isFetchingVehicles: false,
        },
      ]
    };
    const expectedNewState = {
      users: [
        {
          url: userUrl1,
          isFetchingVehicles: true,
        },
        {
          url: userUrl2,
          isFetchingVehicles: false,
        },
      ]
    };

    const newState = usersReducer(previousState, action);

    expect(newState).toEqual(expectedNewState);
  });
});