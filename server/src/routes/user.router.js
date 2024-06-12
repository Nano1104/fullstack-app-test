import express from "express";
import { authMiddle, adminMiddle } from "../middlewares/authMiddlewares.js";
import { changePrice } from "../controllers/user.controller.js";

const router = express.Router();

router.put("/changePrice", [authMiddle, adminMiddle], changePrice)

export default router