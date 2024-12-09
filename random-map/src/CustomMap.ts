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
  
  addUserMarker(user: User): void {
	  new google.maps.Marker({
		  map: this.googleMap,
		  position: {
			  lat: user.location.lat,
			  lng: user.location.lng
		  }
	  });
  }
  
  // addCompanyMarker(company: Company): void {
	//   new google.maps.Marker({
	// 	  map: this.googleMap,
	// 	  position: {
	// 		  lat: company.location.lat,
	// 		  lng: company.location.lng
	// 	  }
	//   })
  // }
}