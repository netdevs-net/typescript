"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var faker = require('@faker-js/faker').faker;
exports.default = 'NetDevs';
var Company = /** @class */ (function () {
    function Company() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.location.latitude()),
            lng: parseFloat(faker.location.longitude())
        };
    }
    ;
    return Company;
}());
exports.Company = Company;
;
// const company = new Company();
// console.log(`${company.catchPhrase} - ${company.companyName}`);
