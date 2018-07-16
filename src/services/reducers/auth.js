import { LOGIN_USER, LOGOUT_USER } from "../constants";

let defaultState = {
  user: {}
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        user: payload.user
      };

    case LOGOUT_USER:
      return {
        user: {}
      };

    default:
      return state;
  }
};
