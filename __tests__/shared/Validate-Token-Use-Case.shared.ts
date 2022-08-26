import { ValidateTokenService } from "../../src/app/use-cases/ValidateTokenService";
import { DecodeJWTToken } from "../../src/adapter/helper/DecodeJWTToken";
import { BcryptJsHashCompare } from "../../src/adapter/helper/BcryptJsHashCompare";

const DecodeJWTTokenMock = DecodeJWTToken as jest.Mock<DecodeJWTToken>;
const BcryptJsHashCompareMock = BcryptJsHashCompare as jest.Mock<BcryptJsHashCompare>;

const DecodeJWTTokenMocked = new DecodeJWTTokenMock() as jest.Mocked<DecodeJWTToken>;
const BcryptJsHashCompareMocked = new BcryptJsHashCompareMock() as jest.Mocked<BcryptJsHashCompare>;

export const spyDecodeJWTToken = jest.spyOn(DecodeJWTTokenMocked, 'decode');
export const spyBcryptJsHashCompare = jest.spyOn(BcryptJsHashCompareMocked, 'compare');

export const validateTokenService = new ValidateTokenService(DecodeJWTTokenMocked, BcryptJsHashCompareMocked);
