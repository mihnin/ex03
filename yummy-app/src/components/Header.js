import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <h2>Just For You</h2>
      <div className="search-icon">
        <i className="fas fa-search"></i>
      </div>
    </header>
  );
};

export default Header;