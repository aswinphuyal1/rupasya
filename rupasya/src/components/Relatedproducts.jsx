import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "./Title";
import Productitem from "./Productitem";

const Relatedproducts = ({ category, subcategory, currentid }) => {
  const { products } = useContext(Shopcontext);
  const [related, setrelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productcopy = products.slice();
      productcopy = productcopy.filter(
        (item) =>
          category == item.category &&
          subcategory == item.subcategory &&
          item.id != currentid //this line do not let same peoduct to be displayed again in related product
      );

      setrelated(productcopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"Related"} text2={"Products"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          <Productitem
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            c
          />
        ))}
      </div>
    </div>
  );
};

export default Relatedproducts;
//