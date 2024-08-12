import React from "react";
import UserProfile from "../components/UserProfile"; // Assuming UserProfile is imported correctly
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto w-full">
      <nav className="flex items-center justify-between my-4">
        <header>
          {/* --------- logo ------------- */}
          <p className="text-3xl font-bold">LOGO</p>
        </header>

        {/* ------------- Navigation Links ----------------- */}
        <ul className="flex space-x-4 font-semibold">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <Link to="/about">
            <li className="cursor-pointer hover:text-blue-600">About</li>
          </Link>
          <li className="cursor-pointer hover:text-blue-600">Portfolio</li>
          <li className="cursor-pointer hover:text-blue-600">Contact</li>
        </ul>
      </nav>

      <div>
        <UserProfile />
      </div>
    </div>
  );
};

export default Header;
