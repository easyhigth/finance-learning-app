import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="app-footer-inner">
        <Link to="/" className="app-footer-brand">
          <span>💰</span>
          <span>FinanceLearn</span>
        </Link>
        <nav className="app-footer-links">
          <Link to="/learn">Learn</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/search">Search</Link>
        </nav>
      </div>
      <p className="app-footer-copy">
        FinanceLearn · Wikipedia-powered finance education · © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;