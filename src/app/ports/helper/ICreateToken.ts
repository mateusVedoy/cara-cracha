export interface ICreateTokenHelper {
    create(pass: string, login: string, key: string): string;
}