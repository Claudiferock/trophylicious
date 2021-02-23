import React from 'react';
import HeartToggler from './heartToggler';

import ducksAward from '../../assets/img/ducks.jpg';

import '../../App.css'

const FeatureMain = (props) => {

  const descriptionText = `Explaing what you've done is not easy, let alone  when it's your own code. Why not showing your appretiation to those that clearly and effortlessly let you understand their code with a quacktastick award!?`;

  return (
    <>
          <main className="feature__main">    
            <section className="feature__main-img">
              <img src={ducksAward} alt="Quack awards" loading="lazy"/>
            </section>

            <aside className="feature__main-info">
              <h2 className="description-title">Quacktastick Award 3-Pack <span className="item--priceTag">(€{((60/100) * (3*12)).toFixed(2)})<span className="strikethrough">€60</span></span></h2>
              <p className="description-text">{descriptionText}</p>
              <div className="feature__main-details">
                <div className="item--quantity">
                  <button className="btn btn--cart btn--animated">Add to cart</button>
                </div>
                <HeartToggler/>
              </div>
            </aside>

            <section className="feature__main--highlight" alt="main highlight">60% OFF</section>
          </main>
    </>
  );
}

export default FeatureMain;