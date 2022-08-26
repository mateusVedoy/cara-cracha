"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validate_Token_Use_Case_shared_1 = require("../shared/Validate-Token-Use-Case.shared");
const Ceate_Token_Use_Case_shared_1 = require("../shared/Ceate-Token-Use-Case.shared");
describe("Validate Token use case", () => {
    let generateToken;
    let isTokenValid;
    let invalidToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzIjoiJDJhJDEwJGJFM0h0MzlROENzYzd4Y2FTbGRPQU96OXhrRlFhNWhHbm1tTjB2d0hLMk8xTHF4WTdkb3YuIiwibG9naW4iOiJtZ29lcyIsImtleSI6IiQyYSQxMCQvT2ZieVRUU0pXSmFGY0MxSFpCVWt1VGlQZTFQaGhlSS9jRjhjSGgvdzRYL1VseWlVaHhLRyIsImlhdCI6MTY2MTQ2MTk0MiwiZXhwIjoxNjYxNDYzNzQyfQ.XEyJyqaJnbX3XVmDSWBKzqM3QowcH5-F8jarea6TQCY';
    let invalidKey = '00056943-3b47-4c39-b972-b477772c430c';
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        generateToken = yield Ceate_Token_Use_Case_shared_1.createTokenService.create('123456', 'mgoes');
    }));
    it("should return true when token and key are valid", () => __awaiter(void 0, void 0, void 0, function* () {
        isTokenValid = yield Validate_Token_Use_Case_shared_1.validateTokenService.validate(generateToken.getHash(), generateToken.getSecretKey());
        expect(isTokenValid).toBeTruthy();
    }));
    it("should return false when key are invalid", () => __awaiter(void 0, void 0, void 0, function* () {
        isTokenValid = yield Validate_Token_Use_Case_shared_1.validateTokenService.validate(generateToken.getHash(), invalidKey);
        expect(isTokenValid).toBeFalsy();
    }));
    it("should return false when token are invalid", () => __awaiter(void 0, void 0, void 0, function* () {
        isTokenValid = yield Validate_Token_Use_Case_shared_1.validateTokenService.validate(invalidToken, generateToken.getSecretKey());
        expect(isTokenValid).toBeFalsy();
    }));
    it("should call DecodeToken helper once", () => __awaiter(void 0, void 0, void 0, function* () {
        isTokenValid = yield Validate_Token_Use_Case_shared_1.validateTokenService.validate(generateToken.getHash(), generateToken.getSecretKey());
        expect(Validate_Token_Use_Case_shared_1.spyDecodeJWTToken).toHaveBeenCalledTimes(1);
    }));
    it("should call hash compare helper once", () => __awaiter(void 0, void 0, void 0, function* () {
        isTokenValid = yield Validate_Token_Use_Case_shared_1.validateTokenService.validate(generateToken.getHash(), generateToken.getSecretKey());
        expect(Validate_Token_Use_Case_shared_1.spyBcryptJsHashCompare).toHaveBeenCalledTimes(1);
    }));
});
//# sourceMappingURL=ValidateTokenService.spec.js.map