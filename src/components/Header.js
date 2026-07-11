import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useFavoritesCount } from '../utils/favorites';
import { useLang, LANGS } from '../utils/lang';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const favCount = useFavoritesCount();
  const { lang, setLang, t } = useLang();

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
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>{t('nav_discover')}</Link>
          <Link to="/categories" className={`nav-link ${isActive('/categories') ? 'active' : ''}`} onClick={closeMenu}>{t('nav_categories')}</Link>
          <Link to="/search" className={`nav-link ${isActive('/search') ? 'active' : ''}`} onClick={closeMenu}>{t('nav_search')}</Link>
          <Link to="/words" className={`nav-link ${isActive('/words') ? 'active' : ''}`} onClick={closeMenu}>{t('nav_words')}</Link>
          <Link to="/favorites" className={`nav-link nav-fav ${isActive('/favorites') ? 'active' : ''}`} onClick={closeMenu}>
            <span className="nav-fav-star">★</span>
            {t('nav_favorites')}
            {favCount > 0 && <span className="nav-fav-count">{favCount > 99 ? '99+' : favCount}</span>}
          </Link>
          <Link to="/learn" className={`nav-link ${isActive('/learn') ? 'active' : ''}`} onClick={closeMenu}>{t('nav_progress')}</Link>
        </nav>

        <div className="header-actions">
          <div className="lang-toggle" role="group" aria-label="Language">
            {LANGS.map((l) => (
              <button
                key={l}
                type="button"
                className={`lang-btn ${lang === l ? 'active' : ''}`}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <Link to="/search" className="search-icon" aria-label={t('search_aria')}>🔍</Link>
          <Link to="/favorites" className="profile-button" aria-label={t('favorites_aria')} title={t('favorites_aria')}>
            <span className="header-star">★</span>
            {favCount > 0 && <span className="profile-badge">{favCount > 99 ? '99+' : favCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;