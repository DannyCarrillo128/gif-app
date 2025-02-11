import { useState } from 'react';

import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Okami']); // Hooks should not be within conditionals,
                                                           // it goes against their principles.
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={ (value) => onAddCategory(value) }
      />
      {
        categories.map(category => (
          <GifGrid key={ category } category={ category }/>
        ))
      }
    </>
  );

};
