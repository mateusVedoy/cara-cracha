import { CreateTokenService } from "../app/use-cases/CreateTokenService";
import { CreateJWTToken } from "../adapter/helper/CreateJWTToken";
import { CreateTokenController } from "../adapter/controller/CreateTokenController";
import { BcryptJsPassHash } from "../adapter/helper/BCryptjsPassHash";

const createJWTToken = new CreateJWTToken();
const bcryptjsPassHash = new BcryptJsPassHash();
const createTokenService = new CreateTokenService(createJWTToken, bcryptjsPassHash);
export const createTokenController = new CreateTokenController(createTokenService);