import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      <p className="mt-4">This is the main landing page of the application.</p>
      <div className="flex space-x-6 mt-6">
        <Link to="/blog">
          <button className="bg-blue-500 px-4 py-2 rounded-md font-semibold text-white">
            BLOG
          </button>
        </Link>
        <Link to="/dashboard">
          <button className="bg-red-500 px-4 py-2 rounded-md font-semibold text-white">
            DashBoard
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
