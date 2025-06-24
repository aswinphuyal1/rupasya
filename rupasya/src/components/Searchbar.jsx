import React, { useContext, useState, useEffect } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Search from "../assets/searchico.png";
import cross from "../assets/cross.png";
import { useLocation } from "react-router-dom";
const Searchbar = () => {
  const { search, setsearch, showsearch, setshowserach } =
    useContext(Shopcontext);
  const [visible, setvisible] = useState(false);
 const location = useLocation();
  // Only show searchbar on /collection route and when showsearch is true
  useEffect(() => {
    if (location.pathname.includes("/collection") && showsearch) {
      setvisible(true);
    } else {
      setvisible(false);
    } 
  }, [location.pathname, showsearch]);

  return visible ? (
    <div className=" bg-white text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="serach"
        />
        <img className="w-4" src={Search} alt="" />
      </div>
      <img
        onClick={() => {
          setshowserach(false);
        }}
        className="inline w-3 cursor-pointer"
        src={cross}
        alt=""
      />
    </div>
  ) : null;
};

export default Searchbar;
//