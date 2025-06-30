import React, { useContext, useState, useEffect } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "../components/Title";
import bin from "../assets/bin.png";
import Carttotal from "../components/Carttotal";

const Cart = () => {
  const {
    products,
    currency,
    delivery_fee,
    cartiteams,
    updatequantity,
    navigate,
  } = useContext(Shopcontext);

  const [cartdata, setcartdata] = useState([]);

  useEffect(() => {
  if(products.length>0)
  {
    const tempdata = [];
    for (const iteams in cartiteams) {
      for (const item in cartiteams[iteams]) {
        if (cartiteams[iteams][item] > 0) {
          tempdata.push({
            id: iteams,
            size: item,
            quantity: cartiteams[iteams][item],
          });
        }
      }
    }
    setcartdata(tempdata);
  }
  }, [cartiteams,products]);

  return (
    <div>
      <div className="border-t pt-14">
        <div className="text-2xl mb-3">
          <Title text1={"YOUR"} text2={"CART"} />
        </div>
        <div>
          {cartdata.map((item, index) => {
            const productdata = products.find(
              (product) => String(product._id) === String(item.id)
            );
            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray- grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20"
                    src={productdata?.image?.[0]}
                    alt="/"
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium ">
                      {productdata?.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {productdata.price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1  bg-slate-50"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
                <img
                  onClick={() => updatequantity(item.id, item.size, 0)}
                  className="w-9 sm:w-5 cursor-pointer"
                  src={bin}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end my-20 ">
        <div className="w-full sm:w-[450px]">
          <Carttotal />
          <div className="w-full text-end"></div>
          <button
            onClick={() => navigate("/placeorder")}
            className="bg-black text-white text-md my-8 px-8 py-3 justify-start"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;