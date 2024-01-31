import { Router } from "express";
import { RestaurantsController } from "./controller";
import { RestaurantDatasourceImpl } from "../../infrastructure/datasource/restaurant.datasource.impl";
import { RestaurantRepositoryImpl } from "../../infrastructure/repositories/restaurant.repository.impl";

export class RestaurantRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new RestaurantDatasourceImpl();
    const restaurantRepository = new RestaurantRepositoryImpl(datasource);

    const restaurantController = new RestaurantsController(
      restaurantRepository
    );

    router.get("/", restaurantController.getRestaurants);
    router.get("/search", restaurantController.getRestaurantByText);

    return router;
  }
}
