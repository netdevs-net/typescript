const { faker } = require('@faker-js/faker');

export default 'NetDevs';

export class Company {
	companyName: string;
	catchPhrase: string;
	location: {
		lat: number;
		lng: number;
	};
	
	constructor() {
		this.companyName = faker.company.name();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.location.latitude()),
			lng: parseFloat(faker.location.longitude())
		}
	};
};
// const company = new Company();
// console.log(`${company.catchPhrase} - ${company.companyName}`);
