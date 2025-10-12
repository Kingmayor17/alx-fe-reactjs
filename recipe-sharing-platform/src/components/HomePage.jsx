import { Link } from "react-router-dom"; 
import recipes from "../data.json"; 

function HomePage() {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Recipe List
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {recipe.title}
            </h2>

            {}
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View Recipe →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
