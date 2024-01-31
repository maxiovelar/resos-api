import { RestaurantEntity } from "../../entities/restaurant.entity";
import { RestaurantRepository } from "../../repositories/restaurant.repository";

export interface GetRestaurantsByTextUseCase {
  execute(text: string): Promise<RestaurantEntity[]>;
}

export class GetRestaurantsByText implements GetRestaurantsByTextUseCase {
  constructor(private readonly repository: RestaurantRepository) {}

  execute(text: string): Promise<RestaurantEntity[]> {
    return this.repository.findByText(text);
  }
}
