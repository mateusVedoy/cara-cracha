import { IVerifyTOkenHelper } from "app/ports/helper/IVerifyToken";
import { NextFunction } from "express";
import jwt from "jsonwebtoken";

export class VerifyJWTToken implements IVerifyTOkenHelper {

    private SECRET = process.env.JWTSECRET || "$1$YhiQ/w2L$mmtX.mrwAEARiZOM4C/S00";

    public verify(token: string, next: NextFunction): void {
        jwt.verify(token, this.SECRET, (err) => {
            if (err) return  err.message;
            else next();
        })
    }
}
