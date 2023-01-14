import { Router } from "express";
import authRoutes from "./auth.router";
import privateRoutes from "./private.router";

const router = Router();

router.use("/auth", authRoutes);
router.use("/private", privateRoutes);

export default router;
