import { ICreateTokenHelper } from "../../app/ports/helper/ICreateToken";
import { ICreateTokenService } from "../../app/ports/use-cases/ICreateToken";
import { Token } from "../../domain/Token";

export class CreateTokenService implements ICreateTokenService{

    private TokenGen: ICreateTokenHelper;
    private JWTTOKENEXPIRESIN: string = process.env.JWTEXPIRESIN || "30 minutes";

    public constructor(tokenGen: ICreateTokenHelper) {
        this.TokenGen = tokenGen;
    }

    public create(pass: string, login: string): Token {
        const createdToken = this.TokenGen.create(pass, login);
        return new Token(createdToken, this.JWTTOKENEXPIRESIN);
    }
}