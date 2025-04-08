import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputAtom = ({ value, onChangeText, placeholder, onSubmitEditing }) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      style={styles.input}
      returnKeyType="done"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: '100%',
    backgroundColor: '#ffffff',
  },
});

export default InputAtom;