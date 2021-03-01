import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { watcherSaga } from './sagas/sagas'
import dogSlice from './slices/dogSlice';
import wikiSlice from './slices/wikiSlice';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    dog: dogSlice,
    wiki: wikiSlice
})

// const enhancements = compose(
//     applyMiddleware(sagaMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
//         serialize: true
//     })
// )

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ));

sagaMiddleware.run(watcherSaga)


