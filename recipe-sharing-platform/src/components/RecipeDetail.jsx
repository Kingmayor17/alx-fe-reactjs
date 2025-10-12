import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = data.find((item) => item.id === parseInt(id));

  if (!recipe) return <p className="text-center mt-10 text-gray-500">Recipe not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-md mb-4" />
      <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
      <p className="text-gray-600 mb-4">{recipe.summary}</p>
      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Ingredient 1</li>
        <li>Ingredient 2</li>
        <li>Ingredient 3</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <ol className="list-decimal ml-6">
        <li>Step 1: Do this.</li>
        <li>Step 2: Do that.</li>
      </ol>
    </div>
  );
};

export default RecipeDetail;
