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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const Token_1 = require("../../src/domain/Token");
const Ceate_Token_Use_Case_shared_1 = require("../shared/Ceate-Token-Use-Case.shared");
describe("Create Token use case", () => {
    let JWTToken;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        JWTToken = yield Ceate_Token_Use_Case_shared_1.createTokenService.create('123456', 'mgoes');
    }));
    it("should create a token with the same data that was passed as args", () => __awaiter(void 0, void 0, void 0, function* () {
        const tokenPayload = JSON.parse(JSON.stringify(jsonwebtoken_1.default.decode(JWTToken.getHash())));
        const secret = JWTToken.getSecretKey();
        const { login, pass, key } = tokenPayload;
        expect(yield bcryptjs_1.default.compare('123456', pass)).toBeTruthy();
        expect(yield bcryptjs_1.default.compare(secret, key)).toBeTruthy();
        expect(login).toBe('mgoes');
    }));
    it("should return a instance of Token entity", () => {
        expect(JWTToken).toBeInstanceOf(Token_1.Token);
    });
    it("should contain pass, login and key properties", () => {
        expect(jsonwebtoken_1.default.decode(JWTToken.getHash())).toHaveProperty('pass');
        expect(jsonwebtoken_1.default.decode(JWTToken.getHash())).toHaveProperty('login');
        expect(jsonwebtoken_1.default.decode(JWTToken.getHash())).toHaveProperty('key');
    });
    it("should call Create Token Helper once", () => {
        expect(Ceate_Token_Use_Case_shared_1.spyHelper).toHaveBeenCalledTimes(1);
    });
    it("should call pass hasher helper twice", () => {
        expect(Ceate_Token_Use_Case_shared_1.spyPassHash).toHaveBeenCalledTimes(2);
    });
});
//# sourceMappingURL=CreateTokenService.spec.js.map