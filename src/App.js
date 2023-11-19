import { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import Listing from "./components/Listing/Listing";
import Footer from "./components/Footer/Footer";
import { CategoryProvider } from "./context/CategoryContext";

function App() {
  return (
    <div className="App">
      <CategoryProvider>
        <Login />
        <Header />
        <main>
          <CategoryFilter />
          <Listing />
        </main>
        <Footer />
      </CategoryProvider>
    </div>
  );
}

export default App;
