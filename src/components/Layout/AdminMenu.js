import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center mt-10  shadow ">
        <div className="list-group">
          <h3 className="text-lg  font-bold mb-4">Admin Panel</h3>
          <NavLink
            to="/dashboard/admin/collection"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-bold"
            activeClassName="bg-gray-100 text-gray-900"
          >
            Collections
          </NavLink>
          <NavLink
            to="/dashboard/admin/product"
            className="font-bold block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            activeClassName="bg-gray-100 text-gray-900"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-bold"
            activeClassName="bg-gray-100 text-gray-900"
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
