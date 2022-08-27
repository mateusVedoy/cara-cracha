"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateTokenRouter_1 = require("./CreateTokenRouter");
const ValidateTokenRouter_1 = require("./ValidateTokenRouter");
exports.router = express_1.Router();
exports.router.use("/token/create", CreateTokenRouter_1.createTokenRouter);
exports.router.use("/token/validate", ValidateTokenRouter_1.validateTokenRouter);
//# sourceMappingURL=Router.js.map