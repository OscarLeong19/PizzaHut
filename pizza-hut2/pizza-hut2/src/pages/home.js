import React from 'react';
import '../styles/home.css';
import Carousel from '../components/carousel';
import { carouseldata } from '../components/carouseldata';
import Pizza from '../components/pizza';
import Drinks from '../components/drink';
import Dessert from '../components/Dessert';
import Spaghetti from '../components/Spaghetti';

function home() {
    return (
        <div>
            <Carousel carousels={carouseldata} />
            <Pizza />
            <Drinks />
            <Dessert />
            <Spaghetti />
        </div>
    );
}

export default home;
