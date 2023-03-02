import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-flui m-3 p-3">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <UserMenu />
          </div>
          <div className="col-span-9">
            <div className="card w-3/4 p-3">
              <h3 className="text-2xl font-bold">{auth?.user?.name}</h3>
              <h3 className="text-lg font-bold">{auth?.user?.email}</h3>
              <h3 className="text-lg font-bold">{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
