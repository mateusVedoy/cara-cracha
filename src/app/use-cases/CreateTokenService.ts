import { ICreateTokenHelper } from "../../app/ports/helper/ICreateToken";
import { ICreateTokenService } from "../../app/ports/use-cases/ICreateToken";
import { Token } from "../../domain/Token";

export class CreateTokenService implements ICreateTokenService{

    private TokenGen: ICreateTokenHelper;
    private JWTTOKENEXPIRESIN: string = process.env.JWTEXPIRESIN || "$1$YhiQ/w2L$mmtX.mrwAEARiZOM4C/S00";

    public constructor(tokenGen: ICreateTokenHelper) {
        this.TokenGen = tokenGen;
    }

    public create(id: string, pass: string, login: string): Token {
        const createdToken = this.createTokenHelperCaller(id, pass, login);
        const expiresIn =  this.JWTTOKENEXPIRESIN;
        return new Token(createdToken, expiresIn);
    }
    
    private createTokenHelperCaller(id: string, pass: string, login: string): string {
        return this.TokenGen.create(id, pass, login);
    }
}