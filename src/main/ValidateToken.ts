import { ValidateTokenController } from "../adapter/controller/ValidateTokenController";
import { ValidateTokenService } from "../app/use-cases/ValidateTokenService";
import { Intercept } from "../adapter/middleware/Intercept";
import { DecodeJWTToken } from "../adapter/helper/DecodeJWTToken";
import { BcryptJsHashCompare } from "../adapter/helper/BcryptJsHashCompare";
import { EmptyPropsValidate } from "../adapter/helper/EmptyPropsValidate";

const intercepMiddleware = new Intercept();
const decodeJWTToken = new DecodeJWTToken();
const emptyPropsValidation = new EmptyPropsValidate();
const bcryptJsHashCompare = new BcryptJsHashCompare();
const validateTokenService = new ValidateTokenService(decodeJWTToken, bcryptJsHashCompare);
const validateTokenController = new ValidateTokenController(validateTokenService, emptyPropsValidation);

export {
    validateTokenController,
    intercepMiddleware
}