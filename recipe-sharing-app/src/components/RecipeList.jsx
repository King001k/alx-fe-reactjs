import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);

  // Automatically re-filter whenever searchTerm changes
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>Prep Time: {recipe.prepTime} mins</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
