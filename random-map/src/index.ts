/// <reference types="@types/google.maps" />

// importing Classes
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';


// building the map 
(window as any).initMap = () => {
	const user = new User();
	const company = new Company();
	const customMap = new CustomMap('map');
	customMap.addMarker(user);
	customMap.addMarker(company);
};