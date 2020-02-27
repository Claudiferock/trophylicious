import React from 'react';
import ducks from './assets/img/ducks.jpg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <nav>
          <a>bla</a>
          <a>bla</a>
          <a>bla</a>
        </nav>
      </header>

      <div className="App-content">
        <div className="Feature-items">
          <div className="feature__main"> Main</div>
          <div className="feature__main--img">
            <img src={ducks} alt="Quack awards" />
          </div>
          <div className="feature__main--details"> main details</div>
          <div className="feature__main--highlight"> main highlight</div>
          <div className="feature__secondary__item1"> secondary item1</div>
          <div className="feature__secondary__item2"> secondary item2</div>
          <div className="feature__secondary__item3"> secondary item3</div>
          <div className="feature__secondary--highlight"> secondary highlight</div>
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
