import React, { useContext } from "react";
import Title from "../components/Title";
import {Shopcontext} from "../context/Shopcontext";

const Order = () => {
  const { products, currency } = useContext(Shopcontext);;

  const displayProducts = products?.slice(1, 4) || [];

  return (
    <div className="border-t pt-16 px-4 sm:px-10">
      <div className="text-2xl mb-8">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {displayProducts.length > 0 ? (
        displayProducts.map((item, index) => (
          <div
            key={item.id || index}
            className="py-6 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-gray-700"
          >
            {/* Product Info */}
            <div className="flex items-start gap-4 sm:gap-6 text-sm">
              <img
                className="w-20 sm:w-24 rounded"
                src={item.image}
                alt={item.name}
              />
              <div>
                <p className="text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-4 mt-2 text-gray-700 text-sm sm:text-base">
                  <p className="text-lg font-semibold">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2 text-sm">
                  Date: <span className="text-gray-500">25, Jul, 2024</span>
                </p>
              </div>
            </div>

            {/* Status and Button */}
            <div className="flex items-center gap-6 justify-between md:justify-end w-full md:w-auto">
              <p className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-green-500 text-lg">●</span>
                Ready to ship
              </p>
              <button className="border border-gray-400 px-4 py-1 rounded text-sm hover:bg-gray-100 transition">
                Track Order
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-gray-500 text-sm">No orders found.</div>
      )}
    </div>
  );
};

export default Order;
