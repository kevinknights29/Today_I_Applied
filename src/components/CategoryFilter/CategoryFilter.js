import React from "react";
import { useState, useEffect } from "react";
import supabase from "../../client/supabaseClient";
import CategoryCard from "../CategoryCard/CategoryCard";

const CategoryFilter = ({ onCategoryFilter }) => {
  // Define state for the categories
  const [categories, setCategories] = useState([]);

  // Fetch the job categories (tags) from the database when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      let { data: categories, error } = await supabase
        .from("categories")
        .select("id, category")
        .range(0, 9);

      if (error) {
        console.error(error);
      } else {
        console.log("Read job categories successfully:", categories);
        setCategories(categories);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <aside className="sidebar">
        <ul>
          <li>
            <button onClick={() => onCategoryFilter("All")}>All</button>
          </li>

          {categories.map((category) => (
            <li key={category.id}>
              <CategoryCard
                category={category.category}
                onCategoryFilter={onCategoryFilter}
              />
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default CategoryFilter;
