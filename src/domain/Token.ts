export class Token {

    private hash: string;
    private expiresIn: string;

    public constructor(hash: string, expiresIn: string){
        this.hash = hash;
        this.expiresIn = expiresIn;
    }

    public getHash(): string {
        return this.hash;
    }

    public getExpiresIn(): string {
        return this.expiresIn;
    }
}