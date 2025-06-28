import React from "react";
import logo2 from "../assets/logo2.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mt-40 my-10 text-sm">
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14">
        {/* Logo Section */}
        <div>
          <Link to="/">
            {" "}
            <img src={logo2} alt="Brand Logo" className="mb-5 w-32" />
          </Link>
          <p className="w-full md:w-2/3 text-gray-600">
            **Rupasya** is a proudly Nepali makeup brand offering high-quality,
            affordable beauty products tailored to local skin tones and
            preferences. Focused on enhancing natural beauty, Rupasya blends
            tradition with modern trends to empower confidence in every face
            across Nepal.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-3">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to="">
              {" "}
              <li>Home</li>
            </Link>
            <Link to="/about">
              {" "}
              <li>About us</li>
            </Link>
            <Link to="/cart">
              {" "}
              <li>Delivery</li>
            </Link>
            <Link to="/contact">
              {" "}
              <li>Privacy policy</li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+01-2345-678</li>
            <li>rupasya@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="py-5 text-sm text-center">
          {" "}
          Copyright 2024@ rupasya-All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
//