import { REMOVE_MOV, SAVE_MOVIES, SEARCH, SEARCH_RESULT, SHOW_LOAD } from "../consts/strings"

export const searchResult = (data) => ({
    type: SEARCH_RESULT,
    payload: data
})
export const addMovie = (movie) => ({
    type: SAVE_MOVIES,
    payload: movie
})
export const removeMovies = (movie) => ({
    type: REMOVE_MOV,
    payload: movie
})

export const search = (searchText) =>({
   type: SEARCH,
   payload: searchText
})

export const loading = (showSplash) =>({
    type: SHOW_LOAD,
    payload: showSplash
})