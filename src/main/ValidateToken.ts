import { ValidateTokenController } from "../adapter/controller/ValidateTokenController";
import { Intercept } from "../adapter/middleware/Intercept";

const validateTokenController = new ValidateTokenController();
const intercepMiddleware = new Intercept();

export {
    validateTokenController,
    intercepMiddleware
}