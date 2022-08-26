import { VerifyJWTToken } from "../../../src/adapter/helper/VerifyJWTToken";

jest.mock("jsonwebtoken");

const verifiyToken = new VerifyJWTToken();

const TOKENINVALID = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJwYXNzIjoiMTIzNDU2IiwibG9naW4iOiJtZ29lcyIsImlhdCI6MTY2MDYxNTg1NywiZXhwIjoxNjYwNjE3NjU3fQ._3EvjMBoOY3Vgr85Be0aydZKceZ9KjlMxN8Q0bB9QFg";

const TOKENVALID = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJwYXNzIjoiMTIzNDU2IiwibG9naW4iOiJtZ29lcyIsImlhdCI6MTY2MDY2NTI4NCwiZXhwIjoxNjYwNjY3MDg0fQ.zpqyfzfl5y_L06iXPZi8F_QG-hBhD8SwyzJVCXyAPv8";

describe("Verify JWT Token helper", () => {

    let isTokenValid;

    beforeEach(() => {
        
    });

    it("should return the message: 'verified' when token is valid", () => {
        expect(isTokenValid).toBe('verified');
    });
});