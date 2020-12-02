import React from 'react';

import beerPongAward from '../../assets/img/beer_pong.JPG';
import tacoAward from '../../assets/img/taco.jpg';
import spoonAward from '../../assets/img/spoon.jpg';

import '../../App.css';

const SecondaryItems = () => {

    const awards = [{"id": "1", "name": "Beer Pong award", "src": beerPongAward, "price": 28, "dicountedPrice": (28/100)*24},
        {"id": "2", "name": "Spoon award", "src": spoonAward, "price": 22, "dicountedPrice": (22/100)*24},
        {"id": "3", "name": "Taco award", "src": tacoAward, "price": 26, "dicountedPrice": (26/100)*24},
    ];

    const items = awards.map((item) => 
        <div className={"feature__secondary__item item" +item.id}>            
            <img className="feature__secondary-img" src={item.src} alt={item.name} loading="lazy"/>
            <div className="priceTag">€{item.dicountedPrice.toFixed(2)} <span className="strikethrough"> €{item.price} </span></div>
        </div>
    )

    return (
        <>
            {items}
        </>
        
    );
}

export default SecondaryItems;