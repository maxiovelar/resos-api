import { buildLogger } from "./config/plugins";
import { envs } from "./config/plugins/envs.plugins";

const logger = buildLogger("app.js");
logger.log("Hello World");
logger.error("Something went wrong");

console.log(`Server listening on port ${envs.PORT}`);
