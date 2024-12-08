var oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "name: ".concat(this.name);
    }
};
var printVehicle = function (vehicle) {
    console.log("name: ".concat(vehicle.name));
    console.log("year: ".concat(vehicle.year));
    console.log("broken: ".concat(vehicle.broken));
};
printVehicle(oldCivic);
