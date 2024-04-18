import { Router } from "express";
import { login } from "../controllers/userController.js";
const router = Router();

router.post("/login", login);
// router.post("/search", movieController.search);

export default router;
