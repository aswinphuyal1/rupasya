import React, { useContext, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import drop from "../assets/drop.png";
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
  const { product } = useContext(Shopcontext);
  const [showfilter, setshowfilter] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t ">
      {/* filter*/}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          Filters
          <img
            onClick={() => setshowfilter(!showfilter)}
            className={`h-3 sm:hidden ${showfilter ? "rotate-90" : ""}`}
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
            <p className="flex flex gap-2">
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
    </div>
  );
};

export default Collection;
