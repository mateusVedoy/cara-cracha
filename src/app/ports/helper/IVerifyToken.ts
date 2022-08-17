import { NextFunction } from "express";

export interface IVerifyTOkenHelper {
    verify(token: string, next: NextFunction): void;
}