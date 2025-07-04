import mongoose from "mongoose";

const connectdb = async () => {
  mongoose.connection.on("connected", () => {
    console.log("db connected");
  });
  await mongoose.connect(`${process.env.MONGODB_url}/rupasya`);
};
export default connectdb;
//

// import mongoose from "mongoose";

// const connectdb = async () => {
//   mongoose.connection.on("connected", () => {
//     console.log("db connected");
//   });

//   mongoose.connection.on("error", (err) => {
//     console.error("MongoDB connection error:", err);
//   });

//   try {
//     await mongoose.connect(`${process.env.MONGODB_url}/rupasya`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       serverSelectionTimeoutMS: 15000, // increase timeout
//       socketTimeoutMS: 20000, // increase socket timeout
//     });
//   } catch (err) {
//     console.error("Failed to connect to MongoDB:", err);
//     process.exit(1);
//   }
// };
// export default connectdb;
