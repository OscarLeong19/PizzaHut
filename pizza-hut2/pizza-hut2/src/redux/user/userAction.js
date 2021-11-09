import axios from 'axios';
import { FETCH_USER_SUCCESS, FETCH_USER_FAIL, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL } from '../constants';
export const userLoginAction = (bodyFormData) => async (dispatch, getState) => {
    // TODO passing email and password
    try {
        const { data } = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:5000/api/user/login',
            data: bodyFormData,
        });

        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: data,
        });
        localStorage.setItem('userdata', JSON.parse(data));
    } catch (e) {
        dispatch({
            type: FETCH_USER_FAIL,
            payload: e.message,
        });
    }
};

export const userRegisterAction = (bodyFormData) => async (dispatch, getState) => {
    // TODO passing email and password
    try {
        const { data } = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:5000/api/admin/create',
            data: bodyFormData,
        });

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data,
        });
        localStorage.setItem('userdata', JSON.parse(data));
    } catch (e) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: e.message,
        });
    }
};
