import { Request, Response, NextFunction } from "express"

export interface IMiddleware {
    intercept(req: Request, res:Response, next: NextFunction): void;
}