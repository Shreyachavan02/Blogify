import User from "./../models/user.js";

const postSignup = async (req, res) => {
const { name, email, password } = req.body;

const newUser = new User({ name, email, password });

const savedUser = await newUser.save();

res.json({ 
    success: true,
    message: "User registered successfully", 
    user: savedUser,

 });
};
const postLogin = (req, res) => {};

export { postSignup, postLogin };