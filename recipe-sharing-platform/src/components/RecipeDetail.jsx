import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find(
          (recipeItem) => recipeItem.id === parseInt(id)
        );
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-600">Loading recipe...</p>;
  }

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h1 className="text-2xl font-bold text-blue-800 mb-4">{recipe.title}</h1>

      <h2 className="text-lg font-semibold text-gray-700">Ingredients:</h2>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-lg font-semibold text-gray-700">Instructions:</h2>
      <p className="text-gray-600 whitespace-pre-line">
        {recipe.instructions}
      </p>
    </div>
  );
}

export default RecipeDetail;
