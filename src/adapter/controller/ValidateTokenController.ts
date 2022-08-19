import { IController } from "app/ports/controller/IController";
import { IValidateToken } from "app/ports/use-cases/IValidateToken";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export class ValidateTokenController implements IController {

    // private ValidateToken: IValidateToken;

    // public constructor(validateToken: IValidateToken) {
    //     this.ValidateToken = validateToken;
    // }

    public handle(req: Request, res: Response): Response<string> {
        const { token } = req.body;
        const decodeToken = jwt.decode(token);
        return res.json(decodeToken)
    }
    
}