import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  applyEnhancers
} from "redux";
import thunk from "redux-thunk";
import { auth } from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () =>
  createStore(
    combineReducers({
      auth
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

export default configureStore;
