import { ICreateUserService } from "../../app/ports/use-cases/ICreateUser";
import { User } from "domain/User";

export class CreateUserService implements ICreateUserService {
    create(login: string, pass: string): User {
        throw new Error("Method not implemented.");
    }
}