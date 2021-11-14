import React from 'react';
import '../styles/cart.css';
import Orderform from '../components/Orderform';
import { deleteCartItem, addToCartAction } from '../redux/cart/CartAction';
import { useDispatch, useSelector } from 'react-redux';
function Cart() {
    const dispatch = useDispatch();
    const deleteItem = (name, id, price) => {
        dispatch(deleteCartItem(name, id, price));
        console.log('clicked--delete');
    };
    const addItem = (name, id, price, image) => {
        dispatch(addToCartAction(name, id, price, image));
        console.log('clicked--added');
    };
    const { cartItems } = useSelector((state) => state.cartReducer);

    return (
        <div className="">
            <div className="shopping-cart">
                <div className="title">Shopping Bag</div>
                {cartItems.map((item, key) => {
                    return (
                        <div className="item" key={key}>
                            {/* <div class="buttons">
                             <button class="plus-btn" type="button" name="button">
                                    {' '}
                                    +{' '}
                                </button>
                                <button class="plus-btn" type="button" name="button">
                                    {' '}
                                    -{' '}
                                </button> 
                        </div> */}
                            <div className="cart-image">
                                <img src={item.image} alt="" />
                            </div>

                            <div className="description">
                                <span>{item.name}</span>
                            </div>

                            <div className="quantity">
                                <button
                                    className="plus-btn"
                                    type="button"
                                    name="button"
                                    onClick={() => addItem(item.name, item.id, item.price, item.image)}
                                >
                                    {' '}
                                    +{' '}
                                </button>
                                <input type="text" name="name" value={item.qty}></input>
                                <button
                                    className="minus-btn"
                                    type="button"
                                    name="button"
                                    onClick={() => deleteItem(item.name, item.id, item.price)}
                                >
                                    {' '}
                                    -{' '}
                                </button>
                            </div>
                            <div className="total-price">$ {item.price * item.qty}</div>
                        </div>
                    );
                })}
            </div>
            <Orderform />
        </div>
    );
}

export default Cart;
