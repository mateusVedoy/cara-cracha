"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateTokenService_1 = require("../app/use-cases/CreateTokenService");
const CreateJWTToken_1 = require("../adapter/helper/CreateJWTToken");
const CreateTokenController_1 = require("../adapter/controller/CreateTokenController");
const BCryptjsPassHash_1 = require("../adapter/helper/BCryptjsPassHash");
const UUIDKeyGenerate_1 = require("../adapter/helper/UUIDKeyGenerate");
const EmptyPropsValidate_1 = require("../adapter/helper/EmptyPropsValidate");
const createJWTToken = new CreateJWTToken_1.CreateJWTToken();
const emptyPropsValidation = new EmptyPropsValidate_1.EmptyPropsValidate();
const uuidKeyGenerate = new UUIDKeyGenerate_1.UUIDKeyGenerate();
const bcryptjsPassHash = new BCryptjsPassHash_1.BcryptJsPassHash();
const createTokenService = new CreateTokenService_1.CreateTokenService(createJWTToken, bcryptjsPassHash, uuidKeyGenerate);
exports.createTokenController = new CreateTokenController_1.CreateTokenController(createTokenService, emptyPropsValidation);
//# sourceMappingURL=CreateToken.js.map