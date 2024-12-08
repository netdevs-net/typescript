class Vehicle {
// 	color: string;
	model: string;
	weight: number;
	
	constructor(public color: string) {}
	
	protected honk(): void {
		console.log(`beeeep`);
	}
}
class Car extends Vehicle {
	
	constructor(public wheels: number, color: string) {
		super(color);
	}
	
	private drive(): void {
		console.log(`vroom`)
	}
	startDrivingProcess(): void {
		this.drive();
		this.honk();
	}
}

const car = new Car(22, 'orange');
console.log(car.color);
// const car = new Car();
// car.startDrivingProcess();

