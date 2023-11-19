import React from "react";

const CategoryCard = ({ category, onCategoryChange }) => {
  return (
    <div>
      <button
        onClick={() => onCategoryChange(category)}
        aria-label={`Filter by ${category} category`}
      >
        {category}
      </button>
    </div>
  );
};

export default CategoryCard;
