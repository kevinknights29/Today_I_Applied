import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import {useCategory} from '../../context/CategoryContext';
import useFetchData from '../../hooks/useFetchData';

const CategoryFilter = () => {
  const {handleCategoryChange} = useCategory();
  const {
    data: categories,
    error,
    loading,
  } = useFetchData('categories', 'id, category', 9);

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error fetching categories: {error}</div>;

  return (
    <div>
      <aside className="sidebar">
        <ul>
          <li>
            <button onClick={() => handleCategoryChange('All')}>All</button>
          </li>

          {categories.map((category) => (
            <li key={category.id}>
              <CategoryCard
                category={category.category}
                onCategoryChange={handleCategoryChange}
              />
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default CategoryFilter;
