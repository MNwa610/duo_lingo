import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WordTrainer from './components/WordTrainer';

function App() {
  return (
    <Router basename="/your-repo-name">
      <div className="App">
        <Routes>
          <Route path="/" element={<WordTrainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;