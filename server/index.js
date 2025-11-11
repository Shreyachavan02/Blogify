import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    if (conn) {
      console.log("MongoDB connected successfully");
    }
  }catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Blogify API !",

  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
