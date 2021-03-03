import { call, put, takeLatest, select } from 'redux-saga/effects'
import { selectBreed } from '../slices/dogSlice'
import { isDogEdgeCase, isWikiEdgeCase } from '../../utils/utils';

// watches for actions dispatched to the store, starts worker sagas
export function* rootSaga() {
// Payload match is a hack to get around redux not recognising this action
    yield takeLatest('dog/fetchDogRequest', fetchDogSaga);
    yield takeLatest('wiki/fetchWikiRequest', fetchWikiSaga);
}

function* fetchDogSaga() {
    try {
        const response = yield call(fetch, 'https://dog.ceo/api/breeds/image/random')
        const url = yield response.json()
            .then(json => {
                if (isDogEdgeCase(json.message)) {
                    throw Error('Invalid dog')  
                }
                return json.message
            })
        yield put({ type: 'dog/fetchDogSuccess', payload: url });
        yield put({ type: 'wiki/fetchWikiRequest' });
    } catch (error) {
        console.log(error)
        yield put({ type: 'dog/fetchDogFailure' });
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
            .then(json => {
                if (isWikiEdgeCase(json.query.search[0].title)) {
                    throw Error('invalid wiki')
                }
                return json.query.search[0]
            })
         yield put({ type: 'wiki/fetchWikiSuccess', payload: data });
    } catch (error) {
        console.log(error)
        yield put({ type: 'wiki/fetchWikiFailure' });
    }   
}

