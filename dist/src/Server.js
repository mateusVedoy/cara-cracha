"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const App_1 = require("./App");
const Router_1 = require("./adapter/router/Router");
dotenv_1.default.config();
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "0.0.0.0";
const app = new App_1.App();
app.server.use("/", Router_1.router);
app.server.listen(PORT, HOST, () => { console.log(`Running at ${PORT}`); });
//# sourceMappingURL=Server.js.map