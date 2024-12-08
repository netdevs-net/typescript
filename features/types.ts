const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

interface Car {}

// when to use annotations
// 1) function that returns the 'any' type
const json = '{"x": 10; "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
// when calling json.parse, you get back the 'any' type
// any is not preferred

// 2) When we declare a variable in one line and initialize it
let words = ["red", "green", "blue"];
let foundWord: boolean;
// when the declaration and annotation are on the same line

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) when we want the variable to have a type

let numbers = [0, -12, -24, 3];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

const multi = (a: number, b: number): number => {
  return a * b;
};

const divide = (a: number, b: number): number => {
  return a / b;
};

const logger = (message: string): void => {
	console.log(message);
}

const throwError = (message: string): void => {
	if (!message) {
		throw new Error(message);
	}
}

const profile = {
	name: 'Alex',
	age: 20,
	coords: {
		lat: 0,
		long: 20
	},
	setAge(age: number): void {
		this.age = age;
	}
};

const { age }: { age: number } = profile;
const { 
	coords: {lat, long }
}: { coords: { lat: number, long: number }} = profile;

// ------------------------------------

const forecast = {
	date: new Date(),
	weather: 'sunny'
};
// first the de-structuring, then the annotation
const logWeather = ({date, weather}}: { date: Date; weather: string }): void => {
	console.log(forecast.date);
	console.log(forecast.weather);
};



// ES2015
// const logWeather = ({date, weather}):
// logWeather(todaysWeather);

// ------------------------------------

const carMakers = ["ford", "toyota", "audi"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();


// carMakers.push(100);

// help with map
carMakers.map(
	(car:string): string => {
		return car.toUpperCase();
	}
);

// flexible types
// const importantDates = [new Date(), '2030-10-10'];	
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030-10-10");
importantDates.push("100");

// ---------------------------------------


// tuples arrrrrr

type Drink = [string, boolean, number];
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", true, 0];

const carSpecs: [number, number] = [400,3354];
// 

// objects are easier to read
const carStats ={
	horsepower: 400,
	weight: 3354
};




