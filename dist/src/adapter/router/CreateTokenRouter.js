"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTokenRouter = void 0;
const express_1 = require("express");
const CreateToken_1 = require("../../main/CreateToken");
exports.createTokenRouter = (0, express_1.Router)();
exports.createTokenRouter.post("/", (req, res) => CreateToken_1.createTokenController.handle(req, res));
//# sourceMappingURL=CreateTokenRouter.js.map