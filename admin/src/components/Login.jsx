import React, { useState } from "react";
import axios from 'axios' //http ruquest garna
import { backendurl } from "../App";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onsubmithandeler = async (e) => {
    try {
      e.preventDefault(); //prevent from realod
      const response =await axios.post(backendurl +"/api/user/admin",{email,password})
console.log(response)
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className=" min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin pannel</h1>
        <form onSubmit={onsubmithandeler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-800 mb-2">
              Email Address
            </p>
            <input
              onChange={(e) => setemail(e.target.value)}
              value={email}
              className="rounded-md  w-full px-3 py-2 border border-gray-300 outline-none "
              type="email"
              placeholder="enter email"
              required
            />
          </div>

          <div>
            <p>Password</p>
            <input
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              className="rounded-md  w-full px-3 py-2 border border-gray-300 outline-none "
              type="password"
              placeholder="Enter a password"
              required
            />
          </div>
          <button
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
