import { IController } from "app/ports/controller/IController";
import { IValidateToken } from "app/ports/use-cases/IValidateToken";
import { Request, Response } from "express";

export class ValidateTokenController implements IController {

    private ValidateTokenService: IValidateToken;

    public constructor(validateTokenService: IValidateToken) {
        this.ValidateTokenService = validateTokenService;
    }

    public async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { token, key } = req.body;
            const isTokenPayloadKeyValid = await this.ValidateTokenService.validate(token, key);
            return res.send({ "valid_token": isTokenPayloadKeyValid });
        } catch (error) {
            throw error;
        }
    }

}