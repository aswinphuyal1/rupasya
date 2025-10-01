//function for add product
import { v2 as cloudinary } from "cloudinary";
import productmodel from "../models/porductmodel.js";
const addproduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      image,
      category,
      subcategory,
      sizes,
      bestseller,
      date,
    } = req.body;
    //const image1 = (req.files.image && req.files?.image1?.[0]) || null;
    const image1 = (req.files && req.files?.image1?.[0]) || null;
    const image2 = (req.files && req.files?.image2?.[0]) || null;
    const image3 = (req.files && req.files?.image3?.[0]) || null;
    const image4 = (req.files && req.files?.image4?.[0]) || null;

    const images = [image1, image2, image3, image4].filter(
      (iteam) => iteam !== undefined && iteam !== null
    );

    const imageurl = await Promise.all(
      images.map(async (iteam) => {
        const result = await cloudinary.uploader.upload(iteam.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productdata = {
      name,
      description,
      price: Number(price),
      image: imageurl,
      category,
      subcategory,
      sizes: JSON.parse(sizes),
      //yeslay array ma changed hanxa
      bestseller: bestseller === "true",
      date: Date.now(),
    };
    // console.log(productdata);
    const product = new productmodel(productdata);
    await product.save();

    // console.log(imageurl);

    res.json({ select: true, message: "product added" });
  } catch (error) {
    console.log(error);
    res.json({ select: false, message: "error" });
  }
};
//function for list product
const listproduct = async (req, res) => {
  try {
    const products = await productmodel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//function for single product info
const singleproduct = async (req, res) => {
  try {
    const { productid } = req.body;
    const product = await productmodel.findById(productid);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function remove product
const removeproduct = async (req, res) => {
  try {
    await productmodel.findOneAndDelete(req.body.id);
    res.json({ success: true, message: "product removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { listproduct, addproduct, removeproduct, singleproduct };
//
//