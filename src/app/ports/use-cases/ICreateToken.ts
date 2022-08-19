import { Token } from "../../../domain/Token";

export interface ICreateTokenService {
    create(pass: string, login: string): Token;
}