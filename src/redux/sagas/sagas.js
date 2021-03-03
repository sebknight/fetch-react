import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  getBreed,
  isEdgeCase,
  dogEdgeCases,
  wikiEdgeCases,
} from "../../utils/utils";
import { selectDogUrl } from "../slices/dogSlice";
import { isEmpty } from "ramda";

// watches for actions dispatched to the store, starts worker sagas
export function* rootSaga() {
  yield takeLatest("dog/fetchDogRequest", fetchDogSaga);
  yield takeLatest("wiki/fetchWikiRequest", fetchWikiSaga);
}

function* fetchDogSaga() {
  yield put({ type: 'dog/clearData' })
  yield put({ type: 'wiki/clearData' });
  try {
    const response = yield call(
      fetch,
      "https://dog.ceo/api/breeds/image/random"
    );
    const url = yield response.json().then((json) => {
      if (isEdgeCase(dogEdgeCases, getBreed(json.message))) {
        throw Error("Invalid dog");
      }
      return json.message;
    });
    yield put({ type: "dog/fetchDogSuccess", payload: url });
    yield put({ type: "wiki/fetchWikiRequest" });
  } catch (error) {
    yield put({ type: "dog/fetchDogFailure" });
    yield put({ type: "dog/fetchWikiFailure" });
  }
}

function* fetchWikiSaga() {
  try {
    const state = yield select();
    const query = yield getBreed(selectDogUrl(state));
    const response = yield call(
      fetch,
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}+dog&format=json&origin=*`
    );
    const data = yield response.json().then((json) => {
      if (isEmpty(json.query.search)) {
        throw Error("No results");
      }

      if (isEdgeCase(wikiEdgeCases, json.query.search[0].title)) {
        throw Error("Invalid dog");
      }

      return json.query.search[0];
    });
    yield put({ type: "wiki/fetchWikiSuccess", payload: data });
  } catch (error) {
    yield put({ type: "wiki/fetchWikiFailure" });
  }
}
