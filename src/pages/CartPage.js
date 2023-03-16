import React from "react";
import Layout from "../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  // total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
        
      });
      return total;
    } catch (error) {
      console.log(error);
    }
  };

  // delete item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto">
  <div className="flex justify-center">
    <h1 className="bg-light p-2 mb-1 text-center">
      {`Hello ${auth?.token && auth?.user?.name}`}
    </h1>
  </div>
  <h4 className="text-center">
    {cart?.length
      ? `You have ${cart.length} items in your cart ${
          auth?.token ? "" : "please login to checkout"
        }`
      : "Your cart is empty"}
  </h4>
  <div className="flex justify-between">
    <div className="w-3/4">
      {cart?.map((p) => (
        <div className="flex flex-row mb-2 p-3 rounded-lg shadow-lg">
          <div className="w-1/3">
            <img
              src={p.photos?.[0]?.secure_url}
              className="w-32 h-32 object-contain"
              alt={p.name}
            />
          </div>
          <div className="w-2/3">
            <p>{p.name}</p>
            <p>{p.description.substring(0, 30)}</p>
            <p>Price : {p.price}</p>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
              onClick={() => removeCartItem(p._id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
    <div className="w-1/4 text-center">
      <h2>Cart Summary</h2>
      <p>Total | Checkout | Payment</p>
      <hr />
      <h4>Total : Rs {totalPrice()} </h4>
      {auth?.user?.address ? (
        <>
          <div className="mb-3">
            <h4>Current Address</h4>
            <h5>{auth?.user?.address}</h5>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded"
              onClick={() => navigate("/dashboard/user/profile")}
            >
              Update Address
            </button>
          </div>
        </>
      ) : (
        <div className="mb-3">
          {auth?.token ? (
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded"
              onClick={() => navigate("/dashboard/user/profile")}
            >
              Update Address
            </button>
          ) : (
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded"
              onClick={() =>
                navigate("/login", {
                  state: "/cart",
                })
              }
            >
              Please login to checkout
            </button>
          )}
        </div>
      )}
    </div>
  </div>
</div>

    </Layout>
  );
};

export default CartPage;
