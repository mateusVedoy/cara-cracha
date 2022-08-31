import { IPassHasher } from "../../app/ports/helper/IPassHasher";
import { ICreateTokenHelper } from "../../app/ports/helper/ICreateToken";
import { ICreateTokenService } from "../../app/ports/use-cases/ICreateToken";
import { Token } from "../../domain/Token";
import { IKeyGenerate } from "app/ports/helper/IKeyGenerate";

export class CreateTokenService implements ICreateTokenService{

    private TokenGen: ICreateTokenHelper;
    private PassHasher: IPassHasher;
    private KeyGen: IKeyGenerate;
    private JWTTOKENEXPIRESIN: string = process.env.JWTEXPIRESIN || "1800000";

    public constructor(tokenGen: ICreateTokenHelper, passHash: IPassHasher, keyGen: IKeyGenerate) {
        this.TokenGen = tokenGen;
        this.PassHasher = passHash;
        this.KeyGen = keyGen;
    }

    public async create(props: Object): Promise<Token> {
        const key = this.KeyGen.generateKey();
        const hashedKey = await this.hashTokenProps(key);
        const createdToken = this.createTokenHash(props, hashedKey);
        return new Token(createdToken, this.JWTTOKENEXPIRESIN, key);
    }

    private async hashTokenProps(pass: string): Promise<string>{
        try {
            return await this.PassHasher.hash(pass);
        } catch (error) {
            throw error;
        }
    }

    private createTokenHash(props: Object, key: string): string {
        return this.TokenGen.create(props, key);
    }
}