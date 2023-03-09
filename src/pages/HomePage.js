import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";

import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [collections, setcollections] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCollections = async () => {
    try {
      const { data } = await axios.get("/api/v1/collections");
      if (data?.success) {
        setcollections(data?.collections);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCollections();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/products`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"ALl Products - Best offers "}>
      <div className="container mx-auto flex flex-row mt-3">
        <div className="w-1/4 px-4">
          <h4 className="text-center font-bold">Filter By collection</h4>
          <div className="flex flex-col mt-4">
            {collections?.map((c) => (
              <label key={c._id} className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                />
                <span className="ml-2 text-gray-700">{c.name}</span>
              </label>
            ))}
          </div>
          {/* price filter */}
          <h4 className="text-center mt-4 font-bold">Filter By Price</h4>
          <div className="flex flex-col mt-4">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id} className="inline-block mr-4">
                  <Radio value={p.array} className="mr-2">
                    {p.name}
                  </Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="flex flex-col mt-8">
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-span-9">
          <h1 className="text-center text-3xl font-bold mb-8">All Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products?.map((p) => (
              <div className="bg-white rounded-lg shadow-md">
                <img
                  src={p.photos[0].secure_url}
                  className="w-full h-60 object-cover rounded-t-lg"
                  alt={p.name}
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{p.name}</h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="text-lg font-bold text-blue-600 mb-2">
                    Rs {p.price}
                  </p>
                  <div className="flex flex-row">
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-full mr-2">
                      More Details
                    </button>
                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="my-8">
            {products && products.length < total && (
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Load More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;