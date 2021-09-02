import { combineReducers } from "redux";
import changeTheNumber from "./updown";
import leads from "./leads";

const rootReducer = combineReducers({
    changeTheNumber,leads
})

export default rootReducer;