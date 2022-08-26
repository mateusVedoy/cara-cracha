import dotenv from "dotenv";
import { App } from "./App";
import { router } from "./adapter/router/Router";

dotenv.config();

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "0.0.0.0";

const app = new App();

app.server.use("/", router);

app.server.listen(PORT, HOST, () => { console.log(`Running at ${PORT}`) });
