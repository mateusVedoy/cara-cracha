"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateToken_1 = require("../../main/CreateToken");
exports.createTokenRouter = express_1.Router();
exports.createTokenRouter.post("/", (req, res) => CreateToken_1.createTokenController.handle(req, res));
//# sourceMappingURL=CreateTokenRouter.js.map