import "./App.css";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import Listing from "./components/Listing/Listing";

function App() {
  return (
    <div className="App">
      <Login />
      <Header />
      <main>
        <CategoryFilter />
        <Listing />
      </main>
    </div>
  );
}

export default App;
