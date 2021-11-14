import { ADD_TO_CART_ITEM } from '../constants';
const initalState = {
    cartItems: [],
};

export const cartReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_TO_CART_ITEM:
            const item = action.payload;
            //TODO change the name to id
            const existItem = state.cartItems.find((x) => x.name === item.name);
            if (existItem) {
                return {
                    cartItems: [...state.cartItems.map((x) => (x.name === item.name ? { ...x, qty: x.qty + 1 } : x))],
                };
            } else {
                return {
                    cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
                };
            }

        default:
            return state;
    }
};
