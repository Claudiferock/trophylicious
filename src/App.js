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
            <p>We all deserve recognition for our... "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            <a href="#feature-items" class="btn btn--white btn--animated">Feature trophies</a>
          </div>
        </div>

        <div className="Feature-items" id="feature-items">
          <div className="feature__main"> Main</div>
          <div className="feature__main--img">
            <img src={ducksAward} alt="Quack awards" loading="lazy"/>
          </div>
          <div className="feature__main--details">
            <h2>Quacktastick Award Pack</h2>
            <p>description</p>
            <div className="item__extras">
              <div className="item--priceTag">€ </div>
              <div className="item--quantity">
                <input type="number"/>
              </div>
              <div className="item--favorite"><span>🤍❤</span></div>
            </div>

          </div>
          <div className="feature__main--highlight" alt="main highlight">60% OFF</div>

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

        <div className="Categories" id="categories"></div>

      </div>

      <footer className="App-footer" id="footer">
        <p>
          <span role="img" aria-label="Flying hero">🐱‍🏍</span>
          <a href="https://github.com/Claudiferock">Claudiferock</a>
          <span role="img" aria-label="Trade mark">™</span>2020
          <span role="img" aria-label="Ninja cat">🐱‍👤</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
