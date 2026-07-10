import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Finance Learning App</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;