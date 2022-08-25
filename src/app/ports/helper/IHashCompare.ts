export interface IHashCompare {
    compare(pass: string, hashedPass: string): Promise<Boolean>;
}