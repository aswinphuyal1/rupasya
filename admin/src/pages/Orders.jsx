import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendurl, currency } from "../App";
import { toast } from "react-toastify";
import del from "../assets/delivery.png";
const Orders = ({ token }) => {
  const [orders, setorders] = useState([]);

  const fetchallorders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendurl + "/api/order/list",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setorders(response.data.orders);
        console.log(response.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

const statushandler =async (event,orderid)=>
{
  try {
    
    const response = await axios.post(
      backendurl + "/api/order/status",
      { orderid, status: event.target.value },
      { headers: { token } }
    );
    if (response.data.success) {
      await fetchallorders()
      
    }
  } catch (error) {
    console.log(error)
    toast.error(response.data.message)
    
  }
}
  
  useEffect(() => {
    fetchallorders();
  }, [token]);

  return (
    <div>
      <h3>Order page</h3>
      <div>
        {(Array.isArray(orders) ? orders : []).map((order, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-[o.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-300 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700"
            key={index}
          >
            <img className="w-24" src={del} alt="" />
            <div>
              <div>
                {order.items.map((item, idx) => (
                  <p className="py-o.5" key={idx}>
                    {item.name} X {item.quantity}
                    <span>{item.size}</span>
                  </p>
                ))}
              </div>
              <p className="mt-3 mb-2 font-medium">
                {order.address.firstname + " " + order.address.lastname}
              </p>
              <div>
                <p>{order.address.street + ", "}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.province +
                    ", " +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <div>
              <p className="text-sm sm:text-[15px]">
                Items :{order.items.length}
              </p>
              <p className="mt-3">Method :{order.paymentmethod}</p>
              <p>Payment :{order.payment ? "Done" : "Pending"}</p>
              <p>Date :{new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className="text-sm sm:text-[15px]">
              {currency}
              {order.amount}
            </p>
            <select onChange={(event)=>statushandler(event,order._id)} value={order.status} className="p-2 font-semibold">
              <option value="Order placed">Order placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
