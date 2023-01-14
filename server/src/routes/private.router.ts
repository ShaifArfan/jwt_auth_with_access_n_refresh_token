import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Congrats you got access to a private route" });
});

export default router;
