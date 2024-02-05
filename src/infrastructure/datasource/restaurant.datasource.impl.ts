import { RestaurantModel } from "../../data/mongodb";
import { RestaurantDatasource, RestaurantEntity } from "../../domain";

export class RestaurantDatasourceImpl implements RestaurantDatasource {
  async findAll(): Promise<RestaurantEntity[]> {
    const restaurants = await RestaurantModel.find({});
    return restaurants.map((restaurant) =>
      RestaurantEntity.fromObject(restaurant)
    );
  }
  async findByText(text: string): Promise<RestaurantEntity[]> {
    const restaurants = await RestaurantModel.find({
      $or: [
        { name: { $regex: text, $options: "i" } },
        {
          tags: { $regex: text, $options: "i" },
        },
      ],
    });

    return restaurants.map((restaurant) =>
      RestaurantEntity.fromObject(restaurant)
    );
  }
}
