import { ADD_FAV, REMOVE_MOV, SEARCH } from "../consts/strings"
import {workerAdd, workerSearch, workerRemove} from './workers'
import { takeEvery } from 'redux-saga/effects';

export function* watchSearch() {
    yield takeEvery(SEARCH, workerSearch)
}