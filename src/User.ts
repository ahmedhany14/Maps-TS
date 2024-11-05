import { faker } from "@faker-js/faker";
import { Mappable } from "./mapplableInterface";
export class User implements Mappable {
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

  public markerContent() {
    return `
        <div>
            <h1>User Name: ${this.name}</h1>
        </div>
    `;
  }
}
