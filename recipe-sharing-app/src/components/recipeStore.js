import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  // All available recipes
  recipes: [],

  // User's favorite recipe IDs
  favorites: [],

  // Recommended recipes based on favorite ingredients
  recommendations: [],

  // Add a new recipe to the list
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  // Toggle a recipe in and out of favorites
  toggleFavorite: (recipeId) => {
    const { favorites, recipes } = get();

    const updatedFavorites = favorites.includes(recipeId)
      ? favorites.filter((id) => id !== recipeId)
      : [...favorites, recipeId];

    // Get the favorite recipes
    const favoriteRecipes = recipes.filter((r) =>
      updatedFavorites.includes(r.id)
    );

    // Gather unique ingredients from favorite recipes
    const favoriteIngredients = favoriteRecipes.flatMap((r) => r.ingredients || []);
    const uniqueIngredients = [...new Set(favoriteIngredients)];

    // Filter recommended recipes that share ingredients, not in favorites
    const recommended = recipes.filter(
      (recipe) =>
        !updatedFavorites.includes(recipe.id) &&
        recipe.ingredients?.some((ing) => uniqueIngredients.includes(ing))
    );

    // Update the store
    set({
      favorites: updatedFavorites,
      recommendations: recommended,
    });
  },
}));
