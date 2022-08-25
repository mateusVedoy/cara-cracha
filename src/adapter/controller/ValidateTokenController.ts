import { IController } from "../../app/ports/controller/IController";
import { IEmptyProps } from "../../app/ports/helper/IEmptyProps";
import { IValidateToken } from "../../app/ports/use-cases/IValidateToken";
import { Request, Response } from "express";

export class ValidateTokenController implements IController {

    private ValidateTokenService: IValidateToken;
    private EmptyPropsValidation: IEmptyProps;

    public constructor(validateTokenService: IValidateToken, emptyPropsValidation: IEmptyProps) {
        this.ValidateTokenService = validateTokenService;
        this.EmptyPropsValidation = emptyPropsValidation;
    }

    public async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { token, key } = req.body;

            const moveOn = this.EmptyPropsValidation.isEmpty(token, key);

            if (!moveOn) return res.status(400).send({ "Message": "Required fields are empty" });

            const isTokenPayloadKeyValid = await this.ValidateTokenService.validate(token, key);
            return res.send({ "valid_token": isTokenPayloadKeyValid });
        } catch (error) {
            return res.status(400).send({
                "Message": "Verify your request. Something went wrong"
            });
        }
    }

}