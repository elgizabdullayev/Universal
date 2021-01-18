import { REMOVE_MOV, SAVE_MOVIES } from "../../consts/strings"

let initialState = {
    list: []
   }
   
   const reducerFav = (state = initialState, action) => {
       switch (action.type) {
        
        case SAVE_MOVIES : 
      
            return { ...state, list : [ ...state.list, action.payload ]}

        case REMOVE_MOV : 
            return  {list: action.payload} 
            
           
        default:
               return state
       }
   }
   export default reducerFav;
   