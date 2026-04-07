import express from "express";
import {
  createTemplate,
  getTemplates,
  getTemplatesByCategory,
  getTemplateById,
  updateTemplate,
  deleteTemplate,
  getTemplatesClient
} from "../controller/templateControllers.js";
import { upload } from "../utils/upload.js";
import { authenticate } from "../middleware/jwt.js";
const router = express.Router();

// Create
router.post("/", authenticate, upload.single('avatar'), createTemplate);

// Get all (with optional search query: /?search=keyword)
router.get("/", getTemplates);

router.get("/client", getTemplatesClient);

// Update
router.put("/:id", authenticate, upload.single('avatar'), updateTemplate);

// Delete
router.delete("/:id", authenticate, deleteTemplate);

// Get by category
router.get("/category/:category", getTemplatesByCategory);

// Get single
router.get("/:id", getTemplateById);


export default router;