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
          <li><a>Categories</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
          <li><a>Log In</a></li>
          <li><a>Basquet</a></li>
        </nav>
      </header>

      <div className="App-content">

        <div className="Welcome">
          <img src={favio} alt="Favio welcomes you to Trophylicious" width="720px"/>
          <div className="welcome-info">
            <p>We all deserve recognition for our... "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            <a href="#feature-items" class="btn btn--white btn--animated">Go to feature trophies</a>
          </div>
        </div>
        <div className="Feature-items" id="feature-items">
          <div className="feature__main"> Main</div>
          <div className="feature__main--img">
            <img src={ducksAward} alt="Quack awards" loading="lazy"/>
          </div>
          <div className="feature__main--details"> main details</div>
          <div className="feature__main--highlight" alt="main highlight">60% OFF</div>

          <div className="feature__secondary__item1">            
            <img src={beerPongAward} alt="Beer Pong award" loading="lazy"/>
            <div className="priceTag">
            </div>
          </div>
          <div className="feature__secondary__item2">            
            <img src={spoonAward} alt="spoon award" loading="lazy"/>
            <div className="priceTag">              
            </div>
          </div>
          <div className="feature__secondary__item3">             
            <img src={tacoAward} alt="Taco award" loading="lazy"/>
            <div className="priceTag">              
            </div>
          </div>
          <div className="feature__secondary--highlight" alt="secondary highlight">24% OFF</div>
          <div className="feature__secondary--more"> more</div>
        </div> 

      </div>

      <footer className="App-footer">
        <p>footer</p>
      </footer>
    </div>
  );
}

export default App;
