// Zustand store to manage recipes, favorites, and recommendations
export const useRecipeStore = create((set, get) => ({
  // All available recipes
  recipes: [],

  // List of recipe IDs marked as favorite
  favorites: [],

  // Recommended recipes based on user's favorites
  recommendations: [],

  // Add a new recipe
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe],
  })),

  // Toggle a recipe as favorite/unfavorite
  toggleFavorite: (recipeId) => set((state) => {
    const favorites = state.favorites.includes(recipeId)
      ? state.favorites.filter((id) => id !== recipeId)
      : [...state.favorites, recipeId];

    // Find favorite recipes
    const { recipes } = get();
    const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

    // Gather all ingredients from favorite recipes
    const favoriteIngredients = favoriteRecipes.flatMap((r) => r.ingredients || []);
    const uniqueIngredients = [...new Set(favoriteIngredients)];

    // Recommend recipes that share similar ingredients but aren't already favorites
    const recommended = recipes.filter(
      (recipe) =>
        !favorites.includes(recipe.id) &&
        recipe.ingredients?.some((ing) => uniqueIngredients.includes(ing))
    );

    return {
      favorites,
      recommendations: recommended,
    };
  }),
}));
