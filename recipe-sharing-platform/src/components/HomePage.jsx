import React, { useState, useEffect } from "react";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch data here.
    // For this task, we load the static JSON data directly.
    setRecipes(data);
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Recipe Sharing Platform
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-xl rounded-xl overflow-hidden transform hover:shadow-2xl hover:scale-[1.02] transition duration-300 ease-in-out"
          >
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-5">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 truncate">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {recipe.summary}
              </p>
              {/* Added the required link to view recipe details */}
              <a
                href={`/recipe/${recipe.id}`} // Placeholder for the detail page route
                className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
              >
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;