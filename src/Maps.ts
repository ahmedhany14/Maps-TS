import { User } from './User';
import { Company } from './Company';
import { Mappable } from './mapplableInterface';


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

    /*
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
    }*/

    /*
    those 2 methods are the same, now we have a duplication of code, and this is not good, we can refactor this code to make it more reusable
    */

    public addMarker(mapplable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.CustomMap,
            position: {
                lat: mapplable.location.lat,
                lng: mapplable.location.lng,
            },
        });

        this.addInfoWindow(mapplable, marker);
    }


    public addInfoWindow(mapplable: Mappable, marker: google.maps.Marker): void {
        marker.addListener('click', () => {
            const context = mapplable.markerContent();
            const infoWindow = new google.maps.InfoWindow({
                content: context
            });
            infoWindow.open(this.CustomMap, marker);
        })
    }
}
