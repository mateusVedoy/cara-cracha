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
class ValidateTokenService {
    constructor(decodeToken, hashCompare) {
        this.DecodeToken = decodeToken;
        this.HashCompare = hashCompare;
    }
    validate(token, key) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tokenPayload = this.decodeTokenPayload(token);
                const payloadKey = this.extractPayloadKey(tokenPayload);
                const isKeyValid = yield this.compareTokenProps(key, payloadKey);
                return this.booleanResponse(isKeyValid);
            }
            catch (error) {
                throw error;
            }
        });
    }
    decodeTokenPayload(token) {
        return this.DecodeToken.decode(token);
    }
    extractPayloadKey(token) {
        const { key } = JSON.parse(JSON.stringify(token));
        return key;
    }
    compareTokenProps(key, tokenKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.HashCompare.compare(key, tokenKey);
        });
    }
    booleanResponse(validation) {
        return validation ? true : false;
    }
}
exports.ValidateTokenService = ValidateTokenService;
//# sourceMappingURL=ValidateTokenService.js.map