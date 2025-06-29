import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendurl, currency } from "../App";
import { toast } from "react-toastify";
const List = () => {
  const [list, setlist] = useState([]); // Fix: initialize as array

  const fetchlist = async () => {
    try {
      const token = localStorage.getItem("token"); // or get it from props/context
      const response = await axios.get(backendurl + "/api/product/list", {
        headers: { token },
      });

      console.log(response.data.products);

      if (response.data.success) {
        setlist(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeproduct = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        backendurl + "/api/product/remove",
        { id },
        {
          headers: { token },
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchlist(); //remove veye paxi feri lis ta granu paryo ni
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(message.error);
    }
  };
  useEffect(() => {
    fetchlist();
  }, []);

  return (
    <>
      <p className="mb-2">All Product list</p>
      <div className="flex flex-col gap-2">
        {/* list table title */}

        <div className="grid md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 bg-gray-100 text-sm">
          <b>image</b>
          <b>Name</b>
          <b>category</b>
          <b>price</b>
          <b className="text-center">Action</b>
        </div>
        {/* product list  */}
        {list.map((item, index) => (
          <div
            className="grid md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 bg-gray-100 text-sm"
            key={index}
          >
            <img
              src={item.image[0]}
              className="w-12 h-12 object-cover"
              alt=""
            />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {currency}
              {item.price}
            </p>
            <p
              onClick={() => removeproduct(item._id)}
              className="text-center cursor-pointer"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
