import { combineReducers } from "redux";
import stableReducer from "./stble.reducer";
import listReducer from "./list.reducer";

export default combineReducers({

    stableReducer,
    listReducer,

})