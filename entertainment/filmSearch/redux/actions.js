export const searchResult = (data) => ({
    type: 'searchResult',
    payload: data
})
export const saveMovies = (movie) => ({
    type: 'saveMovies',
    payload: movie
})


export const search = (dispatch, searchText) =>{
    return async () => {
        try {
            console.log(searchText)
            const response = await fetch(`http://api.tvmaze.com/search/shows?q=${searchText}`)
            const data = await response.json();
            dispatch(searchResult(data))
            console.log ("data ", data)
          } catch (e){
           console.log("Error")
      
          }
    }
}