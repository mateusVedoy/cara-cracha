import { IHashCompare } from "../../app/ports/helper/IHashCompare";
import bcryptjs from "bcryptjs"

export class BcryptJsHashCompare implements IHashCompare {
    public async compare(pass: string, hashedPass: string): Promise<Boolean> {
        return await bcryptjs.compare(pass, hashedPass);
    }
}