import { combineReducers } from "redux";
import { dogReducer } from "./dogReducer/dog.reducer.js";

const rootReducer = combineReducers({
  dogReducer,
});
export default rootReducer;
