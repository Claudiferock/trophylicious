import React from 'react';
import ducksAward from './assets/img/ducks.jpg';
import beerPongAward from './assets/img/beer_pong.JPG';
import favio from './assets/img/favio.gif';
import tacoAward from './assets/img/taco.jpg';
import spoonAward from './assets/img/spoon.jpg';
import './App.css';

function App() {
  return (
    <div className="App" id="home">

      <header className="App-header">
        
        <button class="nav-toggle" aria-label="open navigation">
          <span class="hamburger">
            <svg className="hamburber-menu" viewBox="0 0 100 80" width="20" height="20" fill="white">
                <rect width="100" height="14" rx="8"></rect>
                <rect y="30" width="100" height="14" rx="8"></rect>
                <rect y="60" width="100" height="14" rx="8"></rect>
            </svg>
          </span>
        </button>

        <nav className="nav__list">
          <li><a href="#home" className="nav__link nav__link-emoji"><span role="img" aria-label="Trophy">🏆</span></a></li>
          <li><a href="#welcome" className="nav__link">About</a></li>
          <li><a href="#categories" className="nav__link">Categories</a></li>
          <li><a href="#footer" className="nav__link">Contact</a></li>
          <li><a href="#top" className="nav__link">Log In</a></li>
          <li><a href="#top" className="nav__link nav__link-emoji"><span role="img" aria-label="Shopping kart">🛒</span></a></li>
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

          <div className="feature__secondary__item1">            
            <img className="feature__secondary-img" src={beerPongAward} alt="Beer Pong award" loading="lazy"/>
            <div className="priceTag">€ </div>
          </div>
          <div className="feature__secondary__item2">            
            <img className="feature__secondary-img" src={spoonAward} alt="spoon award" loading="lazy"/>
            <div className="priceTag">€ </div>
          </div>
          <div className="feature__secondary__item3">             
            <img className="feature__secondary-img" src={tacoAward} alt="Taco award" loading="lazy"/>
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
          <span className="span-margin" role="img" aria-label="sunglasses emoji">😎</span>
          <a href="https://github.com/Claudiferock">GitHub/Claudiferock <span role="img" aria-label="Trade mark">™</span>2020</a>
          <span className="span-margin" role="img" aria-label="character emoji"> ¯\_(ツ)_/¯ </span>
          <a href="mailto:claudifero@gmail.com?Subject=Trophylicious feedback"> Email me!</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
