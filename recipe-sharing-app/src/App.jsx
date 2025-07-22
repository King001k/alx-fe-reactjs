import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;

