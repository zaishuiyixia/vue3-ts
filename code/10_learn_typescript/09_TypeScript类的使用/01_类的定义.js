"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.eating = function () {
        console.log(this.name + " eating");
    };
    return Person;
}());
var p = new Person("why", 18);
console.log(p.name);
console.log(p.age);
p.eating();
