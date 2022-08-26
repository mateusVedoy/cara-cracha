"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateTokenService_1 = require("../../src/app/use-cases/CreateTokenService");
const CreateJWTToken_1 = require("../../src/adapter/helper/CreateJWTToken");
const BCryptjsPassHash_1 = require("../../src/adapter/helper/BCryptjsPassHash");
const UUIDKeyGenerate_1 = require("../../src/adapter/helper/UUIDKeyGenerate");
//cria as classes mockados com as tipagens jest
const CreateJWTTokenMock = CreateJWTToken_1.CreateJWTToken;
const BCryptjsPassHashMock = BCryptjsPassHash_1.BcryptJsPassHash;
const UUIDKeyGenerateMock = UUIDKeyGenerate_1.UUIDKeyGenerate;
//cria objeto com a classe mockada
const createJWTTokenMocked = new CreateJWTTokenMock();
const BCryptjsPassHashMocked = new BCryptjsPassHashMock();
const UUIDKeyGenerateMocked = new UUIDKeyGenerateMock();
//cria spy do metodo da classe helper
exports.spyHelper = jest.spyOn(createJWTTokenMocked, 'create');
exports.spyPassHash = jest.spyOn(BCryptjsPassHashMocked, 'hash');
//instancia o use case testado
exports.createTokenService = new CreateTokenService_1.CreateTokenService(createJWTTokenMocked, BCryptjsPassHashMocked, UUIDKeyGenerateMocked);
//# sourceMappingURL=Ceate-Token-Use-Case.shared.js.map