"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intercepMiddleware = exports.validateTokenController = void 0;
const ValidateTokenController_1 = require("../adapter/controller/ValidateTokenController");
const ValidateTokenService_1 = require("../app/use-cases/ValidateTokenService");
const Intercept_1 = require("../adapter/middleware/Intercept");
const DecodeJWTToken_1 = require("../adapter/helper/DecodeJWTToken");
const BcryptJsHashCompare_1 = require("../adapter/helper/BcryptJsHashCompare");
const EmptyPropsValidate_1 = require("../adapter/helper/EmptyPropsValidate");
const intercepMiddleware = new Intercept_1.Intercept();
exports.intercepMiddleware = intercepMiddleware;
const decodeJWTToken = new DecodeJWTToken_1.DecodeJWTToken();
const emptyPropsValidation = new EmptyPropsValidate_1.EmptyPropsValidate();
const bcryptJsHashCompare = new BcryptJsHashCompare_1.BcryptJsHashCompare();
const validateTokenService = new ValidateTokenService_1.ValidateTokenService(decodeJWTToken, bcryptJsHashCompare);
const validateTokenController = new ValidateTokenController_1.ValidateTokenController(validateTokenService, emptyPropsValidation);
exports.validateTokenController = validateTokenController;
//# sourceMappingURL=ValidateToken.js.map