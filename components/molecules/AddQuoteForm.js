import React from 'react';
import InputAtom from '../atoms/InputAtom';
import ButtonAtom from '../atoms/ButtonAtom';
import Spacer from '../atoms/Spacer';

const AddQuoteForm = ({ newQuote, setNewQuote, onAddQuote }) => {
  const handleSubmit = () => {
    onAddQuote(newQuote);
    setNewQuote(''); // Reset input setelah submit
  };

  return (
    <>
      <InputAtom
        placeholder="Masukkan kata kunci (opsional)"
        value={newQuote}
        onChangeText={setNewQuote}
        onSubmitEditing={handleSubmit}
      />
      <Spacer height={16} />
      <ButtonAtom 
        title="Generate Quote" 
        onPress={handleSubmit} 
      />
    </>
  );
};

export default AddQuoteForm;