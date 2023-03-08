import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="container mx-auto   my-3 px-3 mb-72 mt-10 ">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/4 px-3">
            <AdminMenu />
          </div>
          <div className="w-full md:w-3/4 px-3 flex flex-col text-center ">
            <h1 class="text-4xl font-bold mb-4">Welcome to the Admin Panel</h1>
            <p class="text-gray-600 text-lg mb-8">
              Manage your site's content, users, and settings from one central
              location.
            </p>
            <div class="bg-white rounded-lg shadow p-6">
              

              <div class="h-full text-center border-x-fuchsia-500">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://dummyimage.com/302x302"
                />
                <p class="leading-relaxed">{auth?.user?.name}</p>
               
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                  {auth?.user?.email}
                </h2>
                <p class="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
