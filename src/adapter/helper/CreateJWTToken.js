"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET = process.env.JWTSECRET || "$1$YhiQ/w2L$mmtX.mrwAEARiZOM4C/S00";
const JWTEXPIRESIN = process.env.JWTEXPRESIN || "30 minutes";
class CreateJWTToken {
    create(pass, login, key) {
        return jsonwebtoken_1.default.sign({
            pass: pass,
            login: login,
            key: key
        }, SECRET, {
            "expiresIn": JWTEXPIRESIN
        });
    }
}
exports.CreateJWTToken = CreateJWTToken;
//# sourceMappingURL=CreateJWTToken.js.map