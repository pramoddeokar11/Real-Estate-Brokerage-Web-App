import express from "express";
import { addProperty, getProperties, getPropertyById } from "../controllers/propertyController.js";
import protect from "../middleware/authMiddleware.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Add Property - Restricted to admin with email "abc@gmail.com"
router.post("/", protect, upload.single("image"), (req, res, next) => {
  if (req.user.email !== "def@gmail.com" && req.user.email !== "abc@gmail.com") {
    return res.status(403).json({ message: "Access denied. Only admin can add properties." });
  }
  next(); // If the user is admin, proceed to the addProperty controller
}, addProperty);


router.get("/", getProperties);


router.get("/:id", getPropertyById);

export default router;