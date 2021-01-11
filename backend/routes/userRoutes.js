import express from "express";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";
import {
  authUser,
  registerUser,
  getUserProfile
} from "../controllers/userController.js";

router.post("/login", authUser); // Get a token for user

router.post("/", registerUser); // Register a new user
router.route("/profile").get(protect, getUserProfile); // Get the user profile info

export default router;
