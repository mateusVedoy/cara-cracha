"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ValidateToken_1 = require("../../main/ValidateToken");
exports.validateTokenRouter = express_1.Router();
exports.validateTokenRouter.post("/", ValidateToken_1.intercepMiddleware.intercept, (req, res) => ValidateToken_1.validateTokenController.handle(req, res));
//# sourceMappingURL=ValidateTokenRouter.js.map