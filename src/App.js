import React, { useState, useEffect } from "react";
import CocktailCard from "./CocktailCard";
import drinksData from "./drinks.json";

const App = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    setDrinks(drinksData);
  }, []);

  return (
    <div className="App">
      <CocktailCard drinks={drinks} />
    </div>
  );
};

export default App;
