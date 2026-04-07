import express from "express";
import cors from "cors";
import mongoose from 'mongoose'
import authRouter from './routes/authRoute.js'
import templateRoutes from './routes/templateRoutes.js'

// DNS error 
import { setServers } from "dns/promises";
import multer from "multer";
setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/templates", templateRoutes)
app.use("/", authRouter)

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ message: "File Image is too large" });
    }
  }
  res.status(500).json({ message: err.message || "Server error" });
});

// Server Port
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        // Start Express server only after DB connection
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT} MongoDB connected`)
        });
    })
    .catch(err => console.error("MongoDB connection error:", err));
