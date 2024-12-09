const { faker } = require('@faker-js/faker');

export default 'NetDevs';

export class Company {
	companyName: string;
	catchPhrase: string;
	location: {
		lat: number;
		lng: number;
	};
	color: string = 'blue';
	
	constructor() {
		this.companyName = faker.company.name();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.location.latitude()),
			lng: parseFloat(faker.location.longitude())
		}
	};
	markerContent(): string {
		return `
		<div>
		<h1>Company Name: ${this.companyName}</h1>
		<h3>Catchphrase: ${this.catchPhrase}</h3>
		</div>
		`;
	} 
};
// const company = new Company();
// console.log(`${company.catchPhrase} - ${company.companyName}`);
