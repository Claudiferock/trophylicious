import React from 'react';
import ducksAward from './assets/img/ducks.jpg';
import beerPongAward from './assets/img/beer_pong.JPG';
import favio from './assets/img/favio.gif';
import tacoAward from './assets/img/taco.jpg';
import spoonAward from './assets/img/spoon.jpg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <nav className="nav__list">
          <li><a href="#categories">Categories</a></li>
          <li><a href="#welcome">About</a></li>
          <li><a href="#footer">Contact</a></li>
          <li><a href="#top">Log In</a></li>
          <li><a href="#top"><span role="img" aria-label="Shopping kart">🛒</span></a></li>
        </nav>
      </header>

      <div className="App-content">

        <div className="Welcome" id="welcome">
          <img src={favio} alt="Favio welcomes you to Trophylicious" width="720px"/>
          <div className="welcome-info">
            <p>We all deserve to be recognized and valued. Show it with a trophy! there's a trophy for anything<br/><br/><q>The trophy is earned in the hour that no one is watching</q></p>
            <a href="#feature-items" class="btn btn--white btn--animated">Feature trophies</a>
          </div>
        </div>

        <div className="Feature-items" id="feature-items">
          
          <div className="feature__main">    
            <div className="feature__main--img">
              <img src={ducksAward} alt="Quack awards" loading="lazy"/>
            </div>

            <div className="feature__main--details">
              <h2>Quacktastick Award Pack</h2>
              <p>description</p>
              <div className="item__extras">
                <div className="item--priceTag">{((60/100) * (3*12)).toFixed(2)} €</div>
                <div className="item--quantity">
                  <input type="number"/>
                </div>
                <div className="item--favorite"><span>🤍❤</span></div>
              </div>
            </div>

            <div className="feature__main--highlight" alt="main highlight">60% OFF</div>
          </div>

          <div className="feature__secondary__item1">            
            <img src={beerPongAward} alt="Beer Pong award" loading="lazy"/>
            <div className="priceTag">€ </div>
          </div>
          <div className="feature__secondary__item2">            
            <img src={spoonAward} alt="spoon award" loading="lazy"/>
            <div className="priceTag">€ </div>
          </div>
          <div className="feature__secondary__item3">             
            <img src={tacoAward} alt="Taco award" loading="lazy"/>
            <div className="priceTag">€ </div>
          </div>
          <div className="feature__secondary--highlight" alt="secondary highlight">24% OFF</div>
          <div className="feature__secondary--more">MORE</div>
        </div>

        <div className="Categories" id="categories">
          <div className="trophies"></div>
          <div className="medals"></div>
          <div className="cups"></div>
          <div className="glass-cristals"></div>
        </div>

      </div>

      <footer className="App-footer" id="footer">
        <p>
          <span role="img" aria-label="Flying hero">🐱‍🏍</span>
          <a href="https://github.com/Claudiferock">GitHub/Claudiferock</a>
          <span role="img" aria-label="Trade mark">™</span>2020
          <span role="img" aria-label="Ninja cat">🐱‍👤</span>
          <a href="mailto:claudifero@gmail.com?Subject=Trophylicious feedback"> Email me!</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
