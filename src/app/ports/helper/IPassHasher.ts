export interface IPassHasher {
    hash(planTextPass: string): Promise<string>;
}