import { faker } from "@faker-js/faker";

export class User {
  public name: string;

  public location: {
    lat: number;
    lng: number;
  };

  public constructor() {
    this.name = faker.person.firstName() + " " + faker.person.lastName();

    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}
