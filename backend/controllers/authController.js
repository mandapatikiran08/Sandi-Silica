import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateToken } from "../lib/utils.js";
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES || "7d";

// ------------------ REGISTER ------------------
export const registerUser = async (req, res) => {
  try {
    const { email, mobile, companyName, address, password } = req.body;
    console.log(req.body);
    // 1. Check required fields
    if (!email || !mobile || !password) {
      return res.status(400).json({ msg: "Email, mobile, and password are required" });
    }
  

    // 2. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User with this email already exists" });
    }


    // 3. Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Create user
    const newUser = await User.create({
      email,
      mobile,
      companyName,
      address,
      password: hashedPassword,
    });

    // 5. Create JWT
    generateToken(newUser._id,res);
    await newUser.save();

    // 6. Send response
    res.status(201).json({
      user: {
        id: newUser._id,
        email: newUser.email,
        mobile: newUser.mobile,
        companyName: newUser.companyName,
        address: newUser.address,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// ------------------ LOGIN ------------------
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check required fields
    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password are required" });
    }

    // 2. Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // 3. Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    // 4. Create JWT
    generateToken(user._id,res);

    // 5. Send response

    res.json({
      user: {
        id: user._id,
        email: user.email,
        mobile: user.mobile,
        companyName: user.companyName,
        address: user.address,
      },
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
