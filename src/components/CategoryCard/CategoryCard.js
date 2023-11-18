import React from "react";

const CategoryCard = ({ category, onCategoryFilter }) => {
  return (
    <div>
      <button onClick={() => onCategoryFilter(category)}>{category}</button>
    </div>
  );
};

export default CategoryCard;
