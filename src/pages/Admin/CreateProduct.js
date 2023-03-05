import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProducts = () => {
  const navigate = useNavigate();
  const [collections, setCollections] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [collection, setCollection] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [photo, setPhoto] = useState("");

  //get all category
  const getAllCollections = async () => {
    try {
      const { data } = await axios.get("/api/v1//collections");
      if (data?.success) {
        setCollections(data?.collections);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCollections();
  }, []);

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {

      console.log("name:", name);
      console.log("description:", description);
      console.log("price:", price);
      console.log("stock:", stock);
      console.log("photo:", photo);
      console.log("collection:", collection);

      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("stock", stock);
      productData.append("photos", photo);
      productData.append("collectionId", collection);
      productData.append("brand", brand);
     
      const { data } = axios.post("/api/v1/admin/product", productData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
        console.log(data)
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Products"}>
      <div className="container mx-auto my-3 px-3">
        <div className="flex flex-row">
          <div className="w-1/4">
            <AdminMenu />
          </div>
          <div className="w-3/4 mt-10 flex flex-col items-center ">
            <h1 className="text-3xl font-bold mb-3">Manage Products</h1>
            <div className="p-3 w-1/2">
              <div className="m-1 w-75">
                <div className="mb-3">
                  {photo && (
                    <div className="text-center flex items-center justify-center ">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt="product_photo"
                        height={"200px"}
                        className="img img-responsive w-64"
                      />
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    placeholder="write a name"
                    className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    type="text"
                    value={description}
                    placeholder="write a description"
                    className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    value={price}
                    placeholder="write a Price"
                    className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    value={stock}
                    placeholder="write a quantity"
                    className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={brand}
                    placeholder="write a brand"
                    className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>
                <Select
                  className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="Select a category"
                  size="large"
                  showSearch
                  onChange={(value) => {
                    setCollection(value);
                  }}
                >
                  {collections?.map((c) => (
                    <Option key={c._id} value={c._id}>
                      {c.name}
                    </Option>
                  ))}
                </Select>
                <div className="mb-6 mt-6 flex  text-center ">
                  <label className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md cursor-pointer">
                    {photo ? photo.name : "Upload Photo"}
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={(e) => setPhoto(e.target.files[0])}
                      hidden
                      multiple
                    />
                  </label>
                </div>
                <div className="mb-3 flex items-center justify-center">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={handleCreate}
                  >
                    CREATE PRODUCT
                  </button>
                </div>
              </div>
            </div>
            <div className="w-3/4"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProducts;
