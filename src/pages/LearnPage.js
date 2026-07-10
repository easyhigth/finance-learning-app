import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LessonCard from '../components/LessonCard/LessonCard';
import SearchBar from '../components/SearchBar/SearchBar';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import { getSampleFinanceTerms, searchFinanceTerms } from '../services/wikipediaService';
import './LearnPage.css';

const LearnPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [completedLessons, setCompletedLessons] = useState(new Set());

  // These would come from user data in a real app
  const progress = 12;
  const totalLessons = 48;

  // Sample lessons data
  const sampleLessons = [
    { id: 1, title: "Introduction to Finance", description: "Learn the basics of finance and its importance in our daily lives", completed: true },
    { id: 2, title: "Time Value of Money", description: "Understand how money's value changes over time", completed: true },
    { id: 3, title: "Interest Rates", description: "Explore how interest rates work and their impact on investments", completed: false },
    { id: 4, title: "Compound Interest", description: "Discover the power of compound interest in growing wealth", completed: false },
    { id: 5, title: "Risk and Return", description: "Learn about the relationship between risk and potential returns", completed: false },
  ];

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const results = await searchFinanceTerms(query);
      setSearchResults(results.slice(0, 5)); // Limit to 5 results
    } catch (err) {
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const toggleLessonComplete = (lessonId) => {
    const newCompleted = new Set(completedLessons);
    if (newCompleted.has(lessonId)) {
      newCompleted.delete(lessonId);
    } else {
      newCompleted.add(lessonId);
    }
    setCompletedLessons(newCompleted);
  };

  return (
    <div className="learn-page">
      <div className="learn-header">
        <h2>Learning Path</h2>
        <p>Follow structured lessons to master finance concepts</p>
      </div>

      <div className="learn-progress">
        <ProgressBar progress={progress} total={totalLessons} />
      </div>

      <div className="search-section">
        <h3>Search Specific Terms</h3>
        <SearchBar onSearch={handleSearch} />

        {loading && <div className="search-loading">Searching...</div>}

        {searchResults.length > 0 && (
          <div className="search-results-section">
            <h4>Quick Search Results</h4>
            <div className="search-results-list">
              {searchResults.map((result, index) => (
                <Link
                  to={`/term/${encodeURIComponent(result.title)}`}
                  key={index}
                  className="search-result-link"
                >
                  {result.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="lessons-section">
        <h3>Recommended Lessons</h3>
        <div className="lessons-list">
          {sampleLessons.map(lesson => (
            <LessonCard
              key={lesson.id}
              title={lesson.title}
              description={lesson.description}
              completed={lesson.completed || completedLessons.has(lesson.id)}
              onClick={() => toggleLessonComplete(lesson.id)}
            />
          ))}
        </div>
      </div>

      <div className="categories-section">
        <h3>Explore Categories</h3>
        <div className="categories-grid">
          {Object.entries(getSampleFinanceTerms()).slice(0, 4).map(([category, terms]) => (
            <div key={category} className="category-box">
              <h4>{category}</h4>
              <ul>
                {terms.slice(0, 3).map((term, index) => (
                  <li key={index}>{term}</li>
                ))}
              </ul>
              <Link to="/categories" className="explore-link">Explore</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnPage;