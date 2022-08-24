import { IPassHasher } from "../../app/ports/helper/IPassHasher";
import { ICreateTokenHelper } from "../../app/ports/helper/ICreateToken";
import { ICreateTokenService } from "../../app/ports/use-cases/ICreateToken";
import { Token } from "../../domain/Token";
import { IKeyGenerate } from "../../app/ports/helper/IKeyGenerate";

export class CreateTokenService implements ICreateTokenService{

    private TokenGen: ICreateTokenHelper;
    private PassHasher: IPassHasher;
    private keyGen: IKeyGenerate;
    private JWTTOKENEXPIRESIN: string = process.env.JWTEXPIRESIN || "1800000";

    public constructor(tokenGen: ICreateTokenHelper, passHash: IPassHasher, keyGen: IKeyGenerate) {
        this.TokenGen = tokenGen;
        this.PassHasher = passHash;
        this.keyGen = keyGen;
    }

    public async create(pass: string, login: string): Promise<Token> {
        const hashedPass = await this.hashTokenPass(pass);
        const key = this.tokenKeyGenerate();
        const createdToken = this.createTokenHash(hashedPass, login, key);
        return new Token(createdToken, this.JWTTOKENEXPIRESIN, key);
    }

    private async hashTokenPass(pass: string): Promise<string>{
        try {
            return await this.PassHasher.hash(pass);
        } catch (error) {
            throw error;
        }
    }

    private createTokenHash(hashedPass: string, login: string, key: string): string {
        return this.TokenGen.create(hashedPass, login, key);
    }

    private tokenKeyGenerate(): string {
        return this.keyGen.generateKey();
    }
}