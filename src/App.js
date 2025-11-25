import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import WordTrainer from './components/WordTrainer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WordTrainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;