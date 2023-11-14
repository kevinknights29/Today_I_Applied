import React from "react";

const CategoryFilter = () => {
  return (
    <div>
      <aside className="sidebar">
        <ul>
          <li>
            <button>All</button>
          </li>
          <li>
            <button>Engineering</button>
          </li>
          <li>
            <button>Data</button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default CategoryFilter;
