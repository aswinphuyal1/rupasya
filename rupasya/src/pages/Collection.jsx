import React, { useContext, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'

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
  const {product} =useContext(Shopcontext)
  const [showfilter,setshowfilter]=useState(false)
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t ">
      {/* filter*/}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cusrsor-pointer gap-2">
          FILTERS
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
            <p className="flex flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Makeup Products"}
              />
              Makeup Products
            </p>

            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Skincare Products"}
              />
              Skincare Products
            </p>

            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Lip & Eye Care"} />
              Lip & Eye Care
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection
