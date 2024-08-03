import React from "react";
import "./CocktailCard.css";

const getColorContrast = (hexColor) => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return brightness < 128 ? "light" : "dark";
};

const CocktailCard = ({ drink }) => {
  const cardStyle = {
    "--primary-color": drink.primaryColor,
    "--secondary-color": drink.secondaryColor,
  };

  const isDarkText = getColorContrast(drink.primaryColor) === "dark";

  return (
    <div
      className="cocktail-card"
      style={cardStyle}
      data-dark-text={isDarkText}
    >
      <h2>
        {drink.name} {drink.emoji}
      </h2>
      <h3>Ingredients:</h3>
      <ul>
        {drink.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Method:</h3>
      <ol>
        {drink.method.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <p>
        <strong>Tasting notes:</strong> {drink.tastingNotes}
      </p>
    </div>
  );
};

const CocktailList = ({ drinks }) => (
  <div className="cocktail-list">
    {drinks.map((drink, index) => (
      <CocktailCard key={index} drink={drink} />
    ))}
  </div>
);

export default CocktailList;
