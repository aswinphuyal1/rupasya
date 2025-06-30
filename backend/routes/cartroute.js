import express from "express";

import {
  addtocart,
  updatacart,
  getusercart,
} from "../controllers/cartcontoller.js";
import authuser from "../middleware/auth.js";

const cartrouter = express.Router();
cartrouter.post("/get", authuser, getusercart);
cartrouter.post("/add", authuser, addtocart);
cartrouter.post("/update", authuser, updatacart);

export default cartrouter;
