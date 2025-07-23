import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  // All available recipes
  recipes: [],

  // User's favorite recipe IDs
  favorites: [],

  // Recommended recipes
  recommendations: [],

  // Search term for filtering
  searchTerm: '',

  // Set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Add a new recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  // Toggle favorite status and update recommendations
  toggleFavorite: (recipeId) => {
    const { favorites, recipes } = get();

    const updatedFavorites = favorites.includes(recipeId)
      ? favorites.filter((id) => id !== recipeId)
      : [...favorites, recipeId];

    // Get favorite recipes
    const favoriteRecipes = recipes.filter((r) =>
      updatedFavorites.includes(r.id)
    );

    // Extract unique ingredients from favorite recipes
    const favoriteIngredients = favoriteRecipes.flatMap((r) => r.ingredients || []);
    const uniqueIngredients = [...new Set(favoriteIngredients)];

    // Generate recommendations (not in favorites but share ingredients)
    const recommended = recipes.filter(
      (recipe) =>
        !updatedFavorites.includes(recipe.id) &&
        recipe.ingredients?.some((ing) => uniqueIngredients.includes(ing))
    );

    set({
      favorites: updatedFavorites,
      recommendations: recommended,
    });
  },
}));
