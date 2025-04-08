import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextAtom from '../atoms/TextAtom';

const QuoteCard = ({ quote }) => {
  return (
    <View style={styles.card}>
      <TextAtom style={styles.quoteText}>{String(quote)}</TextAtom>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#fff6e6',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#333',
  },
});

export default QuoteCard;