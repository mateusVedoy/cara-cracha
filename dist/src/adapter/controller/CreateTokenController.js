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
exports.CreateTokenController = void 0;
class CreateTokenController {
    constructor(createToken, emptyPropsValidation) {
        this.CreateTokenService = createToken;
        this.EmptyPropsValidation = emptyPropsValidation;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { pass, login } = req.body;
                const moveOn = this.EmptyPropsValidation.isEmpty(req.body);
                if (!moveOn)
                    return res.status(400).send({ "Message": "Required fields are empty" });
                //modificar aqui
                const token = yield this.CreateTokenService.create(req.body);
                const modelResponse = this.handleModelResponse(token.getHash(), token.getSecretKey(), token.getCreatedAt(), token.getExpiresIn());
                return res.status(201).send(modelResponse);
            }
            catch (error) {
                return res.status(400).send({ "Message": "Verify your request. Something went wrong" });
            }
        });
    }
    handleModelResponse(tkn, secret, createdAt, expiresIn) {
        return {
            "access_token": tkn,
            "key": secret,
            "created_at": createdAt,
            "expires_in": expiresIn
        };
    }
}
exports.CreateTokenController = CreateTokenController;
//# sourceMappingURL=CreateTokenController.js.map