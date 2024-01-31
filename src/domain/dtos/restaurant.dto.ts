import { RestaurantEntity } from "../entities/restaurant.entity";

export class RestaurantDTO {
  constructor(
    public id: string,
    public name: string,
    public address: string,
    public tags: string[],
    public hours: {
      open: string;
      close: string;
    }
  ) {}

  public static fromEntity(entity: RestaurantEntity): RestaurantDTO {
    return new RestaurantDTO(
      entity._id,
      entity.name,
      entity.address,
      entity.tags,
      entity.hours
    );
  }
}
