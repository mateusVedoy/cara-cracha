import { validateTokenService, spyDecodeJWTToken, spyBcryptJsHashCompare } from "../shared/Validate-Token-Use-Case.shared";
import { createTokenService } from "../shared/Ceate-Token-Use-Case.shared";
import { Token } from "../../src/domain/Token";

describe("Validate Token use case", () => {

    let generateToken: Token;
    let isTokenValid: Boolean;
    let invalidToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzIjoiJDJhJDEwJGJFM0h0MzlROENzYzd4Y2FTbGRPQU96OXhrRlFhNWhHbm1tTjB2d0hLMk8xTHF4WTdkb3YuIiwibG9naW4iOiJtZ29lcyIsImtleSI6IiQyYSQxMCQvT2ZieVRUU0pXSmFGY0MxSFpCVWt1VGlQZTFQaGhlSS9jRjhjSGgvdzRYL1VseWlVaHhLRyIsImlhdCI6MTY2MTQ2MTk0MiwiZXhwIjoxNjYxNDYzNzQyfQ.XEyJyqaJnbX3XVmDSWBKzqM3QowcH5-F8jarea6TQCY';
    let invalidKey = '00056943-3b47-4c39-b972-b477772c430c';

    beforeEach(async () => {
        generateToken = await createTokenService.create('123456', 'mgoes');
    });

    it("should return true when token and key are valid", async () => {
        isTokenValid = await validateTokenService.validate(generateToken.getHash(), generateToken.getSecretKey());
        expect(isTokenValid).toBeTruthy();
    });
    it("should return false when key are invalid", async () => {
        isTokenValid = await validateTokenService.validate(generateToken.getHash(), invalidKey);
        expect(isTokenValid).toBeFalsy();
    });
    it("should return false when token are invalid", async () => {
        isTokenValid = await validateTokenService.validate(invalidToken, generateToken.getSecretKey());
        expect(isTokenValid).toBeFalsy();
    });
    it("should call DecodeToken helper once", async () => {
        isTokenValid = await validateTokenService.validate(generateToken.getHash(), generateToken.getSecretKey());
        expect(spyDecodeJWTToken).toHaveBeenCalledTimes(1);
    });
    it("should call hash compare helper once", async () => {
        isTokenValid = await validateTokenService.validate(generateToken.getHash(), generateToken.getSecretKey());
        expect(spyBcryptJsHashCompare).toHaveBeenCalledTimes(1);
    });
});