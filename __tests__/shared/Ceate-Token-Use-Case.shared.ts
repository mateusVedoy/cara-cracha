import { CreateTokenService } from "../../src/app/use-cases/CreateTokenService";
import { CreateJWTToken } from "../../src/adapter/helper/CreateJWTToken";
import { BcryptJsPassHash } from "../../src/adapter/helper/BCryptjsPassHash";
import { UUIDKeyGenerate } from "../../src/adapter/helper/UUIDKeyGenerate";

//cria as classes mockados com as tipagens jest
const CreateJWTTokenMock = CreateJWTToken as jest.Mock<CreateJWTToken>;
const BCryptjsPassHashMock = BcryptJsPassHash as jest.Mock<BcryptJsPassHash>;
const UUIDKeyGenerateMock = UUIDKeyGenerate as jest.Mock<UUIDKeyGenerate>;

//cria objeto com a classe mockada
const createJWTTokenMocked = new CreateJWTTokenMock() as jest.Mocked<CreateJWTToken>;
const BCryptjsPassHashMocked = new BCryptjsPassHashMock() as jest.Mocked<BcryptJsPassHash>;
const UUIDKeyGenerateMocked = new UUIDKeyGenerateMock() as jest.Mocked<UUIDKeyGenerate>;

//cria spy do metodo da classe helper
export const spyHelper = jest.spyOn(createJWTTokenMocked, 'create');
export const spyPassHash = jest.spyOn(BCryptjsPassHashMocked, 'hash');



//instancia o use case testado
export const createTokenService = new CreateTokenService(createJWTTokenMocked, BCryptjsPassHashMocked, UUIDKeyGenerateMocked);