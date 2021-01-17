import { SEARCH_RESULT } from "../../consts/strings";

let defaultState = {
    data: [
        
    ]
   };
   
   const reducerSearch = (state = defaultState, action) => {
       switch (action.type) {
           case SEARCH_RESULT :
               return {...state, data: action.payload}
               
           default:
               return state
       }
   }
   
   export default reducerSearch;