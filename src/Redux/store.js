import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./CartReduce";

const rootReducer = combineReducers({
    rCart: cartReducer,
});
  
const store = createStore(rootReducer, composeWithDevTools());
 
export default store;