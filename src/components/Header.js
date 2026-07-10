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

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon">💰</span>
          <span className="logo-text">FinanceLearn</span>
        </Link>

        <div
          className="menu-toggle"
          onClick={toggleMenu}
          role="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleMenu()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>Home</Link>
          <Link to="/learn" className={`nav-link ${isActive('/learn') ? 'active' : ''}`} onClick={closeMenu}>Learn</Link>
          <Link to="/categories" className={`nav-link ${isActive('/categories') ? 'active' : ''}`} onClick={closeMenu}>Categories</Link>
          <Link to="/search" className={`nav-link ${isActive('/search') ? 'active' : ''}`} onClick={closeMenu}>Search</Link>
        </nav>

        <div className="header-actions">
          <Link to="/search" className="search-icon" aria-label="Search">🔍</Link>
          <button className="profile-button" aria-label="Profile" title="Profile">👤</button>
        </div>
      </div>
    </header>
  );
};

export default Header;