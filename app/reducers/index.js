import { combineReducers } from 'redux';
 
import { DATA_AVAILABLE } from "../actions/" //Import the actions types constant we defined in our actions
 
let dataState = { data: [], loading:true };
 
const dataReducer = (state = dataState, action) => {

    if(action.type === DATA_AVAILABLE){
      return {
        ...state,
        data: action.data,
        loading: false,
      }
    }
    return state;
};
 
// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})
 
export default rootReducer;