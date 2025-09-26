import React from 'react';
import RecipeCard from './RecipeCard';
import './RecipeGrid.css';

const RecipeGrid = ({ recipes }) => {
  return (
    <div className="recipe-grid">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeGrid;