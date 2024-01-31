import {
  RestaurantDatasource,
  RestaurantEntity,
  RestaurantRepository,
} from "../../domain";

export class RestaurantRepositoryImpl implements RestaurantRepository {
  constructor(private readonly datasource: RestaurantDatasource) {}

  findAll(): Promise<RestaurantEntity[]> {
    return this.datasource.findAll();
  }
  findByText(text: string): Promise<RestaurantEntity[]> {
    return this.datasource.findByText(text);
  }
}
