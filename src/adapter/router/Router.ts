import { Router } from "express";
import { createTokenRouter } from "./CreateTokenRouter";

export const router = Router();

router.use("/token", createTokenRouter);