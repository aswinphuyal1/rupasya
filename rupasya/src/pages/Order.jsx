 
import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { Shopcontext } from "../context/Shopcontext";
import axios from "axios";

const Order = () => {
  const { products, currency, backendurl, token } = useContext(Shopcontext);

  const [orderdata, setorderdata] = useState([]);

  const loadorderdata = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendurl + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allorderitem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentmethod"] = order.paymentmethod;
            item["date"] = order.date;
            allorderitem.push(item);
          });
        });

        setorderdata(allorderitem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadorderdata();
  }, [token]);

  return (
    <div className="border-t border-b pt-16 px-4 sm:px-10">
      <div className="text-2xl mb-8">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {orderdata.length > 0 ? (
        orderdata.map((cartItem, index) => {
          const product = products.find(
            (p) => String(p._id || p.id) === String(cartItem.id)
          );
          if (!product) return null;

          return (
            <div
              key={product.id + cartItem.size + index}
              className="py-6 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-gray-700"
            >
              {/* Product Info */}
              <div className="flex items-start gap-4 sm:gap-6 text-sm">
                <img
                  className="w-20 sm:w-24 rounded"
                  src={product.image[0]}
                  alt={product.name}
                />
                <div>
                  <p className="text-base font-medium">{product.name}</p>
                  <div className="flex items-center gap-4 mt-2 text-gray-700 text-sm sm:text-base">
                    <p className="text-lg font-semibold">
                      {currency}
                      {product.price}
                    </p>
                    <p>Quantity: {cartItem.quantity}</p>
                    <p>Size: {cartItem.size}</p>
                  </div>
                  <p className="mt-2 text-sm">
                    Date: <span className="text-gray-500">{cartItem.date}</span>
                  </p>
                </div>
              </div>

              {/* Status and Button */}
              <div className="flex items-center gap-6 justify-between md:justify-end w-full md:w-auto">
                <p className="flex items-center gap-2 text-sm text-gray-700">
                  <span
                    className={`text-lg ${
                      cartItem.status === "Delivered"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                  >
                    ●
                  </span>
                  {cartItem.status}
                </p>
                <button className="border border-gray-400 px-4 py-1 rounded text-sm hover:bg-gray-100 transition">
                  Track Order
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-gray-500 text-sm">No orders found.</div>
      )}
    </div>
  );
};

export default Order;
