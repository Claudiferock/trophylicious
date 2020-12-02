import React from "react";
import favio from '../assets/img/favio.gif';
import '../App.css';

const Welcome = () => (
    <>
        <div className="Welcome" id="welcome">
          <img src={favio} alt="Favio welcomes you to Trophylicious" width="720px" loading="lazy"/>
          <div className="welcome-info">
            <p>We all deserve to be recognized and valued. Show it with a trophy! there's a trophy for anything<br/><br/><q>The trophy is earned in the hour that no one is watching</q></p>
            <a href="#feature-items" className="btn btn--white btn--animated">Feature trophies</a>
          </div>
        </div>
    </>
);

export default Welcome;