let defaultState = {
    data: [
        
    ]
   };
   
   const reducerSearch = (state = defaultState, action) => {
       console.log("THIS IS ACTION PAY", action.payload)
       switch (action.type) {
           case 'searchResult' :
               return {...state, data: action.payload}
               
           default:
               return state
       }
   }
   
   export default reducerSearch;