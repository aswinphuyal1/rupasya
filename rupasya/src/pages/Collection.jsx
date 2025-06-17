import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import drop from "../assets/drop.png";
import Title from "../components/Title";
import Productitem from "../components/Productitem";
const products = [
  {
    id: 1,
    name: "Lipstick",
    price: 15,
    image: "/src/assets/makeup.png",
    Bestsheller: true,
  },
  {
    id: 2,
    name: "Foundation",
    price: 25,
    image: "/src/assets/product.jpg",
    Bestsheller: false,
  },
];

const Collection = () => {
  const { products } = useContext(Shopcontext);
  const [showfilter, setshowfilter] = useState(false);
  const [filterproduct, setfilterproduct] = useState([]);
  const [category,setcategory]=useState([])
  const [subcategory,setsubcategory]= useState([]);

  

  useEffect(() => {
    setfilterproduct(products);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t ">
      {/* filter*/}
      <div className="min-w-60">
        <p
          onClick={() => setshowfilter(!showfilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          Filters
          <img
            onClick={() => setshowfilter(!showfilter)}
            className={`h-3 sm:hidden ${showfilter ? "rotate-360" : ""}`}
            src={drop}
            alt="/"
          />
        </p>
        {/*category filter */}
        {/* <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? ' ':'hidden'}sm:block`}> */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showfilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORY</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex items-center gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Makeup Products"}
              />
              Makeup Products
            </label>

            <label className="flex items-center gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Skincare Products"}
              />
              Skincare Products
            </label>

            <label className="flex items-center gap-2">
              <input className="w-3" type="checkbox" value={"Lip & Eye Care"} />
              Lip & Eye Care
            </label>
          </div>
        </div>
        {/* sub catogery*/}

        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showfilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">SUB CATEGORY</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"MEN"} />
              MEN
            </p>

            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"WOMEN"} />
              WOMEN
            </p>

            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"PREMIUM"} />
              PREMIUM
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"BASIC"} />
              BASIC
            </p>
          </div>
        </div>
      </div>

      {/*Right side*/}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          {/* Product sort*/}
          <select className="border-2 border-gray-300 text-sm px-2">
            <option value="relavent">Relavent</option>
            <option value="low-high">Low to high</option>
            <option value="high to low">High to low</option>
          </select>
        </div>
        {/*MAPPING OF PRODUCTS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterproduct.map((iteam, index) => (
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
    </div>
  );
};

export default Collection;
