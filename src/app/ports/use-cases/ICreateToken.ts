import { Token } from "../../../domain/Token";

export interface ICreateTokenService {
    create(props: Object): Promise<Token>;
}