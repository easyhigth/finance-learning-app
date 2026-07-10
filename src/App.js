import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FeedPage from './pages/FeedPage';
import ConceptPage from './pages/ConceptPage';
import LearnPage from './pages/LearnPage';
import CategoriesPage from './pages/CategoriesPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  const { pathname } = useLocation();
  // The feed is a full-screen scroll experience — no footer there.
  const isFeed = pathname === '/' || pathname.startsWith('/category');

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/category/:catId" element={<FeedPage />} />
        <Route path="/concept/:slug" element={<ConceptPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {!isFeed && <Footer />}
    </div>
  );
}

export default App;