import React, { useState, useEffect } from "react";
import CocktailList from "./CocktailCard";
import drinksData from "./drinks.json";

const App = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    setDrinks(drinksData);
  }, []);

  return (
    <div>
      <h1>Summer Cocktails</h1>
      <CocktailList drinks={drinks} />
    </div>
  );
};

export default App;
