import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const composeEnhancers = composeWithDevTools({trace: true, traceLimit: 25});
const saga = createSagaMiddleware();

const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(saga))
);

saga.run(rootSaga);

export default store;