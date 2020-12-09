import React from 'react';

import beerPongAward from '../../assets/img/beer_pong.JPG';
import tacoAward from '../../assets/img/taco.jpg';
import spoonAward from '../../assets/img/spoon.jpg';

import '../../App.css';

const SecondaryItems = () => {

    const awards = [{"id": "1", "name": "Beer Pong", "src": beerPongAward, "description": "Simple... for the master of beer pong", "price": 28, "dicountedPrice": (28/100)*24},
        {"id": "2", "name": "Spoon", "src": spoonAward, "description": "Recognition for the ones raising the standards of our meals at work", "price": 22, "dicountedPrice": (22/100)*24},
        {"id": "3", "name": "Taco", "src": tacoAward, "description": "Most like tacos, but some more than others. This is for them", "price": 26, "dicountedPrice": (26/100)*24},
    ];

    const items = awards.map((item) => 
        <div className={"feature__secondary__item item" +item.id}> 
            <img className="feature__secondary-img" src={item.src} alt={item.name} loading="lazy"/>
            <section className="feature__secondary-section">
                <h3>{item.name} award</h3>
                <p>{item.description}</p>          
                <div className="priceTag">€{item.dicountedPrice.toFixed(2)} <span className="strikethrough"> €{item.price} </span></div>
            </section>
        </div>
    )

    return (
        <>
            {items}
        </>
        
    );
}

export default SecondaryItems;