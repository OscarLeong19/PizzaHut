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
                    ...state,
                    cartItems: [
                        ...state.cartItems.map((x) =>
                            x.name === existItem.name ? { ...x, qty: action.payload.qty + 1 } : x
                        ),
                    ],
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                };
            }

        default:
            return state;
    }
};
