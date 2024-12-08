"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// import faker from '@faker-js/faker';
var faker = require('@faker-js/faker').faker;
exports.default = 'Ryan';
var User = /** @class */ (function () {
    function User() {
        this.name = faker.person.firstName();
        //		console.log(this.location);
        this.location = {
            lat: parseFloat(faker.location.latitude()),
            lng: parseFloat(faker.location.longitude())
        };
    }
    ;
    return User;
}());
exports.User = User;
;
// const user = new User();
// console.log(`${user.location.lat} and ${user.location.lng}`);
