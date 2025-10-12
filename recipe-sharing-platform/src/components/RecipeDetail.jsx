import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();

        if (data.meals && data.meals.length > 0) {
          const meal = data.meals[0];

          const ingredients = [];
          for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            if (ingredient) ingredients.push(ingredient);
          }

          const formattedRecipe = {
            title: meal.strMeal,
            ingredients,
            instructions: meal.strInstructions,
          };

          setRecipe(formattedRecipe);
        } else {
          setError("Recipe not found.");
        }
      } catch (err) {
        setError("Failed to fetch recipe data.");
      } finally {
        setLoading(false);
      }
    }

    fetchRecipe();
  }, [id]);

  if (loading) return <p className="text-center mt-20">Loading recipe...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{recipe.title}</h1>

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {recipe.instructions}
      </p>
    </div>
  );
}

export default RecipeDetail;
