import { Router } from "express";

import {
  deleteUserController,
  getUserController,
  getUsersController,
  loginUserController,
  signupUserController,
  updateUserController,
} from "../controller/auth.controller";

const authRoutes = Router();

authRoutes.get("/user", getUserController);
authRoutes.get("/users", getUsersController);

authRoutes.post("/login", loginUserController);
authRoutes.post("/signup", signupUserController);

authRoutes.put("/user", updateUserController);
authRoutes.delete("/user", deleteUserController);

export default authRoutes;
