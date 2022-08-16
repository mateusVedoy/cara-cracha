export interface ICreateTokenHelper {
    create(id: string, pass: string, login: string): string;
}