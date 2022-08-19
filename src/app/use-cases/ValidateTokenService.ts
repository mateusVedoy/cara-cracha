import { IValidateToken } from "app/ports/use-cases/IValidateToken";

export class ValidateTokenService implements IValidateToken {
    validate(): string {
        throw new Error("Method not implemented.");
    }
}