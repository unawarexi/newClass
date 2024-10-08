import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Meals from "./Meals";
import { FadeInUp } from "../animations/Animation";
import { AnimatePresence, motion } from "framer-motion";

import { CategoriesContext } from "../context/ContextProvider";

const Categories = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div className="container mx-auto p-6 gap-6 bg-gray-100 rounded-lg shadow-md">
      <div className="">
        <Meals />
      </div>

      <div className="grid p-6 gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 col-span-full mb-6">
          Categories
        </h1>
        {/* Loop through categories array and render each category */}
        {categories.map((category) => (
          <AnimatePresence>
            <motion.ul
              {...FadeInUp}
              key={category.idCategory}
              className="list-none bg-white rounded-lg shadow-lg shadow-red-500 p-4 flex flex-col items-center text-center"
            >
              {/* Category thumbnail */}
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="w-full h-auto object-cover rounded-md mb-4"
              />
              {/* Category name */}
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                {category.strCategory}
              </h4>
              {/* Uncomment the paragraph below to display category descriptions */}
              {/* <p className="text-sm text-gray-600">{category.strCategoryDescription}</p> */}
            </motion.ul>
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

// Inline styles for modern and sleek design
// -------------------------Style for the container with grid layout
// const containerStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(4, 1fr)", // Defines a grid with 4 columns of equal width
//   gap: "20px", // Space between grid items
//   padding: "20px",
//   backgroundColor: "#f4f4f4",
//   borderRadius: "8px",
//   boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//   maxWidth: "1200px", // Increased width to accommodate the grid
//   margin: "20px auto",
// };

//------------------------------- Style for the heading
// const headingStyle = {
//   fontSize: "2em",
//   fontWeight: "bold",
//   color: "#333",
//   marginBottom: "20px",
//   textAlign: "center", // Center align the heading
//   gridColumn: "span 4", // Make the heading span across all 4 columns
// };

//--------------- Style for individual list items in the grid
// const listStyle = {
//   listStyle: "none",
//   backgroundColor: "#fff",
//   borderRadius: "8px",
//   boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   textAlign: "center",
//   padding: "20px",
// };

//------------------ Style for the category images
// const imageStyle = {
//   width: "100%", // Full width of the parent container
//   height: "auto", // Maintain aspect ratio
//   borderRadius: "8px",
//   marginBottom: "10px",
// };

//-------------------- Style for the category name
// const categoryNameStyle = {
//   fontSize: "1.2em",
//   fontWeight: "bold",
//   color: "#555",
//   margin: "10px 0",
// };

//---------------------- Style for the category description
// const descriptionStyle = {
//   fontSize: "0.9em",
//   color: "#777",
//   textAlign: "justify", // Justify text for better readability
// };

export default Categories;
