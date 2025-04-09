import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import ButtonAtom from '../atoms/ButtonAtom';
import TextAtom from '../atoms/TextAtom';
import Spacer from '../atoms/Spacer';
import AddQuoteForm from '../molecules/AddQuoteForm';
import { generateRandomQuote, getRandomPredefinedQuote } from '../../utils/quoteGenerator';

const QuoteSection = ({ 
  quote, 
  onGenerate, 
  onAddQuote,
  userWords,
  currentWord,
  onWordChange,
  onAddWord,
  onDeleteWord
}) => {
  return (
    <View style={styles.container}>
      <TextAtom style={styles.quoteText}>{quote}</TextAtom>
      <Spacer height={20} />
      
      <View style={styles.wordInputContainer}>
        <TextInput
          style={styles.wordInput}
          value={currentWord}
          onChangeText={onWordChange}
          placeholder="Enter a word"
          onSubmitEditing={onAddWord}
        />
        <ButtonAtom 
          title="Add Word" 
          onPress={onAddWord} 
          style={styles.addWordButton}
        />
      </View>
      
      {userWords.length > 0 && (
        <>
          <TextAtom style={styles.wordListTitle}>Your Words:</TextAtom>
          <FlatList
            data={userWords}
            renderItem={({ item, index }) => (
              <View style={styles.wordItemContainer}>
                <TextAtom style={styles.wordItem}>{item}</TextAtom>
                <ButtonAtom 
                  title="×" 
                  onPress={() => onDeleteWord(index)}
                  style={styles.deleteButton}
                />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            contentContainerStyle={styles.wordList}
          />
        </>
      )}
      
      <Spacer height={20} />
      <ButtonAtom 
        title={userWords.length > 0 ? "Generate Random Words" : "Generate Random Quote"} 
        onPress={() => {
          if (userWords.length > 0) {
            onGenerate(generateRandomQuote(userWords));
          } else {
            onGenerate(getRandomPredefinedQuote());
          }
        }}
      />
      <Spacer height={20} />
      <AddQuoteForm onSubmit={onAddQuote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  quoteText: {
    fontSize: 18,
    textAlign: 'center',
  },
  wordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  wordInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  addWordButton: {
    width: 100,
  },
  wordListTitle: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  wordList: {
    marginTop: 5,
  },
  wordItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 5,
  },
  wordItem: {
    marginRight: 5,
  },
  deleteButton: {
    width: 16,
    height: 16,
    padding: 0,
    backgroundColor: '#ff0000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QuoteSection;
