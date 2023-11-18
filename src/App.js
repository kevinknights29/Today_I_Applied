import { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import Listing from "./components/Listing/Listing";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <Login />
      <Header />
      <main>
        <CategoryFilter onCategoryFilter={handleCategoryChange} />
        <Listing selectedCategory={selectedCategory} />
      </main>
    </div>
  );
}

export default App;
