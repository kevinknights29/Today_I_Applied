import React from "react";

const CategoryCard = (prop) => {
  const { category } = prop.category;
  return (
    <div>
      <button>{category}</button>
    </div>
  );
};

export default CategoryCard;
