import React from 'react';

import Nav from './components/nav.jsx';
import Welcome from './components/welcome.jsx';
import FeatureItems from './components/featureItems/featureItems.jsx';
import Categories from './components/categories.jsx'
import Footer from './components/footer.jsx';

import './App.css';

function App() {
  return (
    <div className="App" id="home">
      <Nav/>
      <div className="App-content">
        <Welcome/>
        <FeatureItems/>
        <Categories/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
