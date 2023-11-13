 // src/components/navbar.js

import React from 'react';
import logo from '../logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
        
        <div> <img src={logo} className="App-logo" alt="logo" /></div>
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item special-item">Services</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
