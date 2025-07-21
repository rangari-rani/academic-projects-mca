import React, { useContext, useState } from "react";
import Title from "./../components/Title";
import CartTotal from "./../components/CartTotal";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate } = useContext(ShopContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/order-success');
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[70vh] border-t">
      {/* Left side: Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full sm:max-w-[520px] sm:flex-grow">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="First name"
          />
          <input
            type="text"
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Last name"
          />
        </div>
        <input
          type="email"
          required
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Email Address"
        />
        <input
          type="text"
          required
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            type="text"
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="City"
          />
          <input
            type="text"
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Zip Code"
          />
          <input
            type="text"
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Country"
          />
        </div>
        <input
          type="number"
          required
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Phone"
        />

        {/* Submit Button inside form */}
        <div className="w-full text-end mt-2">
      
          <button type="submit" className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
        </div>
      </form>

      {/* Right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-8">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex flex-col lg:flex-row">
            <div
              onClick={() => setMethod('cod')}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className="text-gray-700 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
