import { RestaurantDTO } from "../../dtos/restaurant.dto";
import { RestaurantRepository } from "../../repositories/restaurant.repository";

export interface GetRestaurantsByTextUseCase {
  execute(text: string): Promise<RestaurantDTO[]>;
}

export class GetRestaurantsByText implements GetRestaurantsByTextUseCase {
  constructor(private readonly repository: RestaurantRepository) {}

  async execute(text: string): Promise<RestaurantDTO[]> {
    const entities = await this.repository.findByText(text);
    return entities.map((entity) => RestaurantDTO.fromEntity(entity));
  }
}
