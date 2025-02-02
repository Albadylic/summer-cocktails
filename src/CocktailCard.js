import React, { useState, useEffect, useCallback } from "react";
import "./CocktailCard.css";

const getColorContrast = (hexColor) => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return brightness < 128 ? "light" : "dark";
};

const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const Carousel = ({ drinks }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % drinks.length);
  }, [drinks.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + drinks.length) % drinks.length
    );
  }, [drinks.length]);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [handleNext, handlePrev]);

  useEffect(() => {
    if (drinks.length > 0) {
      const primaryColor = drinks[currentIndex].primaryColor;
      const transparentColor = hexToRgba(primaryColor, 0.2);
      document.body.style.backgroundColor = transparentColor;
    }
  }, [currentIndex, drinks]);

  if (drinks.length === 0) return <div>No drinks available.</div>;

  const cardStyle = {
    "--primary-color": drinks[currentIndex].primaryColor,
    "--secondary-color": drinks[currentIndex].secondaryColor,
  };

  const isDarkText =
    getColorContrast(drinks[currentIndex].primaryColor) === "dark";

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={handlePrev}>
        ‹
      </button>
      <div
        className="cocktail-card"
        style={cardStyle}
        data-dark-text={isDarkText}
      >
        <h2>
          {drinks[currentIndex].name} {drinks[currentIndex].emoji}
        </h2>
        <h3>Ingredients:</h3>
        <ul>
          {drinks[currentIndex].ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Method:</h3>
        <ol>
          {drinks[currentIndex].method.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
        <p>
          <strong>Tasting notes:</strong> {drinks[currentIndex].tastingNotes}
        </p>
      </div>
      <button className="carousel-button right" onClick={handleNext}>
        ›
      </button>
      <div className="carousel-dots">
        {drinks.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

const CocktailCard = ({ drinks }) => (
  <div className="cocktail-list">
    <Carousel drinks={drinks} />
  </div>
);

export default CocktailCard;
