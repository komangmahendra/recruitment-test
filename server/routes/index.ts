import { Router } from "express";

// controllers
import UserController from "../controllers/user";

const router = Router();

router.post("/register", UserController.register);
router.post("/login");

export default router;
