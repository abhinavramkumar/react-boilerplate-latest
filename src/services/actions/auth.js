import firebase, { googleAuthProvider } from "../firebase/firebase";

export const logIn = user => ({
  type: "LOG_IN",
  payload: {
    user
  }
});

export const logOut = () => ({
  type: "LOG_OUT",
  payload: {
    user: {}
  }
});

// Log In Thunk
export const start__logIn = () => {
  return dispatch => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

// Log Out Thunk
export const start__logOut = () => {
  return dispatch => {
    firebase.auth().signOut();
    return dispatch(logOut());
  };
};
