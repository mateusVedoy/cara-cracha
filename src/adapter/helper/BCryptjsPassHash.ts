import { IPassHasher } from "../../app/ports/helper/IPassHasher";
import bcryptjs from "bcryptjs"

export class BcryptJsPassHash implements IPassHasher {
    public async hash(planTextPass: string): Promise<string> {
        const salt = await bcryptjs.genSalt(10);
        return bcryptjs.hash(planTextPass, salt);
    }
}