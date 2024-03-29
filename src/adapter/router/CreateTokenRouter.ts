import { Router, Request, Response } from "express";
import { createTokenController } from "../../main/CreateToken";

export const createTokenRouter = Router();

createTokenRouter.post("/", (req: Request, res: Response) => createTokenController.handle(req, res));