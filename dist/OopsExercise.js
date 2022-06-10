"use strict";
class Logger {
    constructor(name) {
        this.name = name;
    }
    write(message) {
        console.log("writing", message, "in the " + this.name);
    }
}
let logger = new Logger("data.json");
logger.write("New Data");
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
let person = new Person("John", "Smith");
console.log(person.fullName);
class Employee extends Person {
    constructor(salary, firstName, lastName) {
        super(firstName, lastName);
        this.salary = salary;
    }
}
let employeeX = {
    name: "John Smith",
    salary: 50000,
    address: {
        street: "Flinders st",
        city: "Melbourne",
        zipCode: 3144,
    },
};
//# sourceMappingURL=OopsExercise.js.map