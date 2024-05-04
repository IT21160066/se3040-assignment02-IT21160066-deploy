import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

/**
 * This code implements authentication and token-based authorization using JSON Web Tokens
 */

const register = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;

  // Confirming data
  if (!userName || !email || !password)
    return res.status(400).json({ message: "All field are required" });

  // Check email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email))
    return res.status(400).json({ message: "Invalid email format" });

  // Check for duplicates
  const duplicate = await User.findOne({ userName }).lean().exec();

  if (duplicate)
    return res.status(409).json({ message: "Duplicate user name with user." });

  // Hash password
  const hashPwd = await bcrypt.hash(password, 10); // Salt rounds

  const userObject = { userName, email, password: hashPwd };

  // Create & store new user
  const user = await User.create(userObject);

  if (user) {
    res.status(201).json({ message: `New user ${userName} created` });
  } else {
    res.status(400).json({ message: "Invalid user data recived" });
  }
});

// @desc Login
// @route POST /auth
// @access Public

const login = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const foundUser = await User.findOne({ userName }).exec();

  if (!foundUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const match = await bcrypt.compare(password, foundUser.password);

  if (!match) return res.status(401).json({ message: "Unauthorized" });

  const accessToken = jwt.sign(
    {
      UserInfo: {
        userId: foundUser._id,
        userName: foundUser.userName,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "10s" }
  );

  res.json({ accessToken });
});

export { register, login };
