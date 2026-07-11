import React, { useState, useCallback, useMemo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FeedPage from './pages/FeedPage';
import ConceptPage from './pages/ConceptPage';
import LearnPage from './pages/LearnPage';
import CategoriesPage from './pages/CategoriesPage';
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';
import WordsPage from './pages/WordsPage';
import NotFoundPage from './pages/NotFoundPage';
import { LangContext, getStoredLang, STRINGS } from './utils/lang';
import './App.css';

function LangProvider({ children }) {
  const [lang, setLangState] = useState(getStoredLang);
  const setLang = useCallback((l) => {
    setLangState(l);
    try { localStorage.setItem('financelearn:lang', l); } catch { /* ignore */ }
  }, []);
  const t = useCallback((key, vars) => {
    const entry = STRINGS[key];
    let s = entry ? (entry[lang] || entry.en || key) : key;
    if (vars) {
      for (const k of Object.keys(vars)) {
        s = s.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
      }
    }
    return s;
  }, [lang]);
  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

function App() {
  const { pathname } = useLocation();
  // The feed is a full-screen scroll experience — no footer there.
  const isFeed = pathname === '/' || pathname.startsWith('/category');

  return (
    <LangProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/category/:catId" element={<FeedPage />} />
          <Route path="/concept/:slug" element={<ConceptPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/words" element={<WordsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {!isFeed && <Footer />}
      </div>
    </LangProvider>
  );
}

export default App;