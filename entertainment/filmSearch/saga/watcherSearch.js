import { SEARCH } from "../consts/strings"
import { workerSearch, workerRemove} from './workers'
import { takeEvery } from 'redux-saga/effects';

export function* watchSearch() {
    yield takeEvery(SEARCH, workerSearch)
    yield takeEvery('TO_REMOVE', workerRemove)
}