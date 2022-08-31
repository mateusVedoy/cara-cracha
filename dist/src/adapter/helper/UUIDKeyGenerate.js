"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUIDKeyGenerate = void 0;
const uuid_1 = require("uuid");
class UUIDKeyGenerate {
    generateKey() {
        return (0, uuid_1.v4)();
    }
}
exports.UUIDKeyGenerate = UUIDKeyGenerate;
//# sourceMappingURL=UUIDKeyGenerate.js.map