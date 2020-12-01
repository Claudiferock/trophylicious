import React from 'react';

import beerPongAward from '../../assets/img/beer_pong.JPG';
import tacoAward from '../../assets/img/taco.jpg';
import spoonAward from '../../assets/img/spoon.jpg';

import '../../App.css';

const FeatureSecondary = () => (
    <>
        <div className="feature__secondary__item item1">            
            <img className="feature__secondary-img" src={beerPongAward} alt="Beer Pong award" loading="lazy"/>
            <div className="priceTag">€ </div>
        </div>
        <div className="feature__secondary__item item2">            
            <img className="feature__secondary-img" src={spoonAward} alt="spoon award" loading="lazy"/>
            <div className="priceTag">€ </div>
        </div>
        <div className="feature__secondary__item item3">             
            <img className="feature__secondary-img" src={tacoAward} alt="Taco award" loading="lazy"/>
            <div className="priceTag">€ </div>
        </div>
        <div className="feature__secondary--highlight" alt="secondary highlight">24% OFF</div>
        <div className="feature__secondary--more">MORE</div>
    </>
);

export default FeatureSecondary;