import User from "./../models/user.js";

const postSignup = async (req, res) => {
const { name, email, password } = req.body;

if (!name || !email || !password) {
    return res.status(400).json({
        success: false,
        message: "Name, email, and password are required",
    });
}

const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameValidationRegex = /^[a-zA-Z ]+$/;
const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


if(nameValidationRegex.test(name) === false){
return res.status(400).json({
    success: false,
    message: "Name should contain only alphabets and spaces",
});
}
if(emailValidationRegex.test(email) == false){
    return res.status(400).json({
        success: false,
        message: "Email is not valid",
    });
}
if(passwordValidationRegex.test(password) === false) { 
    return res.status(400).json({
        success: false,
        message: "password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character",
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