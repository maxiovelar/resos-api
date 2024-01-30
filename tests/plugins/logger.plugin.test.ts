import {
  buildLogger,
  logger as winstonLogger,
} from "../../src/config/plugins/logger.plugin";

describe("logger.plugin.ts", () => {
  test("buildLogger should return a function logger", () => {
    const service = "app.js";
    const logger = buildLogger(service);

    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  test("logger.log should log a message", () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, "log");
    const message = "test message";
    const service = "test service";

    const logger = buildLogger(service);
    logger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalled();
    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "info",
      expect.objectContaining({
        // expect.objectContaining() is useful when we are waiting for an object and we only care to test some elements of it
        level: "info",
        message,
        service,
      })
    );
  });

  test("logger.error should log a message", () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, "error");
    const message = "test message";
    const service = "test service";

    const logger = buildLogger(service);
    logger.error(message);

    expect(winstonLoggerMock).toHaveBeenCalled();
    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "error",
      expect.objectContaining({
        // expect.objectContaining() is useful when we are waiting for an object and we only care to test some elements of it
        message,
        service,
      })
    );
  });
});
