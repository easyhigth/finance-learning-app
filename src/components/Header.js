import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/categories') return location.pathname.startsWith('/categories') || location.pathname.startsWith('/category');
    return location.pathname.startsWith(path);
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
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
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
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>Discover</Link>
          <Link to="/categories" className={`nav-link ${isActive('/categories') ? 'active' : ''}`} onClick={closeMenu}>Categories</Link>
          <Link to="/search" className={`nav-link ${isActive('/search') ? 'active' : ''}`} onClick={closeMenu}>Search</Link>
          <Link to="/learn" className={`nav-link ${isActive('/learn') ? 'active' : ''}`} onClick={closeMenu}>Progress</Link>
        </nav>

        <div className="header-actions">
          <Link to="/search" className="search-icon" aria-label="Search">🔍</Link>
          <Link to="/learn" className="profile-button" aria-label="Your progress" title="Your progress">📊</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;