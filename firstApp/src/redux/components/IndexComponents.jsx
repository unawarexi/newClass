import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart } from "../actions/CartActions";
const IndexComponents = () => {
  const dispatch = useDispatch();
  const { items, message } = useSelector((state) => state);

  const handleAddItem = () => {
    const item = "add new item";
    dispatch(addItem(item));
  };

  return (
    <>
      <button
        onClick={handleAddItem}
        className="bg-blue-500 px-4 py-2 text-white font-semibold"
      >
        ADD ITEM
      </button>{" "}
      {/* Display the message */}
      <p
        className={`text-lg font-semibold ${
          message === "Add an item" ? "text-red-500" : "text-green-500"
        }`}
      >
        {message}
      </p>
      <ul className="list-disc mt-4">
        {items.map((item, index) => (
          <li key={index} className="text-lg">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default IndexComponents;
