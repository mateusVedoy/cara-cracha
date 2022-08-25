import { ValidateTokenController } from "../adapter/controller/ValidateTokenController";
import { ValidateTokenService } from "../app/use-cases/ValidateTokenService";
import { Intercept } from "../adapter/middleware/Intercept";
import { DecodeJWTToken } from "../adapter/helper/DecodeJWTToken";
import { BcryptJsPassCompare } from "../adapter/helper/BcryptJsHashCompare";

const intercepMiddleware = new Intercept();
const decodeJWTToken = new DecodeJWTToken();
const bcryptJsHashCompare = new BcryptJsPassCompare();
const validateTokenService = new ValidateTokenService(decodeJWTToken, bcryptJsHashCompare);
const validateTokenController = new ValidateTokenController(validateTokenService);

export {
    validateTokenController,
    intercepMiddleware
}