import { buildLogger, envs } from "../../config/plugins";
import { MongoDatabase, RestaurantModel } from "../mongodb";
import { restaurants } from "./data";

(async () => {
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  await main();

  await MongoDatabase.disconnect();
})();

async function main() {
  await RestaurantModel.deleteMany();

  const logger = buildLogger("app.ts");

  await RestaurantModel.insertMany(restaurants);

  logger.log("Documents created!");
}
