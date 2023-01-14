import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  res.json({ message: "login" });
};

export const register = async (req: Request, res: Response) => {
  res.json({ message: "register" });
};

export const logout = async (req: Request, res: Response) => {
  res.json({ message: "logout" });
};

export const getRefreshToken = async (req: Request, res: Response) => {
  res.json({ message: "Get refresh token" });
};
