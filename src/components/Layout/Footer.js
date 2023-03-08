import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" sticky bottom-0 bg-gray-800 text-gray-400 py-6   w-full">
      <h1 className="text-center text-white text-2xl">
        All Right Reserved &copy; Meonly
      </h1>
      <p className="text-center mt-3">
        <Link to="/about" className="text-gray-400 hover:text-white mr-4">
          About
        </Link>
        |
        <Link to="/contact" className="text-gray-400 hover:text-white mx-4">
          Contact
        </Link>
        |
        <Link to="/policy" className="text-gray-400 hover:text-white ml-4">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default Footer;
