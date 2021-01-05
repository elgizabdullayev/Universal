import { call, put, takeEvery } from 'redux-saga/effects';
import { searchResult } from '../redux/actions';

function fetchApi(searchText){
     return async () => {
        try {
           // console.log(searchText)
           const data  = await fetch(`http://api.tvmaze.com/search/shows?q=${searchText}`)
           return await data.json();
          } catch (e){
           console.log("Error")
          }
        }
}

function* workerSearch(action){
    yield call(() => console.log('action is', action))
    const movies = yield call(fetchApi(action.payload))
    yield call(() => console.log('data is', movies))
    yield put(searchResult(movies))
}

export function* watchSearch() {
    yield takeEvery('SEARCH', workerSearch)
}