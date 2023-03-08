import React from "react";
import { toast } from "react-hot-toast";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";


const Header = () => {
  const [auth, setAuth] = useAuth()
  const handleLogout = () => {
    setAuth({
      ...auth,
      user:null,
      token: "",
    
    });
    localStorage.removeItem("auth");
    toast.success("Logged out succesfuly");
  };

  return (
    
      <nav className="bg-body-tertiary py-3 shadow-lg  ">
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl hover: font-semibold text-black">
              FlipZone
            </Link>
            <button
              className="md:hidden rounded-lg text-black hover:text-gray-900 focus:outline-none focus:shadow-outline-purple"
              aria-label="Toggle Menu"
            ></button>
          </div>
          <div className="text-xl hidden md:flex flex-col md:flex-row md:-mx-4">
            <NavLink
              to="/"
              exact
              className="my-1 text-black hover:text-gray-900 px-3 py-2 md:mx-2 md:my-0 md:py-1 md:text-xl md:font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/category"
              className="my-1 text-black hover:text-gray-900 px-3 py-2 md:mx-2 md:my-0 md:py-1 md:text-xl md:font-medium"
            >
              Category
            </NavLink>
            {!auth.user ? (
              <>
                <NavLink
                  to="/register"
                  className="my-1 text-black hover:text-gray-900 px-3 py-2 md:mx-2 md:my-0 md:py-1 md:text-xl md:font-medium"
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className="my-1 text-black hover:text-gray-900 px-3 py-2 md:mx-2 md:my-0 md:py-1 md:text-xl md:font-medium"
                >
                  Login
                </NavLink>
              </>
            ) : (
              <>
                <li className="list-none">
                  <button
                    className="flex items-center justify-center h-full w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-label="User menu"
                  >
                    <span className="sr-only">Open user menu</span>
                    <span>{auth?.user?.name}</span>
                  </button>
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <NavLink
                      to={`/dashboard/${
                        auth?.user?.role === "ADMIN" ? "admin" : "user"
                      }`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      activeClassName="bg-gray-100 text-gray-900"
                    >
                      Dashboard
                    </NavLink>
                    <NavLink
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={handleLogout}
                      activeClassName="bg-gray-100 text-gray-900"
                    >
                      Logout
                    </NavLink>
                  </div>
                </li>
              </>
            )}

            <NavLink
              to="/cart"
              className="my-1 text-black hover:text-gray-900px-3 py-2 md:mx-2 md:my-0 md:py-1 md:text-sm md:font-medium"
            >
              <span className="flex items-center md:text-xl">Cart (0)</span>
            </NavLink>
          </div>
        </div>
      </nav>
    
  );
};

export default Header;
