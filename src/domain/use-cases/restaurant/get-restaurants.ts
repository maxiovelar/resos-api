import { RestaurantEntity } from "../../entities/restaurant.entity";
import { RestaurantRepository } from "../../repositories/restaurant.repository";

export interface GetRestaurantsUseCase {
  execute(): Promise<RestaurantEntity[]>;
}

export class GetRestaurants implements GetRestaurantsUseCase {
  constructor(private readonly repository: RestaurantRepository) {}

  execute(): Promise<RestaurantEntity[]> {
    return this.repository.findAll();
  }
}
