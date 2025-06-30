import usermodel from "../models/usermodel.js";

//add product to useer cart

const addtocart = async (req, res) => {
  try {
    const { userid, iteamid, size } = req.body;
    const userdata = await usermodel.findById(userid);
    let cartdata = await userdata.cartdata;
    if (cartdata[iteamid]) {
      if (cartdata[iteamid][size]) {
        cartdata[iteamid][size] = cartdata[iteamid][size] + 1;
      } else {
        cartdata[iteamid][size] = 1;
      }
    } else {
      cartdata[iteamid] = {};
      cartdata[iteamid][size] = 1;
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
try {
    
    const {userid,iteamid,size,quantity} = req.body
    const userdata = await usermodel.findById(userid);
    let cartdata = await userdata.cartdata;

    cartdata[iteamid][size]=quantity

    await usermodel.findByIdAndUpdate(userid, { cartdata });
    res.json({ success: true, message: "Cartupdated" });

} catch (error) {
    console.log(error)
res.json({success:false,message:error.message})
  
}

};

//get user cart data
const getusercart = async (req, res) => {

    try {
        const {userid} =req.body
        const userdata = await usermodel.findById(userid);
        let cartdata = await userdata.cartdata;

        res.json({success:true ,cartdata})
    } catch (error) {
        onsole.log(error);
        res.json({ success: false, message: error.message });
  
    }
};

export { addtocart, updatacart, getusercart };
