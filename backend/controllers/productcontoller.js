//function for add product
import { v2 as cloudinary } from "cloudinary";
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
      (iteam) => iteam !== undefined
    );

   const imageurl =await Promise.all(
    images.map(async(iteam)=>
    {
      const result =await cloudinary.uploader.upload(iteam.path,{resource_type:'image'})
      return result.secure_url;
    })
   )

    console.log(imageurl);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};
//function for list product
const listproduct = async (req, res) => {};

// function remove product
const removeproduct = async (req, res) => {};

//function for single product info
const singleproduct = async (req, res) => {};

export { listproduct, addproduct, removeproduct, singleproduct };
