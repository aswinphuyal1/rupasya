import express from "express";
import upload from "../middleware/multer.js";
import adminauth from "../middleware/adminauth.js";
import {
  listproduct,
  addproduct,
  removeproduct,
  singleproduct,
} from "../controllers/productcontoller.js";

const productroute = express.Router();

productroute.post(
  "/add",
  adminauth,
  upload.fields([
    { name: "image1", maxcount: 1 },
    { name: "image2", maxcount: 1 },
    { name: "image3", maxcount: 1 },
    { name: "image4", maxcount: 1 },
  ]),
  addproduct
);
productroute.post("/remove", adminauth, removeproduct);
productroute.post("/single", adminauth, singleproduct);
productroute.get("/list", adminauth, listproduct);

export default productroute;
