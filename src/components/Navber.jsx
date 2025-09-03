import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "Projects", "Contact"];

  return (
    <nav className="w-full bg-gray-900 text-gray-200 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-400 cursor-pointer">
          Arafat Rahman
        </div>
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link}>
              <NavLink
                to={`/${link.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative font-medium transition-colors duration-300 ${
                    isActive ? "text-indigo-400" : "hover:text-indigo-300"
                  }`
                }
              >
                {link}
                <NavLink
                  to={`/${link.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive ? "absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-400 rounded" : ""
                  }
                />
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-2xl focus:outline-none text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-4 bg-gray-900 shadow-md">
          {links.map((link) => (
            <li key={link}>
              <NavLink
                to={`/${link.toLowerCase()}`}
                className={({ isActive }) =>
                  `block py-2 font-medium transition-colors duration-300 ${
                    isActive ? "text-indigo-400" : "hover:text-indigo-300"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
