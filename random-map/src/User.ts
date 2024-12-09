// import faker from '@faker-js/faker';
const { faker } = require('@faker-js/faker');

export default 'Ryan';

export class User{
	name: string;
	location: {
		lat: number;
		lng: number;
	};
	
	constructor() {
		this.name = faker.person.firstName();
//		console.log(this.location);
		this.location = {
			lat: parseFloat(faker.location.latitude()),
			lng: parseFloat(faker.location.longitude())
		};
	};
	
	markerContent(): string {
		return `User Name: ${this.name}`;
	}
	
};
// const user = new User();
// console.log(`${user.location.lat} and ${user.location.lng}`);

