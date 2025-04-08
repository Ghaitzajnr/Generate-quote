import React, { useState } from 'react';
import { quotes as initialQuotes } from '../data/quotes';
import MainLayout from '../components/templates/MainLayout';
import QuoteSection from '../components/organisms/QuoteSection';

const getRandomQuote = (quotesArray) => {
  const index = Math.floor(Math.random() * quotesArray.length);
  return quotesArray[index];
};

const HomeScreen = () => {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [quote, setQuote] = useState(getRandomQuote(quotes));

  const handleGenerate = () => {
    setQuote(getRandomQuote(quotes));
  };

  const handleAddQuote = (newQuote) => {
    const updatedQuotes = [...quotes, newQuote];
    setQuotes(updatedQuotes);
    setQuote(newQuote);
  };

  return (
    <MainLayout>
      <QuoteSection quote={quote} onGenerate={handleGenerate} onAddQuote={handleAddQuote} />
    </MainLayout>
  );
};

export default HomeScreen;