import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchDogSuccess, fetchDogFailure } from '../slices/dogSlice'

// watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
// Payload match is a hack to get around redux not recognising this action
    yield takeLatest(action => (action.payload === 'fetch'), fetchDogSaga);
}

function* fetchDogSaga() {
    try {
        const response = yield call(fetch, 'https://dog.ceo/api/breeds/image/random')
        const url = yield response.json()
                        .then(json => json.message)
        yield put({ type: 'fetchDogSuccess', payload: url });
    } catch (error) {
        yield put({ type: 'fetchDogFailure', payload: error });
    }
}

// function* wikiSaga() {
//     try {
//         const response = yield call(fetch, 'https://dog.ceo/api/breeds/image/random')
//         const url = yield response.json()
//                         .then(json => json.message)
//         yield put({ type: 'fetchDogSuccess', payload: url });
//     } catch (error) {
//         yield put({ type: 'fetchDogFailure', payload: error });
//     }
    
// }
