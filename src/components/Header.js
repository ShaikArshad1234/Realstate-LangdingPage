import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/es-logo690.png" alt="Estate619 Logo" />
          <h1>S A House</h1>
        
        </div>
        
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="btn-primary">Hire Me</a>
      </nav>
    </header>
  );
};

export default Header;
