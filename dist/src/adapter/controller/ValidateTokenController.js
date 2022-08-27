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
exports.ValidateTokenController = void 0;
class ValidateTokenController {
    constructor(validateTokenService, emptyPropsValidation) {
        this.ValidateTokenService = validateTokenService;
        this.EmptyPropsValidation = emptyPropsValidation;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token, key } = req.body;
                const moveOn = this.EmptyPropsValidation.isEmpty(token, key);
                if (!moveOn)
                    return res.status(400).send({ "Message": "Required fields are empty" });
                const isTokenPayloadKeyValid = yield this.ValidateTokenService.validate(token, key);
                return res.send({ "valid_token": isTokenPayloadKeyValid });
            }
            catch (error) {
                return res.status(400).send({
                    "Message": "Verify your request. Something went wrong"
                });
            }
        });
    }
}
exports.ValidateTokenController = ValidateTokenController;
//# sourceMappingURL=ValidateTokenController.js.map