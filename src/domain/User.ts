export class User {

    private login: string;
    private pass: string;

    public constructor(login: string, pass: string) {
        this.login = login;
        this.pass = pass;
    }

    public getLogin(): string {
        return this.login;
    }

    public getPass(): string {
        return this.pass;
    }
}