export class RestaurantEntity {
  constructor(
    public _id: string,
    public name: string,
    public image: string,
    public address: string,
    public tags: string[],
    public hours: {
      open: string;
      close: string;
    },
    public createdAt: Date
  ) {}

  public static fromObject(object: { [key: string]: any }): RestaurantEntity {
    const { id, name, image, address, tags, hours, createdAt } = object;
    if (!id) throw new Error("Id is required");
    if (!name) throw new Error("Name is required");
    if (!image) throw new Error("Image is required");
    if (!address) throw new Error("Address is required");
    if (!tags) throw new Error("Tags are required");
    if (!hours) throw new Error("Hours are required");
    if (!createdAt) throw new Error("CreatedAt is required");

    return new RestaurantEntity(
      id,
      name,
      image,
      address,
      tags,
      hours,
      createdAt
    );
  }
}
