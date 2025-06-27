import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import usermodel from "../models/usermodel.js";

//to generate the token
const createtoken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//route for user login
const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await usermodel.findOne({ email });
    if (!user) {
      res.json({ success: false, message: "user doesnot exist" });
    }
    const ismatch = await bcrypt.compare(password, user.password);
    if (ismatch) {
      const token = createtoken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//route for user register

const registeruser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //checkingg user already exist or not
    const exists = await usermodel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "user already exist" });
    }
    //check valadiation emailforamat and strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Enter the strong password" });
    }
    //hashing user passeord
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const newuser = new usermodel({
      name,
      email,
      password: hashedpassword,
    });
    //data base ma store hunxa
    const user = await newuser.save();
    //user can  login
    const token = createtoken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//for admin login
const adminlogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email == process.env.ADMIN_EMAIL &&
      password == process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "invalid user" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { loginuser, registeruser, adminlogin };
