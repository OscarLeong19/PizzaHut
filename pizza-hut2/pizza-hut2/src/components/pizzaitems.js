import React from 'react';
import { addToCartAction } from '../redux/cart/CartAction';
import { useDispatch, useSelector } from 'react-redux';
function Pizzaitems({ image, name, price, id }) {
    //TODO : add product id
    const dispatch = useDispatch();
    //TODO: to cart_page

    const addToCartHandler = (name, id, price) => {
        dispatch(addToCartAction(name, id, price, image));
    };
    return (
        <div className="pizzaitems">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {name} </h1>
            <p> ${price} </p>
            {/* TODO change dummy id */}
            <button onClick={() => addToCartHandler(name, id, price, image)}>Add To Cart</button>
        </div>
    );
}

export default Pizzaitems;
