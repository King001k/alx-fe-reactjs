import React from 'react';
import { useRecipeStore } from "../store/recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '0.5rem',
        width: '100%',
        marginBottom: '1rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
      }}
    />
  );
};

export default SearchBar;
