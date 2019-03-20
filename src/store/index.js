import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const saga = createSagaMiddleware();

const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(saga)
);

saga.run(rootSaga);

export default store;