import { User } from "../../../domain/User";

export interface ICreateUser {
    create(login: string, pass: string): User;
}