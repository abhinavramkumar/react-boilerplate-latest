import sagaHelper from "redux-saga-testing";
import { put } from "redux-saga/effects";
import { loginUser, logoutUser } from "../../../services/sagas/auth";
import { LOGIN_USER, LOGOUT_USER } from "../../../services/constants";

const payload = {
  user: {
    displayName: "Joe"
  }
};

describe("testing loginUser generator", () => {
  const it = sagaHelper(loginUser({ payload }));

  it("should return action object", result => {
    expect(result).toEqual(
      put({
        type: LOGIN_USER,
        payload
      })
    );
  });
});

describe("testing logoutUser generator", () => {
  const it = sagaHelper(logoutUser());

  it("should return action object", result => {
    expect(result).toEqual(
      put({
        type: LOGOUT_USER
      })
    );
  });
});
