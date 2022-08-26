"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValidateTokenService_1 = require("../../src/app/use-cases/ValidateTokenService");
const DecodeJWTToken_1 = require("../../src/adapter/helper/DecodeJWTToken");
const BcryptJsHashCompare_1 = require("../../src/adapter/helper/BcryptJsHashCompare");
const DecodeJWTTokenMock = DecodeJWTToken_1.DecodeJWTToken;
const BcryptJsHashCompareMock = BcryptJsHashCompare_1.BcryptJsHashCompare;
const DecodeJWTTokenMocked = new DecodeJWTTokenMock();
const BcryptJsHashCompareMocked = new BcryptJsHashCompareMock();
exports.spyDecodeJWTToken = jest.spyOn(DecodeJWTTokenMocked, 'decode');
exports.spyBcryptJsHashCompare = jest.spyOn(BcryptJsHashCompareMocked, 'compare');
exports.validateTokenService = new ValidateTokenService_1.ValidateTokenService(DecodeJWTTokenMocked, BcryptJsHashCompareMocked);
//# sourceMappingURL=Validate-Token-Use-Case.shared.js.map