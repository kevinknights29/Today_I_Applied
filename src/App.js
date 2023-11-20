import './App.css';
import React from 'react';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import Listing from './components/Listing/Listing';
import Footer from './components/Footer/Footer';
import {CategoryProvider} from './context/CategoryContext';

/**
 * App component is the root of the application.
 * It wraps the entire application with the CategoryProvider
 * for state management and includes major components like:
 * Login, Header, CategoryFilter, Listing, and Footer.
 *
 * @return {JSX.Element} The App component rendered as a React element.
 */
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
