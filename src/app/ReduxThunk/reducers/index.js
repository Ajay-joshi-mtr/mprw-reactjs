import { combineReducers } from "redux";
import leads from "./PostReducers";
import leaddata from "./LeadData";

const rootReducer = combineReducers({
    leads,leaddata
})

export default rootReducer;