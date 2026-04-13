import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import cloudinary from "./cloudinary.js";

// PDF storage for certificates
const storage = new CloudinaryStorage({
  cloudinary,
   params: {
    folder: "avatar",
    allowed_formats: "jpg,jpeg,png,webp", // ✅ FIXED
  }
});

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});
