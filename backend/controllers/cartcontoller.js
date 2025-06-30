import usermodel from "../models/usermodel.js";

//add product to useer cart

const addtocart = async (req, res) => {
  try {
    const { userid, itemid, size } = req.body;
    const userdata = await usermodel.findById(userid);
    let cartdata = await userdata.cartdata;
    if (cartdata[itemid]) {
      if (cartdata[itemid][size]) {
        cartdata[itemid][size] = cartdata[itemid][size] + 1;
      } else {
        cartdata[itemid][size] = 1;
      }
    } else {
      cartdata[itemid] = {};
      cartdata[itemid][size] = 1;
    }

    await usermodel.findByIdAndUpdate(userid,{cartdata})
res.json({success:true ,message:"added to cart"})
  } catch (error) {
console.log(error)
res.json({success:false,message:error.message})
  }
};

//updatacart
const updatacart = async (req, res) => 
    {


};

//get user cart data
const getusercart = async (req, res) => {};

export { addtocart, updatacart, getusercart };
