import mongoose from "mongoose";
import { buildLogger } from "../../config/plugins";

interface ConnectionOptions {
  mongoUrl: string;
  dbName: string;
}

const logger = buildLogger("MongoDatabase");

export class MongoDatabase {
  static async connect(options: ConnectionOptions) {
    const { mongoUrl, dbName } = options;

    try {
      await mongoose.connect(mongoUrl, { dbName });
      logger.log("Mongo connected!");
    } catch (error) {
      logger.error("Mongo connection error");
      throw error;
    }
  }

  static async disconnect() {
    await mongoose.disconnect();
    logger.log("Mongo disconnected!");
  }
}
