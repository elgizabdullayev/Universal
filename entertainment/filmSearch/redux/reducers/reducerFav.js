let initialState = {
    list: []
   }
   
   const reducerFav = (state = initialState, action) => {
       switch (action.type) {
        
        case 'removeMovies' : 
            return { list: [ action.payload ]}
            
        case 'saveMovies' : 
      
            return { ...state, list: [ action.payload ]}
           
        default:
               return state
       }
   }
   export default reducerFav;
   