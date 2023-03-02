import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";

const Users = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container mx-auto px-3 py-3">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4">
            <AdminMenu />
          </div>
          <div className="w-full md:w-3/4">
            <h1 className="text-3xl font-bold">All Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
