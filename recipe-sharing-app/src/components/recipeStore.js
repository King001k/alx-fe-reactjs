// src/components/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe]
  }))
}));

export default useRecipeStore;
