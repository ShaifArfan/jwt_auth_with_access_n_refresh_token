import express from "express";
import allRoutes from "./routes";
import morgan from "morgan";
import { portInUseErrorLogs } from "./utils/showErrorLogs";

// dotenv
import * as dotenv from "dotenv";
dotenv.config();

let PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;

const server = express();

// middleware
server.use(morgan("tiny"));
server.use(express.json());

// routes
server.use("/api", allRoutes);

server
  .listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  })
  .on("error", (error: any) => {
    if (error.code === "EADDRINUSE") {
      portInUseErrorLogs(PORT);
      process.exit(1);
    }
  });
