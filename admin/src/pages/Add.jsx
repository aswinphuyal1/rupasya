import React from "react";
import { Form } from "react-router-dom";
import upload from "../assets/upload.png";
const Add = () => {
  return (
    <form className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2 ">Upload image</p>
        <div className="flex gap-1">
          <label htmlFor="image1">
            <img className="w-20 " src={upload} alt="" />
            <input type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className="w-20 " src={upload} alt="" />
            <input type="file" id="image2" hidden />
          </label>
          <label htmlFor="image4">
            <img className="w-20 " src={upload} alt="" />
            <input type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className="w-20 " src={upload} alt="" />
            <input type="file" id="image4" hidden />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          className="w-full max-w-[500px] px-3 py-2 "
          type="text"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          className="w-full max-w-[500px] px-3 py-2 "
          type="text"
          placeholder="write about the project"
          required
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2 ">Category</p>
          <select className="w-full px-3 py-2 ">
            <option value="Makeup Products">Makeup Products</option>
            <option value="Skincare Products">Skincare Products</option>
            <option value="Lip & Eye Care">Lip & Eye Care</option>
          </select>
        </div>
        <div>
          <p className="mb-2 ">Sub category</p>
          <select className="w-full px-3 py-2 ">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="premium">PREMIUM</option>
            <option value="Basic">Basic</option>
          </select>
        </div>
        <div>
          <p className="mb-2 ">Product price</p>
          <input
            className="w-full px-3 py-2 sm:w-[120px]"
            type="Number"
            placeholder="25 Rs"
          />
        </div>
      </div>
      <div>
        <p className="mb-2">Product sizes</p>
        <div className="flex gap-3">
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">200ml</p>
          </div>
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">250ml</p>
          </div>
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">500ml</p>
          </div>
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">1l</p>
          </div>
        </div>
      </div>
      <div className=" flex mb-2 mt-2">
        <input type="checkbox" id="bestseller" />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>
      <button type="submit" className="w-28  py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default Add;
