import User from "./../models/user.js";

const postSignup = async (req, res) => {
const { name, email, password } = req.body;

if(!name) {
return res.status(400).json({
    success: false,
    message: "Name is required",
});
}
if(!email) {
    return res.status(400).json({
        success: false,
        message: "Email is required",
    });
}
if(!password) {
    return res.status(400).json({
        success: false,
        message: "Password is required",
    });
}

const existingUser = await User.findOne({ email });
if (existingUser) {
    return  res.status(400).json({
        success: false,
        message: `User with this email  ${email} already exists`,
    });
}


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