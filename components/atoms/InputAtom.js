import React from 'react';
import { TextInput, StyleSheet, Platform } from 'react-native';

const InputAtom = ({ value, onChangeText, placeholder, onSubmitEditing }) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const inputStyle = [
    styles.base,
    Platform.OS === 'web' && styles.web,
    isFocused && styles.focus
  ];

  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      style={inputStyle}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      returnKeyType="done"
    />
  );
};

// Platform-specific styling
const styles = StyleSheet.create({
  base: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
    backgroundColor: '#ffffff',
    fontSize: 16,
    color: '#333',
  },
  web: {
    outlineStyle: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    boxSizing: 'border-box',
    minHeight: 48,
  },
  focus: {
    borderColor: '#4d90fe',
    ...(Platform.OS === 'web' && {
      boxShadow: '0 0 0 2px rgba(77, 144, 254, 0.2)',
    }),
  },
});

export default InputAtom;