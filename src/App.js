import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import CategoriesPage from './pages/CategoriesPage';
import SearchPage from './pages/SearchPage';
import TermDetailPage from './pages/TermDetailPage';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState(null);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route
            path="/search"
            element={
              <SearchPage
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                setSelectedTerm={setSelectedTerm}
              />
            }
          />
          <Route
            path="/term/:termName"
            element={<TermDetailPage selectedTerm={selectedTerm} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;