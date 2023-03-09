import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import AdminMenu from '../../components/Layout/AdminMenu';
import Layout from '../../components/Layout/Layout';
import ProductItem from './ProductItem';


    const Products = () => {
      const [products, setProducts] = useState([]);

      //getall products
      const getAllProducts = async () => {
        try {
          const  {data}  = await axios.get("/api/v1/products");
          setProducts(data.products);
          
        } catch (error) {
          console.log(error);
          toast.error("Someething Went Wrong");
        }
      };

      //lifecycle method
      useEffect(() => {
        getAllProducts();
      }, []);

      return (
        <Layout title={"Dashboard - Create Products"}>
          <div className="container mx-auto my-3 px-3">
            <div className="flex flex-row">
              <div className="w-1/4">
                <AdminMenu />
              </div>
              <div className="w-3/4 mt-10 flex flex-col items-center ">
                <h1 className="text-3xl font-bold mb-3">Products</h1>
                <section className="text-gray-600 body-font">
                  <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                   { products?.map(product => {
                    return <ProductItem product={product} />;
                     
                   })}
                   
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </Layout>
      );
    }
    
    export default Products