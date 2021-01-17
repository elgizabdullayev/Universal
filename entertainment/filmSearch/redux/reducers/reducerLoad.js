import { SHOW_LOAD } from "../../consts/strings";


let firstState = {
    showSplash: true
   }
   
   const reducerLoad = (state = firstState, action) => {
       switch (action.type) {
        
        case SHOW_LOAD : 
            return { showSplash : action.payload }
    
           
        default:
               return state
       }
   }
   export default reducerLoad;
   