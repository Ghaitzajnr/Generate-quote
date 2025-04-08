import React, { useState } from 'react';
import { View } from 'react-native';
import QuoteCard from '../molecules/QuoteCard';
import ButtonAtom from '../atoms/ButtonAtom';
import Spacer from '../atoms/Spacer';
import AddQuoteForm from '../molecules/AddQuoteForm';

const QuoteSection = ({ quote, onGenerate, onAddQuote }) => {
  const [newQuote, setNewQuote] = useState('');

  const handleAddQuote = () => {
    if (newQuote.trim() !== '') {
      onAddQuote(newQuote.trim());
      setNewQuote('');
    }
  };

  return (
    <View style={{ alignItems: 'center', paddingHorizontal: 20 }}>
      <QuoteCard quote={quote} />
      <Spacer height={24} />
      <ButtonAtom title="Generate Quote" onPress={onGenerate} />
      <Spacer height={24} />
      <AddQuoteForm
        newQuote={newQuote}
        setNewQuote={setNewQuote}
        onAddQuote={handleAddQuote}
      />
    </View>
  );
};

export default QuoteSection;