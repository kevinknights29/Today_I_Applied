import React from "react";

const CategoryCard = ({ category, onCategoryChange }) => {
  return (
    <div>
      <button onClick={() => onCategoryChange(category)}>{category}</button>
    </div>
  );
};

export default CategoryCard;
