import React, { useEffect, useState } from 'react';
import Drinkitems from './drinkitems';
import axios from 'axios';
import '../styles/drink.css';

function Drink() {
    const [drinkList, setDrink] = useState([]);
    useEffect(() => {
        const fetch = () => {
            console.log('asdasdasdasdasdasdasdasdaqswd');
            return axios.get('http://127.0.0.1:5000/api/products', { params: { category_id: 3 } }).then((all) => {
                setDrink(all.data);
                console.log(all.data);
            });
        };
        setTimeout(fetch, 500);
    }, []);
    return (
        <div className="drink">
            <h1 className="drinkTitle">Drinks</h1>
            <div className="drinkList">
                {drinkList.map((drinkItem, key) => {
                    return (
                        <Drinkitems
                            key={key}
                            image={drinkItem.IMG_PATH}
                            name={drinkItem.NAME}
                            price={drinkItem.PRICE}
                            id={drinkItem.ID}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Drink;
