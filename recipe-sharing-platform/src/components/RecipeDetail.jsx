import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-500">
        Loading recipe...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="text-red-500 font-medium hover:underline mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {recipe.title}
        </h1>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Ingredients
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Step 1: Do something</li>
              <li>Step 2: Cook something</li>
              <li>Step 3: Serve and enjoy</li>
            </ol>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
  {recipe.ingredients?.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ))}
</ul>

<ol className="list-decimal list-inside space-y-2 text-gray-600">
  {recipe.instructions?.map((step, index) => (
    <li key={index}>{step}</li>
  ))}
</ol>
          </div>
        </div>
      </div>
    </div>
  );
}


export default RecipeDetail;
