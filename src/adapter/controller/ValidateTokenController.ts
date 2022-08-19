import { IController } from "app/ports/controller/IController";
import { Request, Response } from "express";

export class ValidateTokenController implements IController {

    public handle(_: Request, res: Response): Response<boolean> {
        return res.status(200).send({"valid_token": true})
    }
    
}