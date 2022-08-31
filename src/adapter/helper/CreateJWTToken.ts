import { ICreateTokenHelper } from "../../app/ports/helper/ICreateToken";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWTSECRET || "$1$YhiQ/w2L$mmtX.mrwAEARiZOM4C/S00";
const JWTEXPIRESIN = process.env.JWTEXPRESIN || "30 minutes";

export class CreateJWTToken implements ICreateTokenHelper{
    public create(props: Object, key: string): string {

        return jwt.sign({
            props,
            key: key
        },
        SECRET,
        {
            "expiresIn": JWTEXPIRESIN
        });
    }
}