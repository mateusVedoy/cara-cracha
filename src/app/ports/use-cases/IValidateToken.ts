export interface IValidateToken {
    validate(token: string, key: string): Promise<Boolean>;
}