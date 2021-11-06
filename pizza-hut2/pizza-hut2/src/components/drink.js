import React from "react";
import { DrinkList } from "../components/drinkdata";
import Drinkitems from "./drinkitems";
import "../styles/drink.css";

function Drink() {
  return (
    <div className="drink">
      <h1 className="drinkTitle">Drinks</h1>
      <div className="drinkList">
        {DrinkList.map((drinkItem, key) => {
          return (
            <Drinkitems
              key={key}
              image={drinkItem.image}
              name={drinkItem.name}
              price={drinkItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Drink;
