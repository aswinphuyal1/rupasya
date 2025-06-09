import React from "react";
import makeup from "../assets/makeup.png";
const Hero = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row border border-gray-400">
        {/* Hero left side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base">OUR BESTSELLER</p>
            </div>
            <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">
              Latest Arrival
            </h1>
            <div className="flex items-center gap-2"></div>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
              <span className="w-8 md:w-11 h-[1px] bg-[#414141] inline-block align-middle"></span>
            </div>
          </div>
        </div>
        {/* Hero right side */}
        <img className="w-full sm:w-1/2" src={makeup} alt="" />
      </div>
    </div>
  );
};

export default Hero;
