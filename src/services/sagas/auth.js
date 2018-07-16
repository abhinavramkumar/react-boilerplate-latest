import { put, takeEvery } from "redux-saga/effects";
import {
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_USER_AUTH,
  LOGOUT_USER_AUTH
} from "../constants";
import firebase, { googleAuthProvider } from "../firebase/firebase";

function* loginUser({ payload }) {
  yield put({
    type: LOGIN_USER,
    payload
  });
}

function* logoutUser() {
  yield put({
    type: LOGOUT_USER
  });
}

function* loginUserAuth() {
  yield firebase.auth().signInWithPopUp(googleAuthProvider);
}

function* logoutUserAuth() {
  yield firebase.auth().signOut();
}

export function* watchLoginUser(payload) {
  yield takeEvery(`ASYNC_${LOGIN_USER}`, loginUser);
}

export function* watchLoginUserAuth() {
  yield takeEvery(`ASYNC_${LOGIN_USER_AUTH}`, loginUserAuth);
}

export function* watchLogoutUser() {
  yield takeEvery(`ASYNC_${LOGOUT_USER}`, logoutUser);
}

export function* watchLogoutUserAuth() {
  yield takeEvery(`ASYNC_${LOGOUT_USER_AUTH}`, logoutUserAuth);
}
