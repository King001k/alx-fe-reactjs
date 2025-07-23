import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../components/recipeStore';

const RecipeList = () => {
  const { recipes, searchTerm } = useRecipeStore();

  // Filter recipes based on search term
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
