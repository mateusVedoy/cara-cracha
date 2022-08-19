import { Request, Response, NextFunction } from "express";
import { IMiddleware } from "../../app/ports/middleware/IMiddleware";
import jwt from "jsonwebtoken";
const SECRET = process.env.JWTSECRET || "$1$YhiQ/w2L$mmtX.mrwAEARiZOM4C/S00"

export class Intercept implements IMiddleware {

    public intercept(req: Request, res: Response, next: NextFunction): void {
        const { token } = req.body;
        jwt.verify(token, SECRET, (err) => {
            if (err) return res.status(401).send({ "Message:": err.message });
            else next();
        });
    }

}