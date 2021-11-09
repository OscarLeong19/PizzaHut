import { FETCH_USER_FAIL, FETCH_USER_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS } from '../constants';
const initalState = {
    currentUser: {},
};

export const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {
                currentUser: action.payload,
            };
        case FETCH_USER_FAIL:
            return {
                error: action.payload,
            };
        case REGISTER_USER_SUCCESS:
            return {
                creationStatus: action.payload,
            };
        case REGISTER_USER_FAIL:
            return {
                error: action.payload,
            };

        default:
            return state;
    }
};
