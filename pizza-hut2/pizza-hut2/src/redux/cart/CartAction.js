import { ADD_TO_CART_ITEM } from '../constants';
export const addToCartAction = (name, id, price) => (dispatch, getState) => {
    dispatch({
        type: ADD_TO_CART_ITEM,
        payload: {
            id: id,
            name: name,
            price: price,
            qty: 1,
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
};
