import { IDecodeTokenHelper } from "app/ports/helper/IDecodeToken";
import { IHashCompare } from "app/ports/helper/IHashCompare";
import { IValidateToken } from "app/ports/use-cases/IValidateToken";

export class ValidateTokenService implements IValidateToken {

    private DecodeToken: IDecodeTokenHelper;
    private HashCompare: IHashCompare;

    public constructor(decodeToken: IDecodeTokenHelper, hashCompare: IHashCompare) {
        this.DecodeToken = decodeToken;
        this.HashCompare = hashCompare;
    }

    public async validate(token: string, key: string): Promise<Boolean> {
        
        try {
            const tokenPayload = this.decodeTokenPayload(token);
            const payloadKey = this.extractPayloadKey(tokenPayload);
            const isKeyValid = await this.compareTokenProps(key, payloadKey);
            return this.booleanResponse(isKeyValid);
        } catch (error) {
            throw error;
        }
    }

    private decodeTokenPayload(token: string): Object {
        return this.DecodeToken.decode(token);
    }
    
    private extractPayloadKey(token: Object): string {
        const { key } = JSON.parse(JSON.stringify(token))
        return key;
    }

    private async compareTokenProps(key: string, tokenKey: string): Promise<Boolean> {
        return await this.HashCompare.compare(key, tokenKey);
    }

    private booleanResponse(validation: Boolean): Boolean {
        return validation ? true : false;
    }
}