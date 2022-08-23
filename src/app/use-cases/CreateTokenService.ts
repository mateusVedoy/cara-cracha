import { IPassHasher } from "../../app/ports/helper/IPassHasher";
import { ICreateTokenHelper } from "../../app/ports/helper/ICreateToken";
import { ICreateTokenService } from "../../app/ports/use-cases/ICreateToken";
import { Token } from "../../domain/Token";

export class CreateTokenService implements ICreateTokenService{

    private TokenGen: ICreateTokenHelper;
    private PassHasher: IPassHasher;
    private JWTTOKENEXPIRESIN: string = process.env.JWTEXPIRESIN || "1800000";

    public constructor(tokenGen: ICreateTokenHelper, passHash: IPassHasher) {
        this.TokenGen = tokenGen;
        this.PassHasher = passHash;
    }

    public async create(pass: string, login: string): Promise<Token> {
        const hashedPass = await this.hashTokenPass(pass);
        const createdToken = this.TokenGen.create(hashedPass, login);
        return new Token(createdToken, this.JWTTOKENEXPIRESIN);
    }

    private async hashTokenPass(pass: string): Promise<string>{
        try {
            return await this.PassHasher.hash(pass);
        } catch (error) {
            throw error;
        }
    }
}