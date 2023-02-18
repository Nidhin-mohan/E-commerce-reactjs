import React from 'react'
import MetaData from '../layout/MetaData';
import Product from './Product'

const product = {
  name: "Blue Tshirt",
  Images: [
    {
      url: "https://www.mydesignation.com/wp-content/uploads/2020/01/purple-plain-tshirt-mydesignation-unisex-image.jpg",
    },
  ],
  price: "300",
  _id: "nidhin"
};

function Home() {
  return (
    <div>
        <MetaData title="Home"/>
      <h1>welcome to store</h1>
      <h2>Featured Products</h2>
      <Product product={product} />
      <Product product={product} />
      <Product product={product} />
      <Product product={product} />
      <Product product={product} />
      <Product product={product} />
    </div>
  );
}

export default Home