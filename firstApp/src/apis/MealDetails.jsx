import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // To get the meal ID from the URL

const MealDetail = () => {
  const { id } = useParams(); // Get meal ID from URL
  const [meal, setMeal] = useState(null);
  const [error, setError] = useState("");

  const MEAL_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?";

  const fetchMealDetails = async () => {
    try {
      const response = await axios.get(MEAL_URL, {
        params: {
          i: id, // Pass the meal ID as a parameter
        },
      });

      if (response && response.data && response.data.meals) {
        setMeal(response.data.meals[0]);
      } else {
        setError("No details found for this meal.");
      }
    } catch (error) {
      setError("Failed to fetch meal details.");
    }
  };

  useEffect(() => {
    fetchMealDetails();
  }, [id]);

  if (error) {
    return <div className="text-red-500 text-center mt-8">{error}</div>;
  }

  if (!meal) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{meal.strMeal}</h1>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />
      <div className="mt-4">
        <h4 className="text-xl font-semibold">Category: {meal.strCategory}</h4>
        <h4 className="text-xl font-semibold">Area: {meal.strArea}</h4>
        <p className="mt-4">{meal.strInstructions}</p>
        <ul className="mt-4">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
            const ingredient = meal[`strIngredient${num}`];
            const measure = meal[`strMeasure${num}`];
            if (ingredient) {
              return (
                <li key={num}>
                  {measure} {ingredient}
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default MealDetail;
