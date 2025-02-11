import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length === 0) return;

    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={ onSubmit } >
      <input
        type="text"
        placeholder="Type to search..."
        value={ inputValue }
        onChange={ onInputChange } /> {/* If you provide a value without a handle, this field will be read only. */}
    </form>
  );

};
