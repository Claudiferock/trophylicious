import React from 'react';
import ducksAward from './assets/img/ducks.jpg';
import beerPongAward from './assets/img/beer_pong.JPG';
import okAward from './assets/img/ok.jpg';
import tacoAward from './assets/img/taco.jpg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <nav>
          <a>Categories</a>
          <a>About</a>
          <a>Contact</a>
          <a>Log In</a>
          <a>Basquet</a>
        </nav>
      </header>

      <div className="App-content">
        <div className="Feature-items">
          <div className="feature__main"> Main</div>
          <div className="feature__main--img">
            <img src={ducksAward} alt="Quack awards" />
          </div>
          <div className="feature__main--details"> main details</div>
          <div className="feature__main--highlight" alt="main highlight">60% OFF</div>

          <div className="feature__secondary__item1">
            <h2>Beer Pong</h2>
            <img src={beerPongAward} alt="Beer Pong award" />
            <div className="priceTag">

            </div>
          </div>
          <div className="feature__secondary__item2"> 
            <h2>Perfect</h2>
            <img src={okAward} alt="Ok award" />
            <div className="priceTag">
              
            </div>
          </div>
          <div className="feature__secondary__item3"> 
            <h2>Taco</h2>
            <img src={tacoAward} alt="Taco award" />
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
