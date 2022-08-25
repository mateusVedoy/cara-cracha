import { IKeyGenerate } from "../../app/ports/helper/IKeyGenerate";
import { v4 } from "uuid";

export class UUIDKeyGenerate implements IKeyGenerate {
    generateKey(): string {
        return v4();
    }
}