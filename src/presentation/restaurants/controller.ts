import { Request, Response } from "express";
import { buildLogger } from "../../config/plugins";
import {
  GetRestaurants,
  GetRestaurantsByText,
  RestaurantRepository,
} from "../../domain";

const logger = buildLogger("RestaurantsController");

export class RestaurantsController {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  public getRestaurants = (req: Request, res: Response) => {
    new GetRestaurants(this.restaurantRepository)
      .execute()
      .then((restaurants) => {
        logger.log("Restaurants fetched");
        res.status(200).json(restaurants);
      })
      .catch((error) => {
        logger.error("Error fetching restaurants");
        res.status(500).json({ error });
      });
  };

  public getRestaurantByText = (req: Request, res: Response) => {
    const { text } = req.query;
    if (!text) {
      return res.status(400).json({ error: "Search text not provided." });
    }

    new GetRestaurantsByText(this.restaurantRepository)
      .execute(text as string)
      .then((restaurants) => {
        logger.log("Restaurants fetched");
        res.status(200).json(restaurants);
      })
      .catch((error) => {
        logger.error("Error fetching restaurants");
        res.status(500).json({ error });
      });
  };
}
