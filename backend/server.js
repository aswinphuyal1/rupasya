//npm i cors dotenv express jsonwebtoken mongoose multer nodemon razorpay stripe validator cloudinary bcrypt
import "dotenv/config";
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectdb from "./config/mongodb.js";
import connectcloudinary from "./config/cloudinary.js";
import userrouter from "./routes/userroute.js";
import productroute from "./routes/productroute.js";
import cartrouter from "./routes/cartroute.js";
import orderrouter from "./routes/orderroute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;

const startserver = async () => {
  try {
    await connectdb();
    connectcloudinary();

    //middlewares
    app.use(express.json());
    app.use(cors());
    //CORS is a security feature implemented by
    //  browsers to restrict how resources
    //  are shared between different origins
    //  (domain, protocol, and port)

    //api endpoints
    app.use("/api/user", userrouter);
    app.use("/api/product", productroute);
    app.use("/api/cart", cartrouter);
    app.use("/api/order", orderrouter);
    app.get("/", (req, res) => {
      res.send("Api working");
    });

    app.listen(port, () => console.log("serve started on port :", port));
  } catch (err) {
    console.error("Failed to connect to database. Server not started.", err);
  }
};

startserver();
