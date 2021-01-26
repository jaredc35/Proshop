import express from "express";
const router = express.Router();
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";

router.post("/login", authUser); // Get a token for user

router.post("/", registerUser); // Register a new user
router.get("/", protect, admin, getUsers); // Get all users
router.route("/profile").get(protect, getUserProfile); // Get the user profile info
router.route("/profile").put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUser) // Delete the user
  .get(protect, admin, getUserById) // Get the user
  .put(protect, admin, updateUser); // Update the user

export default router;
