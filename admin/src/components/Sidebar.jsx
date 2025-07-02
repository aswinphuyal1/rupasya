import React from "react";
import { NavLink } from "react-router-dom";
import add from "../assets/add.png";
import list from "../assets/list.png";
import order from "../assets/order.png";
const Sidebar = () => {
  return (
    
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/add"
        >
          <img className="w-5 h-5" src={add} alt="" />
          <p className="hidden md:block">ADD ITEMS</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/list"
        >
          <img className="w-5 h-5" src={list} alt="" />
          <p className="hidden md:block">LIST ITEMS</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/order"
        >
          <img className="w-5 h-5" src={order} alt="" />
          <p className="hidden md:block">ORDER ITEMS</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
