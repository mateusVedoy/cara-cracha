import { Token } from "../../../domain/Token";

export interface ICreateTokenService {
    create(id: string, pass: string, login: string): Token;
}