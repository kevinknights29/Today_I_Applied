import React, {createContext, useState, useContext} from 'react';

const CategoryContext = createContext();

export const useCategory = () => useContext(CategoryContext);

export const CategoryProvider = ({children}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <CategoryContext.Provider
      value={{selectedCategory, handleCategoryChange}}
    >
      {children}
    </CategoryContext.Provider>
  );
};
