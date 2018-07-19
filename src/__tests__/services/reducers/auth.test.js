import { LOGIN_USER, LOGOUT_USER } from "../../../services/constants";
import authReducer from "../../../services/reducers/auth";

const user = {
  displayName: "Alex Cross",
  uid: "abcdef12345",
  photoURL: "http://www.fillmurray.com/50/50"
};

const defaultState = {
  user: {}
};

test("should set default state", () => {
  const state = authReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    user: {}
  });
});

test("should set user with user data", () => {
  const state = authReducer(defaultState, {
    type: LOGIN_USER,
    payload: {
      user
    }
  });
  expect(state).toEqual({
    user
  });
});

test("should unset user", () => {
  const state = authReducer(defaultState, {
    type: LOGOUT_USER
  });
  expect(state).toEqual({
    user: {}
  });
});
