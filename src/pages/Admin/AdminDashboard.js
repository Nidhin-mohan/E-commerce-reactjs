import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="container mx-auto   my-3 px-3">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/4 px-3">
            <AdminMenu />
          </div>
          <div className="w-full md:w-3/4 px-3 flex flex-col text-center ">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-2xl font-medium mb-4">
                Admin Name : {auth?.user?.name}
              </h3>
              <h3 className="text-2xl font-medium mb-4">
                Admin Email : {auth?.user?.email}
              </h3>
              <h3 className="text-2xl font-medium mb-4">
                Admin Contact : {auth?.user?.phone}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
