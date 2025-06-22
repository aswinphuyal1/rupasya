import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shopcontext } from "../context/Shopcontext";
import review from "../assets/reviewlogo.png";
import halfreview from "../assets/halfrevuewsatar.png";
import Relatedproducts from "../components/Relatedproducts";
const Poduct = () => {
  const { productID } = useParams();
  const { products, currency, delivery_fee, addtocart } =
    useContext(Shopcontext);
  const [productdata, setproductdata] = useState(false);
  const [image, setimage] = useState("");
  const [size, setsize] = useState("");

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
            <img src={halfreview} alt="" className="w-3 5" />
            <p className="pl-2">122</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productdata.price}
          </p>
          <p className="mt-5 text-gray-950 md:w-4/5">
            {productdata.decription}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select size</p>
            <div className="flex gap-2">
              {productdata.size.map((item, index) => (
                <button
                  onClick={() => setsize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item == size ? "border-black" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div
            onClick={() => addtocart(productdata.id,size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-400 w-fit"
          >
            {"ADD TO CART"}
          </div>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 felx felx-col gap-1">
            <p>✔️ Guaranteed 100% Original Makeup Product.</p>
            <p>🚚 Cash on Delivery available for your convenience.</p>
            <p>🔄 Hassle-free Return & Exchange within 7 days of delivery.</p>
          </div>
        </div>
      </div>
      {/* product description&&review section*/}
      <div className="mt-10">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>🌿 Deep Moisturizing Cream</p>
          <p>
            Nourish your skin with our rich, hydrating formula that locks in
            moisture and leaves your skin soft, smooth, and glowing all day.
            Perfect for dry and sensitive skin. ✔️ Lightweight & Non-Greasy ✔️
            Suitable for All Skin Types ✔️ Dermatologically Tested
          </p>
        </div>
      </div>
      {/* display realated products */}
      <Relatedproducts
        category={productdata.category}
        subcategory={productdata.subcategory}
        currentid={productdata.id}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Poduct;
