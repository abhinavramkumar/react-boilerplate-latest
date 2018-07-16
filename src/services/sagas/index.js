import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";
import {
  watchLoginUser,
  watchLogoutUser,
  watchLoginUserAuth,
  watchLogoutUserAuth
} from "./auth";

function* rootSaga() {
  yield all([
    watchLoginUser(),
    watchLogoutUser(),
    watchLoginUserAuth(),
    watchLogoutUserAuth()
  ]);
}

export default rootSaga;
