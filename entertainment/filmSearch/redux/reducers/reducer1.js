let defaultState = {
    data: []
   };
   
   const reducer1 = (state = defaultState, action) => {
       switch (action.type) {
           case 'searchResult' :
               return {...state, data: action.payload}
               
           default:
               return state
       }
   }
   
   export default reducer1;