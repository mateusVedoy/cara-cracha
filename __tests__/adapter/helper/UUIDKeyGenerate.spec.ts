//jest.mock("uuid");
import { UUIDKeyGenerate } from "../../../src/adapter/helper/UUIDKeyGenerate";

const uuidKeyGenerate = new UUIDKeyGenerate();

describe("UUID Key Generate Helper", () => {

    let uuidKey: string;

    beforeEach(() => {
        uuidKey = uuidKeyGenerate.generateKey();
    });

    it("should return a uuid string", () => {
        expect(uuidKey).toMatch(/[0-9a-z]{8}[-][0-9a-z]{4}[-][0-9a-z]{4}[-][0-9a-z]{4}[-][0-9a-z]{12}/);
    });

    afterAll(() => {
        jest.unmock("uuid");
    });
})

