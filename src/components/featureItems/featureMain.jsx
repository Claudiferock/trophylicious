import React from 'react';

import ducksAward from '../../assets/img/ducks.jpg';

import '../../App.css'

const FeatureMain = () => (
    <>
                  <div className="feature__main">    
            <div className="feature__main-img">
              <img src={ducksAward} alt="Quack awards" loading="lazy"/>
            </div>

            <div className="feature__main-info">
              <h2>Quacktastick Award Pack</h2>
              <p className="description-text">It's not easy to explain things, let alone to explain code. Why not showing your appretiation for those that can make you understand their code without struggles?</p>
              <div className="feature__main-details">
                <div className="item--priceTag">{((60/100) * (3*12)).toFixed(2)} € x </div>
                <div className="item--quantity">
                  <input type="number" value="1" min="0" max="100"/>
                  <button>+</button>
                  <button>-</button>
                </div>
                <div className="item--favorite"><span className="hidden">❤️</span><span className="visible">🤍</span></div>
              </div>
            </div>

            <div className="feature__main--highlight" alt="main highlight">60% OFF</div>
          </div>
    </>
);

export default FeatureMain;