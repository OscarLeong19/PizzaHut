import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '../redux/order/orderAction';
import axios from 'axios';
export default function Orderform() {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cartReducer);
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const product_ids = cartItems.map((value, key) => {
        return { product_id: value.id, qty: value.qty };
    });
    const submitHandler = (e, first_name, last_name, email, product_ids) => {
        const bodyFormData = new FormData();
        bodyFormData.append('first_name', first_name);
        bodyFormData.append('last_name', last_name);
        bodyFormData.append('email', email);
        bodyFormData.append('product_ids', JSON.stringify(product_ids));
        dispatch(createOrder(bodyFormData));
        localStorage.setItem('cartItems', JSON.stringify([]));
    };

    return (
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => {
                        setFirst_name(e.target.value);
                    }}
                />
                <label for="exampleInputEmail1">Last Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => {
                        setLast_name(e.target.value);
                    }}
                />

                <label for="exampleInputEmail1">Email</label>
                <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </div>
            <button
                type="submit"
                class="btn btn-primary"
                onClick={(e) => {
                    submitHandler(e, first_name, last_name, email, product_ids);
                }}
            >
                Submit
            </button>
        </form>
    );
}
