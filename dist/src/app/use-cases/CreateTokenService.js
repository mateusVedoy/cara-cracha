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
exports.CreateTokenService = void 0;
const Token_1 = require("../../domain/Token");
class CreateTokenService {
    constructor(tokenGen, passHash, keyGen) {
        this.JWTTOKENEXPIRESIN = process.env.JWTEXPIRESIN || "1800000";
        this.TokenGen = tokenGen;
        this.PassHasher = passHash;
        this.KeyGen = keyGen;
    }
    create(props) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = this.KeyGen.generateKey();
            const hashedKey = yield this.hashTokenProps(key);
            const createdToken = this.createTokenHash(props, hashedKey);
            return new Token_1.Token(createdToken, this.JWTTOKENEXPIRESIN, key);
        });
    }
    hashTokenProps(pass) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.PassHasher.hash(pass);
            }
            catch (error) {
                throw error;
            }
        });
    }
    createTokenHash(props, key) {
        return this.TokenGen.create(props, key);
    }
}
exports.CreateTokenService = CreateTokenService;
//# sourceMappingURL=CreateTokenService.js.map