import React from 'react';
import PropTypes from 'prop-types';

const CategoryCard = ({category, onCategoryChange}) => {
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

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryCard;
