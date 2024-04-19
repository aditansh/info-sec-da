import { Router } from "express";
import { login } from "../controllers/userController.js";
import { search } from "../controllers/movieController.js";
import { createBlog, getBlogs } from "../controllers/blogController.js";
const router = Router();

router.post("/login", login);
router.post("/search", search);
router.get("/blogs", getBlogs);
router.post("/blogs", createBlog);

export default router;
