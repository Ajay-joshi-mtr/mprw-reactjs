import { createStore,applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import Thunk from "redux-thunk"
const store=createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk)));

export default store;