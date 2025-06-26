import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
