import { call, put, takeEvery } from 'redux-saga/effects';
import { removeMovies, saveMovies, searchResult } from '../redux/actions';

const fetchApi=(searchText)=>{
    console.log("THIS IS SEARCH TEXT", searchText)
     return async () => {
        try {
           const data  = await fetch(`http://api.tvmaze.com/search/shows?q=${searchText}`)
        
           return await data.json();
          } catch (e){
           console.log("Error")
          }
        }
}

function* workerSearch(action){
    console.log('action is', action)
    const movies = yield call(fetchApi, action.payload)
    console.log('data is', movies)
    yield put(searchResult(movies))
}
function checkMovie(payload){
    if(!payload.list.includes(payload.movie)){
        return movie
    }
}
function* workerAdd(action){
    const filteredMovie = yield call(checkMovie, action.payload);
    yield call(()=>{
        if(filteredMovie !== undefined){
            put(saveMovies(filteredMovie))
    }
    })
}
function remove(payload){
   index = payload.list.indexOf(payload.movie);
   return payload.list.splice(index, 1);
}

function* workerRemove(action){
   const list = yield call(remove(action.payload))
    yield put(removeMovies(list))
}

export function* watchSearch() {
    yield takeEvery('SEARCH', workerSearch)
    // yield takeEvery('ADD_FAV', workerAdd)
    // yield takeEvery('REMOVE_MOV', workerRemove)
}