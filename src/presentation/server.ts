import express, { Router } from "express";
import { buildLogger } from "../config/plugins/logger.plugin";
import cors from "cors";

interface Options {
  port: number;
  routes: Router;
  public_path?: string;
}

const logger = buildLogger("server.ts");
export class Server {
  private app = express();
  private serverListener?: any;
  private readonly port: number;
  private readonly routes: Router;
  private readonly publicPath: string;

  constructor(options: Options) {
    const { port, routes, public_path = "public" } = options;
    this.port = port;
    this.routes = routes;
    this.publicPath = public_path;
  }

  async start() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static(this.publicPath));
    this.app.use(this.routes);

    this.serverListener = this.app.listen(this.port, () => {
      logger.log(`Server listening on port ${this.port}`);
      console.log(`Go to http://localhost:${this.port}`);
    });
  }

  public close() {
    this.serverListener?.close();
  }
}
