import React from 'react';
import InputAtom from '../atoms/InputAtom';
import ButtonAtom from '../atoms/ButtonAtom';
import Spacer from '../atoms/Spacer';

const AddQuoteForm = ({ newQuote, setNewQuote, onAddQuote }) => {
  return (
    <>
      <InputAtom
        placeholder="Add your own quote"
        value={newQuote}
        onChangeText={setNewQuote}
        onSubmitEditing={onAddQuote}
      />
      <Spacer height={16} />
      <ButtonAtom title="Add Quote" onPress={onAddQuote} />
    </>
  );
};

export default AddQuoteForm;