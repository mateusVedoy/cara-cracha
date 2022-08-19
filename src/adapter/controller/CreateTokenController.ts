import { IController } from "app/ports/controller/IController";
import { ICreateTokenService } from "app/ports/use-cases/ICreateToken";
import { Request, Response } from "express";

export class CreateTokenController implements IController {

    private CreateTokenService: ICreateTokenService;

    public constructor(createToken: ICreateTokenService) {
        this.CreateTokenService = createToken;
    }

    public handle(req: Request, res: Response): Response {
        const { pass, login } = req.body;
        const token = this.CreateTokenService.create(pass, login);
        return res.status(201).send({
            "access_token":token.getHash(),
            "expiresIn": token.getExpiresIn()
        })
    }

}