import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import drop from "../assets/drop.png";
import Title from "../components/Title";
import Productitem from "../components/Productitem";
const Collection = () => {
  const { products } = useContext(Shopcontext);
  const [showfilter, setshowfilter] = useState(false);
  const [filterproduct, setfilterproduct] = useState([]);
  const [category, setcategory] = useState([]);
  const [subcategory, setsubcategory] = useState([]);
  const [sorttype, setsorttype] = useState("relavent");

  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setcategory((prev) => [...prev, e.target.value]);
    }
  };
  const togglesubcategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setsubcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setsubcategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyfilter = () => {
    let productcopy = products.slice();
    if (category.length > 0) {
      productcopy = productcopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subcategory.length > 0) {
      productcopy = productcopy.filter((item) =>
        subcategory.includes(item.subcategory)
      );
    }
    setfilterproduct(productcopy);
  };



const sortproduct =()=>
{
  let fpCopy = filterproduct.slice();
switch (sorttype) {
  case "low-high":
    setfilterproduct(fpCopy.sort((a, b) => a.price - b.price));
    break;
  case "high to low":
    setfilterproduct(fpCopy.sort((a, b) => (b.price - a.price)));
    break;
    default:
      applyfilter();
    break;

}
}

  useEffect(() => {
    applyfilter();
  }, [category, subcategory]);

  useEffect(()=>
  {
    sortproduct();
  },[sorttype]);
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
                onChange={togglecategory}
              />
              Makeup Products
            </label>

            <label className="flex items-center gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Skincare Products"}
                onChange={togglecategory}
              />
              Skincare Products
            </label>

            <label className="flex items-center gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Lip & Eye Care"}
                onChange={togglecategory}
              />
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
              <input
                className="w-3"
                type="checkbox"
                value={"MEN"}
                onClick={togglecategory}
              />
              MEN
            </p>

            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"WOMEN"}
                onChange={togglesubcategory}
              />
              WOMEN
            </p>

            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"PREMIUM"}
                onChange={togglesubcategory}
              />
              PREMIUM
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"BASIC"}
                onClick={togglesubcategory}
              />
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
          <select onChange={(e)=>setsorttype(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
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
