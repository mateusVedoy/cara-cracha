export interface ICreateToken {
    create(id: string, pass: string, login: string): string;
}