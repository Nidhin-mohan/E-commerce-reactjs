import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";

const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const REACT_APP_URL = process.env.REACT_APP_URL;


  //get user data
  useEffect(() => {
    const { email, name} = auth?.user;
    setName(name);
   
    setEmail(email);
   
  }, [auth?.user]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const { data } = await axios.put(
        `${REACT_APP_URL}/api/v1/auth/profile/update`,
        {
          name,
          email,
        }
      );
      console.log(data)
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.user });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Your Profile"}>
      <div className="container mx-auto px-3 py-3">
        <div className="flex flex-wrap -mx-3  ">
          <div className="w-full md:w-1/4 px-3">
            <UserMenu />
          </div>
          <div class=" md:ml-[300px] flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div class="max-w-md mx-auto">
                  <div>
                    <h1 class="text-2xl font-semibold">User Details </h1>
                  </div>
                  <div class="divide-y divide-gray-200">
                    <form
                      onSubmit={handleSubmit}
                      class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                    >
                      <div class="relative">
                        <input
                          autocomplete="off"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          name="name"
                          type="text"
                          class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Name"
                        />
                        <label
                          for="name"
                          class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Name
                        </label>
                      </div>
                      <div class="relative">
                        <input
                          autocomplete="off"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          name="email"
                          type="text"
                          class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Email address"
                        />
                        <label
                          for="email"
                          class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Email Address
                        </label>
                      </div>
                      
                      <div class="relative flex  flex-col gap-3">
                        <button class="bg-blue-500 text-white rounded-md px-2 py-1">
                          update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
