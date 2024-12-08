// working on Interfaces. 

interface Reportable {
	summary(): string;
}
const oldCivic = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return `name: ${this.name}`;
	}
};

// 

const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
	summary(): string {
		return `This drink has ${this.sugar} grams of sugar.`;
	}
};

const printSummary = (item: Reportable): void => {
	console.log(`summary: ${item.summary()}`)
};

printSummary(drink); 

