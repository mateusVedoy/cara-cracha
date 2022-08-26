import jwt from "jsonwebtoken";
import bcrjs from "bcryptjs";
import { Token } from "../../src/domain/Token";
import { createTokenService, spyHelper, spyPassHash } from "../shared/Ceate-Token-Use-Case.shared"

describe("Create Token use case", () => {

    let JWTToken: Token;

    beforeEach(async () => {
        JWTToken = await createTokenService.create('123456', 'mgoes');
    });

    it("should create a token with the same data that was passed as args", async () => {
        const tokenPayload = JSON.parse(JSON.stringify(jwt.decode(JWTToken.getHash())))
        const secret = JWTToken.getSecretKey();
        const { login, pass, key } = tokenPayload;
        expect(await bcrjs.compare('123456', pass)).toBeTruthy();
        expect(await bcrjs.compare(secret, key)).toBeTruthy();
        expect(login).toBe('mgoes');

    });

    it("should return a instance of Token entity", () => {
        expect(JWTToken).toBeInstanceOf(Token);
    });

    it("should contain pass, login and key properties", () => {
        expect(jwt.decode(JWTToken.getHash())).toHaveProperty('pass');
        expect(jwt.decode(JWTToken.getHash())).toHaveProperty('login');
        expect(jwt.decode(JWTToken.getHash())).toHaveProperty('key');
    });

    it("should call Create Token Helper once", () => {
        expect(spyHelper).toHaveBeenCalledTimes(1);
    });

    it("should call pass hasher helper twice", () => {
        expect(spyPassHash).toHaveBeenCalledTimes(2);
    });

});