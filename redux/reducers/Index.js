import { combineReducers } from "redux";
import Products from './Products';
import  CartReducer from './CartReducer';
export const allReducers = combineReducers({
    Products:Products,
    CartReducer:CartReducer
});