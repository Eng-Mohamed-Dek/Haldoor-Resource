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

app.use(express.json());

const allowedOrigins = [
  "https://resources.hirkaab.com",
  "https://www.resources.hirkaab.com",
  "https://admin.hirkaab.com"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "x-refresh-token"],
}));

app.use("/api/templates", templateRoutes)
app.use("/api", authRouter)

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
