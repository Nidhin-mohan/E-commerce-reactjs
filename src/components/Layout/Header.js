import React from "react";
import { NavLink, Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <nav className="bg-body-tertiary py-3 shadow-lg">
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-semibold text-black">
              🛒 Ecommerce App
            </Link>
            <button
              className="md:hidden rounded-lg text-black hover:text-gray-900 focus:outline-none focus:shadow-outline-purple"
              aria-label="Toggle Menu"
            >
              <GiShoppingBag className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden md:flex flex-col md:flex-row md:-mx-4">
            <NavLink
              to="/"
              exact
              className="my-1 text-black hover:text-gray-900 px-3 py-2 md:mx-2 md:my-0 md:py-1 md:text-sm md:font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/category"
              className="my-1 text-black hover:text-gray-900 px-3 py-2 md:mx-2 md:my-0 md:py-1 md:text-sm md:font-medium"
            >
              Category
            </NavLink>
            <NavLink
              to="/register"
              className="my-1 text-black hover:text-gray-900 px-3 py-2 md:mx-2 md:my-0 md:py-1 md:text-sm md:font-medium"
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="my-1 text-black hover:text-gray-900 px-3 py-2 md:mx-2 md:my-0 md:py-1 md:text-sm md:font-medium"
            >
              Login
            </NavLink>
            <NavLink
              to="/cart"
              className="my-1 text-black hover:text-gray-900px-3 py-2 md:mx-2 md:my-0 md:py-1 md:text-sm md:font-medium"
            >
              <span className="flex items-center">
                <GiShoppingBag className="w-4 h-4 mr-1" />
                Cart (0)
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
