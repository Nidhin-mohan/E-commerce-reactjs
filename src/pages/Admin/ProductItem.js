
import { Link } from 'react-router-dom';
import defaultImage from "../../assets/default.jpg";

// import StarIcon from "@heroicons/react/solid/StarIcon";



const ProductItem = ({product}) => {

  

  return (
    <Link
      to={`/dashboard/admin/product/${product._id}`}
      className="lg:w-1/4 md:w-1/2 p-4 w-full"
    >
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={product.photos[0].secure_url}
          onError={(e) => {
            e.target.src = defaultImage;
            e.target.className = "w-[400px] h-[300px] object-contain";
          }}
        />
      </div>

      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"></h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {product.name}
        </h2>
        <p className="mt-1">Rs {product.price} </p>
      </div>
    </Link>
  );
}

export default ProductItem