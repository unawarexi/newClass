// UserProfile.js
import React from "react";
import UserNameProps from "./UserNameProps";

const UserProfile = (props) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg shadow-red-500 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h1>
      <UserNameProps
        firstName={"Andrew"}
        lastName={"Dapper"}
        age={30}
        occupation={"Software Engineer"}
      />
    </div>
  );
};

export default UserProfile;
