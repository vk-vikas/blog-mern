import { Router } from "express";
import {
  createPost,
  getAllPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
import { Protect } from "../controllers/userController.js";

const router = Router();

router.post("", Protect, createPost);
router.get("", Protect, getAllPost);
router.put("", updatePost);
router.delete("", deletePost);

export default router;
