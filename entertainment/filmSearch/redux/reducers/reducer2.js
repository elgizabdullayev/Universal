let initialState = {
    list: []
   }
   
   const reducer2 = (state = initialState, action) => {
       switch (action.type) {
           case 'saveMovies' : 
               return { ...state, list : [...state.list, action.payload] }
               
           default:
               return state
       }
   }
   export default reducer2;
   