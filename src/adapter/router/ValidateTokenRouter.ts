import { Router, Request, Response } from "express";
import { validateTokenController, intercepMiddleware } from "../../main/ValidateToken";

export const validateTokenRouter = Router();

validateTokenRouter.post("/", intercepMiddleware.intercept, (req: Request, res: Response) => validateTokenController.handle(req, res));