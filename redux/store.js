import { createStore } from "redux";
import {allReducers} from "./reducers/Index";
const store=createStore(
    allReducers
    )
;
store.getState();

export default store;