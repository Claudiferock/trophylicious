import React, { Component } from "react";
import '../App.css';

const Nav = () => (
    <>
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
    </>
);

export default Nav;