import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Ensure you're using React Router for navigation
import { CategoriesContext } from "../context/ContextProvider";
import { ConfirmSpinner } from "../animations/spinners/MealSpinner";

const Meals = () => {
  const { meals } = useContext(CategoriesContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoading = (mealId) => {
    setLoading(true); // Show the spinner

    // Simulate a delay to showcase the loading spinner
    setTimeout(() => {
      navigate(`/mealdetails/${mealId}`);
      setLoading(false); // Hide the spinner after navigating
    }, 1000); // Adjust the delay as needed (in milliseconds)
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Meal Recipes</h1>

      {/* Display spinner if loading */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <ConfirmSpinner />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white rounded-lg shadow-xl shadow-rose-500 overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h1 className="text-md font-semibold">{meal.strMeal}</h1>
              <h4 className="text-gray-600">
                Class: {meal.strCategory} Category
              </h4>
              <p className="text-gray-500">Tags: {meal.strTags}</p>
              <p className="text-gray-500">Culture: {meal.strArea}</p>
              <button
                type="button"
                className="w-full px-4 py-2 mt-4 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
                onClick={() => handleLoading(meal.idMeal)} // Call the function on click
              >
                More...
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
