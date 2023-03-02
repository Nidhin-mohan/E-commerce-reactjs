import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div>
      <div className="text-center">
        <div className="list-group">
          <h4 className="font-bold mb-4">Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="block px-4 py-2 text-gray-800 font-semibold hover:bg-gray-200"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="block px-4 py-2 text-gray-800 font-semibold hover:bg-gray-200"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
