let initialState = {
    list: []
   }
   
   const reducer2 = (state = initialState, action) => {
       switch (action.type) {
        
        case 'removeMovies' : 
           index = state.list.indexOf(action.payload);
           state.list.splice(index, 1);
            return { list: [...state.list]}
            
        case 'saveMovies' : 
           if(!state.list.includes(action.payload))
           {return { ...state, list : [...state.list, action.payload] }}
           
        default:
               return state
       }
   }
   export default reducer2;
   