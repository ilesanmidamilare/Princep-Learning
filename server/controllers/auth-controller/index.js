const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { userName, userEmail, password, role } = req.body;

    // Validate required fields
    if (!userName || !userEmail || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({
      $or: [{ userEmail }, { userName }],
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User name or user email already exists",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      userName,
      userEmail,
      role,
      password: hashPassword,
    });

    console.log("Registering user with email:", userEmail);
    await newUser.save();
    console.log("User saved successfully");

    return res.status(201).json({
      success: true,
      message: "User registered successfully!",
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error during registration",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { userEmail, password } = req.body;
    console.log("Login attempt for:", userEmail);

    // Validate required fields
    if (!userEmail || !password) {
      console.log("Missing email or password");
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const checkUser = await User.findOne({ userEmail });
    console.log("User found:", checkUser ? "Yes" : "No");

    if (!checkUser) {
      console.log("User not found in database");
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const passwordMatch = await bcrypt.compare(password, checkUser.password);
    console.log("Password match:", passwordMatch);

    if (!passwordMatch) {
      console.log("Password does not match");
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const accessToken = jwt.sign(
      {
        _id: checkUser._id,
        userName: checkUser.userName,
        userEmail: checkUser.userEmail,
        role: checkUser.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "120m" }
    );

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      data: {
        accessToken,
        user: {
          _id: checkUser._id,
          userName: checkUser.userName,
          userEmail: checkUser.userEmail,
          role: checkUser.role,
        },
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error during login",
    });
  }
};

module.exports = { registerUser, loginUser };
