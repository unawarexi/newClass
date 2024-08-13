import React from "react";
import { Link } from "react-router-dom";
// Import icons from React Icons
import {
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaQuestionCircle,
} from "react-icons/fa";

const NavItems = () => {
  // Array of navigation links with associated icons
  const NavLinks = [
    { name: "Home", Path: "/", icon: <FaHome /> },
    { name: "About", Path: "/about", icon: <FaInfoCircle /> },
    { name: "Contact", Path: "/contact", icon: <FaPhone /> },
    { name: "FAQ", Path: "/faq", icon: <FaQuestionCircle /> },
  ];

  return (
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
        {NavLinks.map((links, index) => (
          <li
            key={index}
            className="mr-10 hover:text-gray-900 flex items-center space-x-10"
          >
            <Link to={links.Path} className="flex items-center">
              {links.icon} {/* Display the icon */}
              <span className="ml-2">{links.name}</span>{" "}
              {/* Display the link name */}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavItems;
