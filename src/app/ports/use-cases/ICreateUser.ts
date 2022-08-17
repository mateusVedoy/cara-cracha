import { User } from "../../../domain/User";

export interface ICreateUserService {
    create(login: string, pass: string): User;
}