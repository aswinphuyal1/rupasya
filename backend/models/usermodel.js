import mongoose from "mongoose";
import { use } from "react";

const userschema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartdata: { type: object, default: {} },
  },
  { minimize: false }
);

const usermodel = mongoose.model.user || mongoose.model("user", userschema);
export default usermodel;
