import React, { useState } from "react";

const Login = () => {
  const [currentstate, setcurrentstate] = useState("login");
  const onsubmithandler = async (event) => {
    event.preventDefault();
    //yeslay relode huna dinna
  };
  return (
    <div>
      <form
        onSubmit={onsubmithandler}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14  gap-4 text-gray-80 "
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">
            {currentstate === "login" ? "Login" : "Sign Up"}
          </p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800"></hr>
        </div>
        {currentstate === "login" ? (
          ""
        ) : (
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-800 "
            placeholder="Enter your name"
            required
          ></input>
        )}
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-800 "
          placeholder="Email"
          required
        ></input>
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-800 "
          placeholder="Password"
          required
        ></input>
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forget your password</p>
          {currentstate === "login" ? (
            <p
              onClick={() => setcurrentstate("signup")}
              className="cursor-pointer"
            >
              create account
            </p>
          ) : (
            <p
              onClick={() => setcurrentstate("login")}
              className="cursor-pointer"
            >
              Login
            </p>
          )}
        </div>

        <button className="bg-black text-white font-light px-8 py-2 mt-4">
          {currentstate === "login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
