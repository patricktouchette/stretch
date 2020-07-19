import React from 'react';
import './Header.css';

const Header = ({ handleHomeClick, handleAboutClick }) => (
  <header>
    <div className="header-container container">
      <h4 onClick={() => handleHomeClick()}>
        Stretch<span style={{ color: 'var(--secondary)' }}>App</span>
      </h4>
      <p onClick={() => handleAboutClick()}>About</p>
    </div>
  </header>
);

export default Header;
