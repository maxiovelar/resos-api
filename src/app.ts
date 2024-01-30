import { buildLogger, envs } from "./config/plugins";
import { MongoDatabase } from "./data/mongo";
import { Server } from "./server";

(async () => {
  main();
})();

async function main() {
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  Server.start();
}

//TODO: Implement logger wherever is needed
const logger = buildLogger("app.js");
logger.log("Hello World");
logger.error("Something went wrong");

console.log(`Server listening on port ${envs.PORT}`);
