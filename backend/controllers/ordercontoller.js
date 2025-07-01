import { response } from "express";
import ordermodel from "../models/ordermodel.js";
import usermodel from "../models/usermodel.js";

//palcaing orders using cash on delivery
const placeorder = async (req, res) => {
  try {
    const { userid, items, amount, address } = req.body;

    const orderdata = {
      userid,
      items,
      amount,
      paymentmethod: "cod",
      payment: false,
      date: Date.now(),
      address,
    };
    const neworder = new ordermodel(orderdata);
    await neworder.save();
    await usermodel.findOneAndUpdate({ _id: userid }, { cartdata: {} });

    res.json({ success: true, message: "order place" }); 
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: error.message });
  }
};

//placing order using khalti method
const placeorderkhalti = async (req, res) => {};
//placing orders using esewa
const placeorderesewa = async (req, res) => {};

//all orders data for admin pannel
const allorders = async (req, res) => {};

//user order data for frontend
const usserorder = async (req, res) => {};

//upadate order satus from admin pannel
const updatstatus = async (req, res) => {};

export {
  placeorder,
  placeorderkhalti,
  placeorderesewa,
  allorders,
  usserorder,
  updatstatus,
};
