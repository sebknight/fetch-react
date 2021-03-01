import { combineReducers, createStore } from '@reduxjs/toolkit'
import dogSlice from './slices/dogSlice';
import wikiSlice from './slices/wikiSlice';

const rootReducer = combineReducers({
    dog: dogSlice,
    wiki: wikiSlice
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



