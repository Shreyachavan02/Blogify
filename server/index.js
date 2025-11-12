import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { postLogin, postSignup } from "./controllers/user.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

let requestCount = 0;

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

app.get("/api/request-count", (req, res) => {
  res.json({ requestCount });
});

app.use((req, res, next) => {
requestCount++;
next();
});

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Blogify API !",

  });
});


app.get("/api/test1", (req, res, next) => {
  console.log("Actual Controller test1 called");
  res.json({ message: "Test1 route reached" });
});


app.get("/api/test2",( req, res, next) => {
  console.log("Actual Controller test2 called");
  res.json({ message: "Test2 route reached" });
});

app.post("/signup" , postSignup);
app.post("/login", postLogin);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
