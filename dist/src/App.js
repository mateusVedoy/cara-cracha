"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        this.server = (0, express_1.default)();
        this.server.use(express_1.default.json());
    }
    route(route) {
        this.server.use(route);
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map