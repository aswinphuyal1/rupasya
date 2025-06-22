import React, { useContext, useState, useEffect } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "../components/Title";

const Cart = () => {
  const { products, currency, delivery_fee, cartiteams } =
    useContext(Shopcontext);

  const [cartdata, setcartdata] = useState([]);

  useEffect(() => {
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
  }, [cartiteams]);

  return (
    <div>
      <div className="border-t pt-14">
        <div className="text-2xl mb-3">
          <Title text1={"YOUR"} text2={"CART"} />
        </div>
        <div>
          {cartdata.map((item, index) => {
            const productdata = products.find(
              (product) => product.id == item.id
            );
            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
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
                      <p>{currency}{productdata.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
