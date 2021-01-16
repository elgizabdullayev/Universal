export const searchResult = (data) => ({
    type: 'searchResult',
    payload: data
})
export const saveMovies = (movie) => ({
    type: 'saveMovies',
    payload: movie
})
export const addMovie = (movie, list) => ({
    type: 'ADD_FAV',
    payload: {movie, list}
})
export const removeMovies = (list) => ({
    type: 'removeMovies',
    payload: list
})
export const removed = (movie, list) => ({
    type: 'REMOVE_MOV',
    payload: {movie, list}
})


export const search = (searchText) =>({
   type: 'SEARCH',
   payload: searchText
})