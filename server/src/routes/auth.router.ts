import express from "express";
import {
  getRefreshToken,
  login,
  logout,
  register,
} from "../controllers/auth.controllers";
const router = express.Router();

router.get("/login", login);
router.get("/register", register);
router.get("/logout", logout);
router.get("/get_refresh_token", getRefreshToken);

export default router;
