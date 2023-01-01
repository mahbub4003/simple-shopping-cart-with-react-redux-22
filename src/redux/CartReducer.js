import { ASUS_ADD, A_DECREMENT, A_INCREMENT, CANON_ADD, C_DECREMENT, C_INCREMENT, DEL_ADD, D_DECREMENT, D_INCREMENT } from "./constant";
import { initialState } from "./InitialState";


const CartReducer = (state= initialState, action) => {
  switch (action.type) {
    case ASUS_ADD:
        return{
            ...state,
            asusCount : state.asusCount +1
        }
        case DEL_ADD:
        return{
            ...state,
            delCount : state.delCount +1
        }
        case CANON_ADD:
        return{
            ...state,
            cononCount : state.canonCount +1
        }
        case A_INCREMENT:
            return{
                ...state,
                asusCount : state.asusCount +1
            }
        case A_DECREMENT:
             return{
                    ...state,
                    asusCount : state.asusCount -1
             }
         case D_INCREMENT:
               return{
                        ...state,
                        delCount : state.delCount +1
                    }
          case D_DECREMENT:
                 return{
                            ...state,
                            delCount : state.delCount -1
                        }
          case C_INCREMENT:
               return{
                      ...state,
                     canonCount : state.canonCount +1
                            }
          case C_DECREMENT:
               return{
                    ...state,
                  canonCount : state.canonCount -1
                               }
  
    default:
        return state;
  }
}

export default CartReducer;
