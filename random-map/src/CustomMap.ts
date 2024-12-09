import { User } from './User';
import { Company } from './Company';

interface Mappable {
	location: {
		lat: number;
		lng: number;
	}
	markerContent(): string;
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
	
	
	addMarker(mappable: Mappable, type: Type): void {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng
			}
		})
		const infoWindow = new google.maps.InfoWindow({
			content: mappable.markerContent()
		});

		marker.addListener('click', () => {			
			infoWindow.open(this.googleMap, marker);
		})
		
	}
}