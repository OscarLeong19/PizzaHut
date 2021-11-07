import { combineReducers } from 'redux';
import { cartReducer } from './cart/CartReducer';

export const reducer = combineReducers({
    cartReducer: cartReducer,
});
