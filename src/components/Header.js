import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">💰</span>
          <span className="logo-text">FinanceLearn</span>
        </Link>

        <nav className="main-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/learn" className="nav-link">Learn</Link>
          <Link to="/categories" className="nav-link">Categories</Link>
          <Link to="/search" className="nav-link">Search</Link>
        </nav>

        <div className="header-actions">
          <Link to="/search" className="search-icon">🔍</Link>
          <button className="profile-button">👤</button>
        </div>
      </div>
    </header>
  );
};

export default Header;