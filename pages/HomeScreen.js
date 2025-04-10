import React, { useState } from 'react';
import { quotes as initialQuotes } from '../data/quote';
import { generateRandomQuote, combineWithTemplate } from '../utils/quoteGenerator';
import MainLayout from '../components/templates/MainLayout';
import QuoteSection from '../components/organisms/QuoteSection';

const quoteTemplates = [
  "Life is like {word}, full of surprises",
  "The secret of {word} is to keep moving",
  "{word} is the key to happiness",
  "Without {word}, life would be boring"
];

const getRandomQuote = (quotesArray) => {
  const index = Math.floor(Math.random() * quotesArray.length);
  return quotesArray[index];
};

const HomeScreen = () => {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [quote, setQuote] = useState(getRandomQuote(quotes));
  const [userWords, setUserWords] = useState([]);
  const [currentWord, setCurrentWord] = useState('');

  const handleGenerateQuote = (keyword) => {
    const generatedQuote = generateQuote(quotes, keyword);
    setCurrentQuote(generatedQuote);
  };

  const handleAddWord = () => {
    if (currentWord.trim()) {
      setUserWords([...userWords, currentWord.trim()]);
      setCurrentWord('');
    }
  };

  const handleDeleteWord = (index) => {
    const updatedWords = [...userWords];
    updatedWords.splice(index, 1);
    setUserWords(updatedWords);
  };

  const handleAddQuote = (newQuote) => {
    const updatedQuotes = [...quotes, newQuote];
    setQuotes(updatedQuotes);
    setQuote(newQuote);
  };

  return (
    <MainLayout>
      <QuoteSection 
        quote={quote} 
        onGenerate={handleGenerate} 
        onAddQuote={handleAddQuote}
        userWords={userWords}
        currentWord={currentWord}
        onWordChange={setCurrentWord}
        onAddWord={handleAddWord}
        onDeleteWord={handleDeleteWord}
      />
    </MainLayout>
  );
};

export default HomeScreen;