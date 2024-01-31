import { RestaurantDTO } from "../../dtos/restaurant.dto";
import { RestaurantRepository } from "../../repositories/restaurant.repository";

export interface GetRestaurantsUseCase {
  execute(): Promise<RestaurantDTO[]>;
}

export class GetRestaurants implements GetRestaurantsUseCase {
  constructor(private readonly repository: RestaurantRepository) {}

  async execute(): Promise<RestaurantDTO[]> {
    const entities = await this.repository.findAll();
    return entities.map((entity) => RestaurantDTO.fromEntity(entity));
  }
}
