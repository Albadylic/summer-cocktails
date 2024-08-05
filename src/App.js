import React, { useState, useEffect } from "react";
import CocktailCard from "./CocktailCard";
import drinksData from "./drinks.json";

const App = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    setDrinks(drinksData);
  }, []);

  return (
    <div>
      <CocktailCard drinks={drinks} />
    </div>
  );
};

export default App;
