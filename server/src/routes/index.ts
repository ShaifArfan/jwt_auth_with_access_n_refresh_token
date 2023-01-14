import { Router } from "express";
import testRoutes from "./test.router";

const router = Router();

router.use("/test", testRoutes);

export default router;
