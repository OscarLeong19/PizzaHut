import React from "react";

function drinkitems({ image, name, price }) {
  return (
    <div className="drinkitems">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default drinkitems;
