import React, { useEffect, useState } from 'react';
//import { PizzaList } from "../components/pizzadata";
import Pizzaitems from './pizzaitems';
import '../styles/pizza.css';
import axios from 'axios';

function Pizza() {
    const [pizzaList, setPizzaList] = useState([]);
    useEffect(() => {
        console.log('asd');
        axios.get('http://127.0.0.1:5000/api/products', { params: { category_id: 1 } }).then((all) => {
            setPizzaList(all.data);
            console.log(all.data);
        });
    }, []);
    // function addToCartHandler(name, price, id) {
    //     // some bug here cant add the same product🪳
    //     const isInside = item.find((x) => x.name == name);
    //     if (isInside) {
    //         setItem(item.map((x) => (x.name == name ? { ...isInside, qty: isInside.qty + 1 } : x)));
    //     } else {
    //         setItem([...item, { name: name, price: price, qty: 1 }]);
    //     }
    //     localStorage.setItem(`pizzas`, JSON.stringify(...item));
    // }

    return (
        <div className="pizza">
            <h2> Menu </h2>
            <h1 className="pizzaTitle">Pizza</h1>
            <div className="pizzaList">
                {pizzaList.map((pizzaItem, key) => {
                    return (
                        <Pizzaitems
                            key={key}
                            image={pizzaItem.IMG_PATH}
                            name={pizzaItem.NAME}
                            price={pizzaItem.PRICE}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Pizza;
