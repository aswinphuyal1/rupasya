import express from "express";
import {
  listproduct,
  addproduct,
  removeproduct,
  singleproduct,
} from "../controllers/productcontoller.js";
const productroute = express.Router();

productroute.post("/add", addproduct);
productroute.post("/remove", removeproduct);
productroute.post("/single", singleproduct);
productroute.get("/list", listproduct);

export default productroute;
