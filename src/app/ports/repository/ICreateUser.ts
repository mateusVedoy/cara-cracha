import { User } from "domain/User";

export interface ICreateUserRepository {
    create(user: User): Promise<string>;
}