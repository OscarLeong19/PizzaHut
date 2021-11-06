import React, { useState } from "react";

function Pizzaitems({ image, name, price }) {
  const [count, setCount] = useState(0);
  function addToCartHandler(name, price) {
    // some bug here cant add the same product🪳
    setCount(count + 1);
    localStorage.setItem(`pizzas-${count}`, JSON.stringify({ name, price }));
  }

  return (
    <div className="pizzaitems">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
      <button onClick={() => addToCartHandler(name, price)}>Add To Cart</button>
    </div>
  );
}

export default Pizzaitems;
