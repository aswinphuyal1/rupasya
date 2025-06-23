import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import searchicon from "../assets/searchico.png";
import profileicon from "../assets/prrofile.jpg";
import carticno from "../assets/cart.png";
import menu from "../assets/menu.jpg";
//import drop from "../assets/drop.png";
import { Shopcontext } from "../context/Shopcontext";

const Navbar = () => {
  const [visible, setvisible] = useState(false);
  const { setshowserach, getcartcount } = useContext(Shopcontext);
  const navigate = useNavigate();
  const handleSearchClick = () => {
    setshowserach(true);
    navigate("/collection");
  };
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={logo2} className="w-36" alt="" />{" "}
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr
            className="w-2/4 mx-auto border-none h-[1px] bg-gray-700"
            hidden
          />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr
            className="w-2/4 mx-auto border-none h-[1px] bg-gray-700"
            hidden
          />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr
            className="w-2/4 mx-auto border-none h-[1px] bg-gray-700"
            hidden
          />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr
            className="w-2/4 mx-auto border-none h-[1px] bg-gray-700"
            hidden
          />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          onClick={handleSearchClick}
          src={searchicon}
          className="w-5 cursor-pointer"
          alt=""
        />
        <div className="group relative">
          <Link to='/login'>
            <img className="w-5 cursor-pointer" src={profileicon} alt="" />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700 rounded ">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Order</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={carticno} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 h-4 bg-black text-white rounded-full text-[11px] flex items-center justify-center">
            {getcartcount()}
          </p>
        </Link>
        <img
          onClick={() => setvisible(true)}
          src={menu}
          className="flex sm:hidden w-5 cursor-pointer"
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
          className="flex col text-gray-600"
        >
          <div className="felx items-center gap-4 p-3"></div>
          <img className=" cursor-pointer  h-6 rotate-180" src={menu} alt="" />
          <p className="cursor-pointer">Back</p>
        </div>
        <div className="flex flex-col">
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 "
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 "
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 "
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
