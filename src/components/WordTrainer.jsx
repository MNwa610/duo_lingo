import React, { useState, useEffect } from 'react';
import vocabularyData from '../data/top1000.json';
import './WordTrainer.css';

const WordTrainer = () => {
  const [currentWord, setCurrentWord] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    getRandomWord();
  }, []);

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * vocabularyData.length);
    const randomWord = vocabularyData[randomIndex];
    
    setCurrentWord(randomWord);
    setShowTranslation(false);
  };

  const handleShowTranslation = () => {
    setShowTranslation(true);
  };

  return (
    <div className="word-trainer">
      <header className="app-header">
        <h1>Тренажер английских слов</h1>
        <p>Изучайте 1000 самых частых английских слов</p>
        <div className="progress">
          Всего слов: {vocabularyData.length}
        </div>
      </header>

      <div className="main-content">
        <div className="word-card">
          {currentWord && (
            <>
              <div className="word-header">
                <h2 className="english-word">{currentWord.english}</h2>
              </div>

              {showTranslation ? (
                <div className="translation-section">
                  <p className="russian-translation">{currentWord.russian}</p>
                  <button className="next-btn" onClick={getRandomWord}>
                    Следующее слово
                  </button>
                </div>
              ) : (
                <button className="show-btn" onClick={handleShowTranslation}>
                  Показать перевод
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WordTrainer;