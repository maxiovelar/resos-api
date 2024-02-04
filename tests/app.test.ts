import { envs } from "../src/config/plugins";
import { Server } from "../src/presentation/server";
import { MongoDatabase } from "../src/data/mongo";
import "../src/app";

jest.mock("../src/presentation/server");
jest.mock("../src/data/mongo");

describe("app.ts", () => {
  test("should call server with arguments and start", async () => {
    const mockMongoConnect = jest
      .spyOn(MongoDatabase, "connect")
      .mockResolvedValueOnce();

    await import("../src/app");

    expect(mockMongoConnect).toHaveBeenCalledWith({
      mongoUrl: envs.MONGO_URL,
      dbName: envs.MONGO_DB_NAME,
    });
    expect(Server).toHaveBeenCalledTimes(1);
    expect(Server).toHaveBeenCalledWith({
      port: envs.PORT,
      routes: expect.any(Function),
    });
    expect(Server.prototype.start).toHaveBeenCalledWith();
  });
});
