import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">💰</span>
          <span className="logo-text">FinanceLearn</span>
        </Link>

        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/learn" className={`nav-link ${isActive('/learn') ? 'active' : ''}`}>Learn</Link>
          <Link to="/categories" className={`nav-link ${isActive('/categories') ? 'active' : ''}`}>Categories</Link>
          <Link to="/search" className={`nav-link ${isActive('/search') ? 'active' : ''}`}>Search</Link>
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