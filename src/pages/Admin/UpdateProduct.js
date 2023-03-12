import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import Select from "antd/lib/select";
import { useNavigate, useParams } from "react-router-dom";
const { Option } = Select;

const UpdateProduct = () => {
  const REACT_APP_URL = process.env.REACT_APP_URL;
  const navigate = useNavigate();
  const params = useParams();
  const [collections, setCollections] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [collection, setCollection] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [photo, setPhoto] = useState([]);
  const [oldphoto, setOldPhoto] = useState([]);
  const [id, setId] = useState("");

  //get single product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `${REACT_APP_URL}/api/v1/product/${params.slug}`
      );

      setName(data.product.name);
      setId(data.product._id);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setBrand(data.product.brand);
      setStock(data.product.stock);
      setPhoto(data.product.photos);
      setOldPhoto(data.product.photos);
      setCollection(data.product.collectionId);
    } catch (error) {
      console.log(error);
    }
  };
  //get all category
  const getAllCollections = async () => {
    try {
      const { data } = await axios.get("${REACT_APP_URL}/api/v1//collections");
      if (data?.success) {
        setCollections(data?.collections);
       
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getSingleProduct();
    getAllCollections();
    //eslint-disable-next-line
  }, []);

  //create product function
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("stock", stock);
      photo !== oldphoto && productData.append("photos", photo);
      productData.append("collectionId", collection);
      productData.append("brand", brand);

      const { data } = await axios.put(
        `${REACT_APP_URL}/api/v1/admin/product/${id}`,
        productData
      );
     if (data?.success) {
       toast.success(data?.message);
     } else {
       toast.error(data?.message);
       navigate("/dashboard/admin/products");
     }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  //delete a product
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are You Sure want to delete this product ? ");
      if (!answer) return;
      const { data } = await axios.delete(
        `${REACT_APP_URL}/api/v1/admin/product/${id}`
      );

      toast.success(data.message);
      navigate("/dashboard/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
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
            <h1 className="text-3xl font-bold mb-3">Update Product</h1>
            <div className="p-3 w-1/2">
              <div className="m-1 w-75">
                <div className="mb-3">
                  {photo.length > 0 && (
                    <div className="text-center flex items-center justify-center ">
                      <img
                        src={photo[0].secure_url}
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
                <div className="mb-3 flex flex-col gap-3 items-center justify-center">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={handleUpdate}
                  >
                    Update Product
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={handleDelete}
                  >
                    Delete Product
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

export default UpdateProduct;
