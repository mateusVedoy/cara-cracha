import { IDecodeTokenHelper } from "../../app/ports/helper/IDecodeToken";
import jwt from "jsonwebtoken";

export class DecodeJWTToken implements IDecodeTokenHelper {
    public decode(token: string): Object {
        return jwt.decode(token);
        
    }
}