import { User } from './User';
import { Company } from './Company';


export class Maps {
    private CustomMap: google.maps.Map;

    constructor(divId: string) {
        const mapElement = document.getElementById(divId);
        if (mapElement) {
            this.CustomMap = new google.maps.Map(mapElement, {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0,
                },
            });
        }
    }

    public addUserMarker(user: User): void {
        new google.maps.Marker({
            map: this.CustomMap,
            position: {
                lat: user.location.lat,
                lng: user.location.lng,
            },
        });
    }

    public addCompanyMarker(company:Company ): void {
        new google.maps.Marker({
            map: this.CustomMap,
            position: {
                lat: company.location.lat,
                lng: company.location.lng,
            },
        });
    }


}
