// UserNameProps.js
import React from "react";

const UserNameProps = ({ firstName, lastName, age, occupation }) => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold text-gray-700">
        {firstName} {lastName}
      </h2>
      <p className="text-gray-600">Age: {age}</p>
      <p className="text-gray-600">Occupation: {occupation}</p>
    </div>
  );
};

export default UserNameProps;
