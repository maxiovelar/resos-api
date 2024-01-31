import { RestaurantEntity } from "../entities/restaurant.entity";

export abstract class RestaurantRepository {
  abstract findAll(): Promise<RestaurantEntity[]>;
  abstract findByText(text: string): Promise<RestaurantEntity[]>;
}
