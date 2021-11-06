import React from "react";
import "../styles/home.css";
import Carousel from "../components/carousel";
import { carouseldata } from "../components/carouseldata";
import Pizza from "../components/pizza";
import Drinks from "../components/drink";

function home() {
  return (
    <div>
      <Carousel carousels={carouseldata} />
      <Pizza />
      <Drinks />
    </div>
  );
}

export default home;
