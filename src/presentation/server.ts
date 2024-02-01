import express, { Router } from "express";
import { buildLogger } from "../config/plugins/logger.plugin";
import cors from "cors";

interface Options {
  port: number;
  routes: Router;
}

const logger = buildLogger("server.ts");
export class Server {
  private app = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, routes } = options;
    this.port = port;
    this.routes = routes;
  }

  async start() {
    this.app.use(cors())
    this.app.use(this.routes);

    this.app.listen(this.port, () => {
      logger.log(`Server listening on port ${this.port}`);
      console.log(`Go to http://localhost:${this.port}`);
    });
  }
}
