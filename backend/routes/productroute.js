import express from "express";
import upload from "../middleware/multer.js";
import {
  listproduct,
  addproduct,
  removeproduct,
  singleproduct,
} from "../controllers/productcontoller.js";

const productroute = express.Router();

productroute.post(
  "/add",
  upload.fields([
    { name: "image1", maxcount: 1 },
    { name: "image2", maxcount: 1 },
    { name: "image3", maxcount: 1 },
    { name: "image4", maxcount: 1 },
  ]),
  addproduct
);
productroute.post("/remove", removeproduct);
productroute.post("/single", singleproduct);
productroute.get("/list", listproduct);

export default productroute;
