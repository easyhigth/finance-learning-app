import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-icon">📭</div>
        <h1>Page Not Found</h1>
        <p>
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link to="/" className="home-button">
          ← Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
