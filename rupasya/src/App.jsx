import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Placeorder from "./pages/Placeorder";
import Product from "./pages/Poduct";
import Navbar from "./components/Navbar";
import Fotter from "./components/Fotter";
import Searchbar from "./components/Searchbar";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  return (
    <div>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ToastContainer/>
        <Navbar />
        <Searchbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Order />} />
          <Route path="/placeorder" element={<Placeorder />} />
          <Route path="/product/:productID" element={<Product />} />
        </Routes>
        <Fotter />
      </div>
    </div>
  );
};

export default App;
