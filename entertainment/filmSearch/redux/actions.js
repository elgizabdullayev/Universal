export const searchResult = (data) => ({
    type: 'searchResult',
    payload: data
})
export const saveMovies = (movie) => ({
    type: 'saveMovies',
    payload: movie
})
export const removeMovies = (movie) => ({
    type: 'removeMovies',
    payload: movie
})

export const search = (searchText) =>({
   type: 'SEARCH',
   payload: searchText
})