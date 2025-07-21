import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="py-16 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold text-green-500 mb-4">🎉 Order Placed Successfully!</h1>
      <p className="text-lg text-gray-600 mb-8">Thank you for shopping with us. Your order has been received.</p>
      <Link
        to="/"
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccess;
