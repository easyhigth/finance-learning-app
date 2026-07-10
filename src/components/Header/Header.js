import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="app-title">Finance Learning App</h1>
        <nav className="header-nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/learn" className="nav-link">Learn</a>
          <a href="/categories" className="nav-link">Categories</a>
          <a href="/search" className="nav-link">Search</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;