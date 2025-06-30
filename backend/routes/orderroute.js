import express from "express";
import adminauth from "../middleware/adminauth.js";
import authuser from "../middleware/auth.js";
import {
  placeorder,
  placeorderkhalti,
  placeorderesewa,
  allorders,
  usserorder,
  updatstatus,
  
} from "../controllers/ordercontoller.js";
 
const orderrouter =express.Router()
//admin features
orderrouter.post('/list',adminauth,allorders)
orderrouter.post("/status", adminauth, updatstatus);

//payment features
orderrouter.post("/place",authuser,placeorder);
orderrouter.post("/khalti", authuser,placeorderkhalti);
orderrouter.post("/esewa", authuser, placeorderesewa);


//userfeature
orderrouter.post('/userorders',authuser,usserorder)

export default orderrouter