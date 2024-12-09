import { User } from './User';
import { Company } from './Company';

interface Mappable {
	location: {
		lat: number;
		lng: number;
	}
}

export class CustomMap {
	public googleMap: google.maps.Map;

	constructor(divId: string) {
	// Initialize the map inside the constructor
		this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
			zoom: 1,
			center: {
			lat: 33.758666,  // Rancho Palos Verdes 
			lng: -118.3598455,
			},
		});
	}
	
	addMarker(mappable: Mappable): void {
		new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng
			}
		})
	}
}