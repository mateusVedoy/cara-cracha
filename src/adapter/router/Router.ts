import { Router } from "express";
import { createTokenRouter } from "./CreateTokenRouter";
import { validateTokenRouter } from "./ValidateTokenRouter";

export const router = Router();

router.use("/token/create", createTokenRouter);
router.use("/token/validate", validateTokenRouter);