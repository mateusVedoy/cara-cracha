import { EmptyPropsValidate } from "../../../src/adapter/helper/EmptyPropsValidate";

const emptyPropsValidate = new EmptyPropsValidate();

describe("Validate empty Properties Helper", () => {

    it("should return true when all props has been informed", () => {
        expect(emptyPropsValidate.isEmpty('mateus', '12356')).toBeTruthy();
    });
    it("should return false when one or all props has not been informed", () => {
        expect(emptyPropsValidate.isEmpty('','','')).toBeFalsy();
        expect(emptyPropsValidate.isEmpty('mateus', '')).toBeFalsy();
    });
});