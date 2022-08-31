import jwt from "jsonwebtoken";
import bcrjs from "bcryptjs";
import { Token } from "../../src/domain/Token";
import { createTokenService, spyHelper, spyPassHash } from "../shared/Ceate-Token-Use-Case.shared"

describe("Create Token use case", () => {

    let JWTToken: Token;
    let data: Object = {login: 'mgoes', pass: '123456'}

    beforeEach(async () => {
        JWTToken = await createTokenService.create(data);
    });

    it("should create a token with the same data that was passed as args", async () => {
        const tokenPayload = JSON.parse(JSON.stringify(jwt.decode(JWTToken.getHash())))
        const secret = JWTToken.getSecretKey();
        const { props , key } = tokenPayload;
        expect(await bcrjs.compare(secret, key)).toBeTruthy();
        expect(props).toMatchObject(data);

    });

    it("should return a instance of Token entity", () => {
        expect(JWTToken).toBeInstanceOf(Token);
    });

    it("should contain props and key properties", () => {
        expect(jwt.decode(JWTToken.getHash())).toHaveProperty('props');
        expect(jwt.decode(JWTToken.getHash())).toHaveProperty('key');
    });

    it("should call Create Token Helper once", () => {
        expect(spyHelper).toHaveBeenCalledTimes(1);
    });

    it("should call pass hasher helper once", () => {
        expect(spyPassHash).toHaveBeenCalledTimes(1);
    });

});