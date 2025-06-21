import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shopcontext } from "../context/Shopcontext";
import review from "../assets/reviewlogo.png"
const Poduct = () => {
  const { productID } = useParams();
  const { products } = useContext(Shopcontext);
  const [productdata, setproductdata] = useState(false);
  const [image, setimage] = useState("");

  const fetchproductdata = async () => {
    const found = products.find((item) => item.id == productID);
    if (found) {
      setproductdata(found);
      setimage(found.image[0]);
    }
  };

  useEffect(() => {
    fetchproductdata();
  }, [productID, products]);

  return productdata ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*product data*/}
      <div className="flex gap-12 flex-col sm:gap-12  sm:flex-row">
        {/*product image*/}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {Array.isArray(productdata.image) &&
              productdata.image.map((item, index) => (
                <img
                  src={item}
                  key={index}
                  onClick={() => setimage(item)}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                />
              ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* peroduct info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productdata.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={review} alt="" className="w-3 5" />
            <img src={review} alt="" className="w-3 5" />
            <img src={review} alt="" className="w-3 5" />
            <img src={review} alt="" className="w-3 5" />
            <img src={review} alt="" className="w-3 5" />

          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Poduct;
