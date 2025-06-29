import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "./Title";
import Productitem from "./Productitem";

const Latestcolledtion = () => {
  const { products } = useContext(Shopcontext);
  const [latestproduct, setlatestproduct] = useState([]);
  useEffect(() => {
    setlatestproduct(products.slice(0, 10));
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          "Crafted with care, inspired by nature – beauty that lets your skin
          breathe and your soul glow."
        </p>
      </div>
      {/* rendering products*/}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestproduct.map((iteam, index) => (
          <Productitem
            key={index}
            id={iteam.id}
            image={iteam.image}
            name={iteam.name}
            price={iteam.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Latestcolledtion;

//