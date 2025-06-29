import React, { useState } from "react";
import { Form } from "react-router-dom";
import upload from "../assets/upload.png";
import axios from "axios";
import { backendurl } from "../App";
import { toast } from "react-toastify";
const Add = ({ token }) => {
  const [image1, setimage1] = useState(false);
  const [image2, setimage2] = useState(false);
  const [image3, setimage3] = useState(false);
  const [image4, setimage4] = useState(false);
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("makeup products");
  const [Subcategory, setSubcategory] = useState("men");
  const [bestseller, setbestseller] = useState(false);
  const [sizes, setsizes] = useState([]);

  const onsubmithandeler = async (e) => {
    e.preventDefault();

    try {
      const formdata = new FormData();
      formdata.append("name", name);
      formdata.append("description", description);
      formdata.append("price", price);
      formdata.append("category", category);
      formdata.append("subcategory", Subcategory);
      formdata.append("sizes", JSON.stringify(sizes)); // array converted into string
      formdata.append("bestseller", bestseller ? "true" : "false");
      image1 && formdata.append("image1", image1);
      image2 && formdata.append("image2", image2);
      image3 && formdata.append("image3", image3);
      image4 && formdata.append("image4", image4);

      const response = await axios.post(
        backendurl + "/api/product/add",
        formdata,
        { headers: { token } }
      );

      if (response.data.select) {
        toast.success(response.data.message);
        setname("");
        setSubcategory("");
        setcategory("");
        setdescription("");
        setimage1(false);
        setimage2(false);
        setimage3(false);
        setimage4(false);
        setprice("");
        setbestseller(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onsubmithandeler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="mb-2 ">Upload image</p>
        <div className="flex gap-1">
          <label htmlFor="image1">
            <img
              className="w-20 "
              src={!image1 ? upload : URL.createObjectURL(image1)}
              alt=""
            />
            <input
              onChange={(e) => setimage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              className="w-20 "
              src={!image2 ? upload : URL.createObjectURL(image2)}
              //if image upload vako xaina vane tyo
              // upload wala icon dinca else teslay hami
              // lay j upload garya tyo dinxa
              alt=""
            />
            <input
              onChange={(e) => setimage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              className="w-20 "
              src={!image3 ? upload : URL.createObjectURL(image3)}
              alt=""
            />
            <input
              onChange={(e) => setimage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              className="w-20 "
              src={!image4 ? upload : URL.createObjectURL(image4)}
              alt=""
            />
            <input
              onChange={(e) => setimage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          onChange={(e) => setname(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2 "
          type="text"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          onChange={(e) => setdescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2 "
          type="text"
          placeholder="write about the project"
          required
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2 ">Category</p>
          <select
            onChange={(e) => setcategory(e.target.value)}
            className="w-full px-3 py-2 "
          >
            <option value="makeup products">Makeup Products</option>
            <option value="skincare products">Skincare Products</option>
            <option value="lip & eye Care">Lip & Eye Care</option>
          </select>
        </div>
        <div>
          <p className="mb-2 ">Subcategory</p>
          <select
            onChange={(e) => setSubcategory(e.target.value)}
            className="w-full px-3 py-2 "
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="premium">PREMIUM</option>
            <option value="basic">Basic</option>
          </select>
        </div>
        <div>
          <p className="mb-2 ">Product price</p>
          <input
            onChange={(e) => setprice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="Number"
            placeholder="25 Rs"
          />
        </div>
      </div>
      <div>
        <p className="mb-2">Product sizes</p>
        <div className="flex gap-3">
          <div
            onClick={() =>
              setsizes((prev) =>
                prev.includes("200ml")
                  ? prev.filter((item) => item !== "200ml")
                  : [...prev, "200ml"]
              )
            }
          >
            <p
              className={`  ${
                sizes.includes("200ml") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              200ml
            </p>
          </div>
          <div
            onClick={() =>
              setsizes((prev) =>
                prev.includes("250ml")
                  ? prev.filter((item) => item !== "250ml")
                  : [...prev, "250ml"]
              )
            }
          >
            <p
              className={`  ${
                sizes.includes("250ml") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              250ml
            </p>
          </div>
          <div
            onClick={() =>
              setsizes((prev) =>
                prev.includes("500ml")
                  ? prev.filter((item) => item !== "500ml")
                  : [...prev, "500ml"]
              )
            }
          >
            <p
              className={`  ${
                sizes.includes("500ml") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              500ml
            </p>
          </div>
          <div
            onClick={() =>
              setsizes((prev) =>
                prev.includes("1l")
                  ? prev.filter((item) => item !== "1l")
                  : [...prev, "1l"]
              )
            }
          >
            <p
              className={`  ${
                sizes.includes("1l") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              1l
            </p>
          </div>
        </div>
      </div>
      <div className=" flex mb-2 mt-2">
        <input
          onChange={(e) => setbestseller(e.target.checked)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
        />
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
