import React, { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Create a context for managing categories, meals, and meal details state
const CategoriesContext = createContext();

const ContextProvider = ({ children }) => {
  // -------------------- STATE VARIABLES --------------------
  // State to hold the fetched categories
  const [categories, setCategories] = useState([]);

  // State to hold the fetched meals
  const [meals, setMeals] = useState([]);

  // State to hold the details of a single meal
  const [meal, setMeal] = useState(null);

  // State to hold any error messages
  const [error, setError] = useState("");

  // Extract the meal ID from the URL parameters
  const { id } = useParams();

  // -------------------- URL CONSTANTS --------------------
  // Base URL for fetching categories data from the API
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  // URL for fetching meals based on a search query
  const MEAL_URL = import.meta.env.VITE_MEAL_URL;

  // URL for fetching details of a single meal
  const MEAL_DETAILS_URL = import.meta.env.VITE_MEAL_DETAILS_URL;

  // -------------------- FUNCTION DEFINITIONS --------------------

  // Function to fetch categories data from the API
  const fetchCategories = async () => {
    try {
      const response = await axios.get(BASE_URL);

      // Check if the response has the expected data and set it to state
      if (response && response.data && response.data.categories) {
        setCategories(response.data.categories);
      } else {
        console.error("Unable to fetch categories data");
      }
    } catch (error) {
      // Log any errors encountered during fetching
      console.error("Error: Categories data unavailable");
    }
  };

  // Function to fetch meals based on a search query from the API
  const fetchMeals = async (query) => {
    try {
      const response = await axios.get(MEAL_URL, { params: { s: query } });

      // Check if the response has the expected data and set it to state
      if (response && response.data && response.data.meals) {
        setMeals(response.data.meals);
      } else {
        console.error("Error fetching meals");
      }
    } catch (error) {
      // Log any errors encountered during fetching
      console.error("Error: Meals data unavailable");
    }
  };

  // Function to fetch details of a single meal using its ID from the API
  // const fetchMealDetails = async () => {
  //   // Check if ID is present before making the API call
  //   if (!id) {
  //     setError("Meal ID is not available.");
  //     return;
  //   }

  //   try {
  //     const response = await axios.get(MEAL_DETAILS_URL, {
  //       params: {
  //         i: id, // Pass the meal ID as a parameter
  //       },
  //     });

  //     // Check if the response has the expected data and set it to state
  //     if (response && response.data && response.data.meals) {
  //       setMeal(response.data.meals[0]);
  //       setError(""); // Clear error if data is successfully fetched
  //     } else {
  //       setError("No details found for this meal.");
  //       setMeal(null); // Clear any previous meal details
  //     }
  //   } catch (error) {
  //     // Set error message if fetching meal details fails
  //     setError("Failed to fetch meal details.");
  //     setMeal(null); // Clear any previous meal details
  //   }
  // };

  // -------------------- EFFECT HOOKS --------------------

  // useEffect to run fetch functions when the component mounts or id changes
  useEffect(() => {
    fetchCategories(); // Fetch categories when component mounts
    fetchMeals("Beef"); // Fetch meals with "Pork" query when component mounts
    fetchMealDetails(); // Fetch meal details based on URL id parameter when id changes
  }, [id]); // Dependency array includes id to run when it changes

  // -------------------- RENDER --------------------

  return (
    <CategoriesContext.Provider
      value={{
        categories, // Provide categories state
        meals, // Provide meals state
        meal, // Provide meal details state
        error, // Provide error state
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export { ContextProvider, CategoriesContext };
