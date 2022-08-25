import { CreateTokenService } from "../app/use-cases/CreateTokenService";
import { CreateJWTToken } from "../adapter/helper/CreateJWTToken";
import { CreateTokenController } from "../adapter/controller/CreateTokenController";
import { BcryptJsPassHash } from "../adapter/helper/BCryptjsPassHash";
import { UUIDKeyGenerate } from "../adapter/helper/UUIDKeyGenerate";

const createJWTToken = new CreateJWTToken();
const uuidKeyGenerate = new UUIDKeyGenerate();
const bcryptjsPassHash = new BcryptJsPassHash();
const createTokenService = new CreateTokenService(createJWTToken, bcryptjsPassHash, uuidKeyGenerate);
export const createTokenController = new CreateTokenController(createTokenService);