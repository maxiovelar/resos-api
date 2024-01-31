import { Router } from "express";
import { RestaurantRoutes } from "./restaurants/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/restaurants", RestaurantRoutes.routes);

    return router;
  }
}
