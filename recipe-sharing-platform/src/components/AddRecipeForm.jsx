import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.ingredients || !formData.steps) {
      setError("All fields are required!");
      return;
    }
    setError("");
    console.log("Recipe submitted:", formData);
    setFormData({ title: "", ingredients: "", steps: "" });
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h1>
      {error && <p className="text-red-500 mb-3">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          type="text"
          placeholder="Recipe Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="ingredients"
          placeholder="Ingredients (one per line)"
          value={formData.ingredients}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <textarea
          name="steps"
          placeholder="Preparation Steps"
          value={formData.steps}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
