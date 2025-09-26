import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  const { image, title, author, rating, reviews, inspiration, original } = recipe;

  return (
    <div className="recipe-card">
      <div className="recipe-image-container">
        <img src={image} alt={title} className="recipe-image" />
        {inspiration && <span className="badge inspiration-badge">{inspiration}</span>}
        {original && <span className="badge yummly-original-badge">Yummly Original</span>}
        <button className="add-to-collection-btn">+</button>
      </div>
      <div className="recipe-info">
        <h3>{title}</h3>
        <p className="author">{author}</p>
        <div className="rating">
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
          <span className="reviews">{reviews}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;