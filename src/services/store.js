import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import auth from "./reducers/auth";
import rootSaga from "./sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = () =>
  createStore(
    combineReducers({
      auth
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

const store = configureStore();

sagaMiddleware.run(rootSaga);

export default store;
