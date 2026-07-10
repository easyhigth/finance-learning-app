import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './TermDetailPage.css';

const TermDetailPage = ({ selectedTerm }) => {
  const { termName } = useParams();

  if (!selectedTerm) {
    return (
      <div className="term-detail-page">
        <div className="term-not-found">
          <h2>Term Not Found</h2>
          <p>Sorry, we couldn't find the term you're looking for.</p>
          <Link to="/search" className="back-link">Back to Search</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="term-detail-page">
      <Link to="/search" className="back-link">← Back to Search</Link>

      <div className="term-header">
        <h1>{selectedTerm.title}</h1>
        {selectedTerm.description && (
          <p className="term-description">{selectedTerm.description}</p>
        )}
      </div>

      {selectedTerm.extract && (
        <div className="term-content">
          <div
            className="term-extract"
            dangerouslySetInnerHTML={{ __html: selectedTerm.extract }}
          />
        </div>
      )}

      {selectedTerm.content_urls && (
        <div className="term-links">
          <a
            href={selectedTerm.content_urls.desktop.page}
            target="_blank"
            rel="noopener noreferrer"
            className="wikipedia-link"
          >
            Read more on Wikipedia
          </a>
        </div>
      )}

      <div className="learning-actions">
        <button className="quiz-button">Take Quiz</button>
        <button className="bookmark-button">Bookmark Term</button>
        <button className="complete-button">Mark as Completed</button>
      </div>
    </div>
  );
};

export default TermDetailPage;