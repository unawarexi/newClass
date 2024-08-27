import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Ensure you're using React Router for navigation

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const MEAL_URL = "https://www.themealdb.com/api/json/v1/1/search.php?";

  const fetchMeals = async (query) => {
    try {
      const response = await axios.get(MEAL_URL, {
        params: {
          s: query,
        },
      });

      if (response && response.data && response.data.meals) {
        setMeals(response.data.meals);
      } else {
        console.error("Error fetching meals");
      }
    } catch (error) {
      console.error("Error: meals data unavailable");
    }
  };

  useEffect(() => {
    fetchMeals("lamb");
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Meal Recipes</h1>
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
              <Link to={`/mealdetails/${meal.idMeal}`} className="w-full">
                <button
                  type="button"
                  className="w-full px-4 py-2 mt-4 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
                >
                  More...
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
