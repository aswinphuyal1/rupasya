import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-5 px-8 bg-white shadow-md font-medium">
      <div className="flex items-center gap-4">
        <img src={logo} className="w-36" alt="Logo" />
      </div>
      <ul className="hidden sm:flex gap-8 text-sm text-gray-700">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "hover:text-blue-600 transition"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "hover:text-blue-600 transition"
            }
          >
            Collection
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "hover:text-blue-600 transition"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "hover:text-blue-600 transition"
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "hover:text-blue-600 transition"
            }
          >
            Cart
          </NavLink>
        </li>
      </ul>
      <div className="sm:hidden">{/* Mobile menu button can go here */}</div>
    </nav>
  );
};

export default Navbar;
