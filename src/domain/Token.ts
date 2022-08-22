export class Token {

    private hash: string;
    private createdAt: string;
    private expiresIn: string;
    private lifetime: string;

    public constructor(hash: string, lifetime: string) {
        this.hash = hash;
        this.createdAt = this.dateFormat();
        this.expiresIn = this.dateFormat(this.expiresInCalculate(lifetime))
        this.lifetime = lifetime;
    }

    public getHash(): string {
        return this.hash;
    }

    public getExpiresIn(): string {
        return this.expiresIn;
    }

    public getCreatedAt(): string {
        return this.createdAt;
    }

    public getLifetime(): string {
        return this.lifetime;
    }

    private dateFormat(optDate:Date = new Date()): string {
        const date = optDate;
        const day = date.getDate().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const year = date.getFullYear()
        const hour = date.getHours().toString().padStart(2, '0');
        const min = date.getMinutes().toString().padStart(2, '0');
        const formatted = `${year}-${month}-${day}T${hour}:${min}`;
        return formatted;
    }

    //o lifetime precisará ser em milisegundos
    private expiresInCalculate(lifetime:string): Date {
        const actualDt = new Date();
        const endDateTime = new Date(actualDt.getTime() + parseInt(lifetime));
        return new Date(endDateTime);
    }
}

console.log(new Token('123','600000'))