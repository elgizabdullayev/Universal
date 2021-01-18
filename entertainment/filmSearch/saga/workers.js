import { createSelectorHook, useSelector } from 'react-redux';
import { call, put, select } from 'redux-saga/effects';
import {searchResult, removeMovies, loading} from '../redux/actions';
import { getList } from '../redux/selector/selector';

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

function checkRemove(payload, mainList){
   index = mainList.indexOf(payload.movie);
   console.log('THIS IS MAIN INDEX', index)
   mainList.splice(index, 1);
   return mainList
 }

export function* workerRemove(action){
   const mainList = yield select(getList)
   const movie = yield call(checkRemove,action.payload, mainList)
   console.log('MOVIES IS ', movie)
   yield put(removeMovies(movie))
}