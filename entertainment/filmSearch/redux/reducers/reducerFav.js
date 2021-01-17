import { DELETE_MOV, SAVE_MOVIES } from "../../consts/strings"

let initialState = {
    list: []
   }
   
   const reducerFav = (state = initialState, action) => {
       switch (action.type) {
        
        case DELETE_MOV : 
            return { list: [ action.payload ]}
            
        case SAVE_MOVIES : 
      
            return { ...state, list: [ action.payload ]}
           
        default:
               return state
       }
   }
   export default reducerFav;
   