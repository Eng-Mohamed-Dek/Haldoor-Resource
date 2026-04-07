import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import env from "dotenv";

env.config();

const route = express.Router();

// Generate Access Token
const generateAccessToken = (user) => {
  return jwt.sign(
    user,
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
  );
};

// Generate Refresh Token
const generateRefreshToken = (user) => {
  return jwt.sign(
    user,
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "20d" }
  );
};

route.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Check admin credentials from .env
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const adminUser = {
      id: "admin",
      email: process.env.ADMIN_EMAIL,
      role: "superadmin"
    };

    const accessToken = generateAccessToken(adminUser);
    const refreshToken = generateRefreshToken(adminUser);

    res.json({
      message: "Admin login successful",
      user: adminUser,
      accessToken,
      refreshToken
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default route;