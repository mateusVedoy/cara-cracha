import { IController } from "app/ports/controller/IController";
import { IEmptyProps } from "app/ports/helper/IEmptyProps";
import { ICreateTokenService } from "app/ports/use-cases/ICreateToken";
import { Request, Response } from "express";

export class CreateTokenController implements IController {

    private CreateTokenService: ICreateTokenService;
    private EmptyPropsValidation: IEmptyProps;

    public constructor(createToken: ICreateTokenService, emptyPropsValidation: IEmptyProps) {
        this.CreateTokenService = createToken;
        this.EmptyPropsValidation = emptyPropsValidation;
    }

    public async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { pass, login } = req.body;

            const moveOn = this.EmptyPropsValidation.isEmpty(pass, login);
            
            if (!moveOn) return res.status(400).send({ "Message": "Required fields are empty" });

            const token = await this.CreateTokenService.create(pass, login);

            const modelResponse = this.handleModelResponse(token.getHash(), token.getSecretKey(), token.getCreatedAt(), token.getExpiresIn());

            return res.status(201). send(modelResponse);
        } catch (error) {
            return res.status(400).send({ "Message": "Verify your request. Something went wrong" });
        }
    }

    private handleModelResponse(tkn: string, secret: string, createdAt: string, expiresIn: string): Object {
        return {
            "access_token": tkn,
            "key": secret,
            "created_at": createdAt,
            "expires_in": expiresIn
        }
    }
}