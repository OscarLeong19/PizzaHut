import { combineReducers } from 'redux';
import { cartReducer } from './cart/CartReducer';
import { userReducer } from './user/userReducer';
export const reducer = combineReducers({
    cartReducer: cartReducer,
    userReducer: userReducer,
});
