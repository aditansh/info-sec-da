import { Router } from "express";
import { login } from "../controllers/userController.js";
import { search } from "../controllers/movieController.js";
const router = Router();

router.post("/login", login);
router.post("/search", search);

export default router;
