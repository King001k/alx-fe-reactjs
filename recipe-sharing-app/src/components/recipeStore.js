import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  setRecipes: (newRecipes) => set({ recipes: newRecipes }),

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  removeRecipe: (index) =>
    set((state) => ({
      recipes: state.recipes.filter((_, i) => i !== index),
    })),

  clearRecipes: () => set({ recipes: [] }),
}));

export default useRecipeStore;

