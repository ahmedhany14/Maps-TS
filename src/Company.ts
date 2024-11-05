import { faker } from "@faker-js/faker";

export class Company {
  public companyName: string;
  public catchPhrase: string;
  public location: {
    lat: number;
    lng: number;
  };

  public constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}
