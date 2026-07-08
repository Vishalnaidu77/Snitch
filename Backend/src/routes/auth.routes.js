import { Router } from "express";
import { googleCallback, loginController, registerController } from "../controllers/auth.controller.js";
import { registerValidation } from "../validator/auth.validation.js";
import passport from "passport";

const authRouter = Router();

authRouter.post("/register", registerValidation, registerController)
authRouter.post("/login", loginController)
authRouter.get("/google", 
    passport.authenticate("google", { scope: ["profile", "email"]}))

authRouter.get("/google/callback",
    passport.authenticate("google", { session: false }),
    googleCallback
)

export default authRouter;