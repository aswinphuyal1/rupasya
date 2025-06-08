import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import searchicon from "../assets/searchico.png";
import profileicon from "../assets/prrofile.jpg";
import carticno from "../assets/cart.png";
import menu from "../assets/menu.jpg";
import drop from "../assets/drop.png";

const Navbar = () => {
  const [visible, setvisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={logo2} className="w-36" alt="" />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" class="flex flex-col item-center gap-1">
          <p>HOME</p>
          <hr
            className="w-2/4 mx-auto border-none h-[1px] bg-gray-700"
            hidden
          />
        </NavLink>
        <NavLink to="/collection" class="flex flex-col item-center gap-1">
          <p>COLLECTION</p>
          <hr
            className="w-2/4 mx-auto border-none h-[1px] bg-gray-700"
            hidden
          />
        </NavLink>
        <NavLink to="/about" class="flex flex-col item-center gap-1">
          <p>ABOUT</p>
          <hr
            className="w-2/4 mx-auto border-none h-[1px] bg-gray-700"
            hidden
          />
        </NavLink>
        <NavLink to="/contact" class="flex flex-col item-center gap-1">
          <p>CONTACT</p>
          <hr
            className="w-2/4 mx-auto border-none h-[1px] bg-gray-700"
            hidden
          />
        </NavLink>
      </ul>

      <div className="flex item-center gap-6">
        <img src={searchicon} className="w-5 cursor-pointer" alt="" />

        <div className="group relative">
          <img className="w-5 cursor-pointer" src={profileicon} alt="" />

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Order</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        {/* <Link to="/cart" className="relative">
          <img src={carticno} className="w-7 min-w-7" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 h-4 text-center leading-4 bg-black text-white rounded-full text-xs">10</p>
        </Link> */}

        <Link to="/cart" className="relative">
          <img src={carticno} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 h-4 bg-black text-white rounded-full text-[11px] flex items-center justify-center">
            10
          </p>
        </Link>
        {/* SIDE BAR MENU FRO SMALL DEVICES*/}
        <img
          onClick={() => setvisible(true)}
          src={menu}
          className="w-5 cursor-pointer"
          alt=""
        />
      </div>
      <div
        className={`absolute top-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        } `}
      >
        <div
          onClick={() => {
            setvisible(false);
          }}
          className="flex flex col text-gray-600"
        >
          <div className="felx items-center gap-4 p-3"></div>
          <img className="h-4 rotate-180" src={drop} alt="" />
          <p>Back</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
