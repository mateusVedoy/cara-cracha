"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET = process.env.JWTSECRET || "$1$YhiQ/w2L$mmtX.mrwAEARiZOM4C/S00";
class Intercept {
    intercept(req, res, next) {
        const { token } = req.body;
        jsonwebtoken_1.default.verify(token, SECRET, (err) => {
            if (err)
                return res.status(401).send({ "Message:": err.message });
            else
                next();
        });
    }
}
exports.Intercept = Intercept;
//# sourceMappingURL=Intercept.js.map