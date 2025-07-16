import React, { useContext, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "./Title";

const Carttotal = () => {
  const {
    products,
    currency,
    delivery_fee,
    search,
    setsearch,
    showsearch,
    setshowserach,
    
    cartiteams,
    addtocart,
    getcartcount,
    updatequantity,
    getcartamount,
  } = useContext(Shopcontext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>
      
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p> subtotal</p>
          <p>
            {currency}
            {getcartamount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Delivery</p>
          <p>
            {currency}
            {delivery_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>TOTAL</b>
          <b>
            {currency}
            {getcartamount() == 0 ? 0 : getcartamount() + delivery_fee}
          </b>
        </div>
      </div>
    </div>
  );
};

export default Carttotal;
//