import { call, put, takeLatest, select } from 'redux-saga/effects'
import { selectBreed } from '../slices/dogSlice'
import { useSelector } from 'react-redux';

// watches for actions dispatched to the store, starts worker sagas
export function* watcherSaga() {
// Payload match is a hack to get around redux not recognising this action
    yield takeLatest(action => (action.payload === 'fetch'), fetchDogSaga);
}

function* fetchDogSaga() {
    try {
        const response = yield call(fetch, 'https://dog.ceo/api/breeds/image/random')
        const url = yield response.json()
                        .then(json => json.message)
        yield put({ type: 'dog/fetchDogSuccess', payload: url });
        yield* fetchWikiSaga()
    } catch (error) {
        console.log(error)
        yield put({ type: 'dog/fetchDogFailure', payload: error });
    }
}

function* fetchWikiSaga() {
    try {
        const state = yield select()
        const query = yield select(selectBreed, state)
        const response = yield call(fetch, 
            `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}+dog&format=json&origin=*`
        )
        const data = yield response.json()
                        .then(json => console.log(json))
        yield put({ type: 'wiki/fetchWikiSuccess', payload: data });
    } catch (error) {
        console.log(error)
        yield put({ type: 'wiki/fetchWikiFailure', payload: error });
    }   
}

