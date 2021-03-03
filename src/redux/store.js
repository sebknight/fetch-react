import {
  combineReducers,
  createStore,
  applyMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/sagas";
import dogSlice from "./slices/dogSlice";
import wikiSlice from "./slices/wikiSlice";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  dog: dogSlice,
  wiki: wikiSlice,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
