import { faker } from "@faker-js/faker";
import { Mappable } from "./mapplableInterface";

export class Company implements Mappable {
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

    public markerContent() {
        return `
        <div>
            <h1>Company Name: ${this.companyName}</h1>
            <h3>Catchphrase: ${this.catchPhrase}</h3>
        </div>
    `;
    }
}
