import { CreateTokenService } from "../app/use-cases/CreateTokenService";
import { CreateJWTToken } from "../adapter/helper/CreateJWTToken";
import { CreateTokenController } from "../adapter/controller/CreateTokenController";

const createJWTToken = new CreateJWTToken();
const createTokenService = new CreateTokenService(createJWTToken);
export const createTokenController = new CreateTokenController(createTokenService);