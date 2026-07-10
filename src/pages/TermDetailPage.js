import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchFinanceTerm } from '../services/wikipediaService';
import './TermDetailPage.css';

const TermDetailPage = () => {
  const { termName } = useParams();
  const navigate = useNavigate();
  const [termData, setTermData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const loadTermData = async () => {
      if (!termName) return;

      setLoading(true);
      setError(null);
      try {
        const data = await fetchFinanceTerm(termName);
        setTermData(data);
      } catch (err) {
        setError('Failed to load term details. Please try again.');
        console.error('Error loading term:', err);
      } finally {
        setLoading(false);
      }
    };

    loadTermData();
  }, [termName]);

  const handleComplete = () => {
    setCompleted(true);
    // In a real app, this would save to a database
    setTimeout(() => {
      alert('Lesson marked as completed! Great job!');
    }, 500);
  };

  if (loading) {
    return (
      <div className="term-detail-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading term information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="term-detail-page">
        <div className="error-container">
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
          <Link to="/search" className="back-button">← Back to Search</Link>
        </div>
      </div>
    );
  }

  if (!termData) {
    return (
      <div className="term-detail-page">
        <div className="not-found-container">
          <h2>Term Not Found</h2>
          <p>Sorry, we couldn't find the term you're looking for.</p>
          <Link to="/search" className="back-button">← Back to Search</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="term-detail-page">
      <Link to="/search" className="back-button">← Back to Search</Link>

      <div className="term-header">
        <h1>{termData.title}</h1>
        {termData.description && (
          <p className="term-description">{termData.description}</p>
        )}
      </div>

      <div className="term-content">
        {termData.thumbnail && (
          <div className="term-image">
            <img src={termData.thumbnail.source} alt={termData.title} />
          </div>
        )}

        {termData.extract && (
          <div className="term-extract">
            <div dangerouslySetInnerHTML={{ __html: termData.extract }} />
          </div>
        )}

        {termData.content_urls && (
          <div className="wikipedia-link-container">
            <a
              href={termData.content_urls.desktop.page}
              target="_blank"
              rel="noopener noreferrer"
              className="wikipedia-link"
            >
              Read full article on Wikipedia →
            </a>
          </div>
        )}
      </div>

      <div className="learning-actions">
        <button
          className={`action-button complete-button ${completed ? 'completed' : ''}`}
          onClick={handleComplete}
          disabled={completed}
        >
          {completed ? '✓ Completed' : 'Mark as Completed'}
        </button>

        <button className="action-button quiz-button">
          Take Quiz
        </button>

        <button className="action-button bookmark-button">
          Bookmark Term
        </button>
      </div>

      <div className="related-terms">
        <h3>Related Finance Terms</h3>
        <div className="related-grid">
          <div className="related-term" onClick={() => navigate('/term/Investment')}>
            Investment
          </div>
          <div className="related-term" onClick={() => navigate('/term/Stock')}>
            Stock
          </div>
          <div className="related-term" onClick={() => navigate('/term/Bond')}>
            Bond
          </div>
          <div className="related-term" onClick={() => navigate('/term/Portfolio')}>
            Portfolio
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermDetailPage;