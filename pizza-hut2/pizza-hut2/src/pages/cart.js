import React from 'react';
import "../styles/cart.css";

function cart() {
    return (
        <div className="shopping-cart">
            <div class="title">
                Shopping Bag
            </div>
            <div class="item">     
                <div class="buttons">
                    <button class="plus-btn" type="button" name="button"> + </button>
                    <button class="plus-btn" type="button" name="button"> - </button>
                </div>   
                <div class="image">
                    <img src="item-1.png" alt="" />
                </div>
            
                <div class="description">
                    <span>Common Projects</span>
                </div>
            
                <div class="quantity">
                    <button class="plus-btn" type="button" name="button"> + </button>
                    <input type="text" name="name" value="1"></input>
                    <button class="minus-btn" type="button" name="button"> - </button>
                </div>
                <div class="total-price">$549</div>
            </div>
        </div>
    )
}

export default cart