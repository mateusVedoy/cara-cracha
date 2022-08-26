"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const Router_1 = require("./adapter/router/Router");
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "0.0.0.0";
const app = new App_1.App();
app.server.use("/", Router_1.router);
app.server.listen(PORT, HOST, () => { console.log(`Running at ${PORT}`); });
//# sourceMappingURL=Server.js.map