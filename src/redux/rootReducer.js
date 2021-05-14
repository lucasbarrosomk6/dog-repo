import { combineReducers } from "redux";
import { dogReducer } from "./dogReducer/dog.reducer.js";

const rootReducer = combineReducers({
  dog: dogReducer,
});
export default rootReducer;
