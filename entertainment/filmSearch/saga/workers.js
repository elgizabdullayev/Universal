import { call, put } from 'redux-saga/effects';
import {searchResult, saveMovies, removeMovies, loading} from '../redux/actions';

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

export function* workerSearch(action){
   yield call(() => console.log('action is', action))
   yield put(loading(true))
   const movies = yield call(fetchApi(action.payload))
   yield call(() => console.log('data is', movies))
   yield put(loading(false))
   yield put(searchResult(movies))
}