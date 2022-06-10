// 1.

class Logger {
  constructor(public name: string) {}

  write(message: string): void {
    console.log("writing", message, "in the " + this.name);
  }
}

let logger = new Logger("data.json");

logger.write("New Data");

// 2.

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

let person = new Person("John", "Smith");

console.log(person.fullName);

// 3.

class Employee extends Person {
  constructor(public salary: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}

// 4.

// The class member declared as Protected are inaccessible outside the class but they can be accessed by any subclass(derived class) of that class. Private member are not inherited in class.

// 5.

let employeeX: EmployeeX = {
  name: "John Smith",
  salary: 50_000,
  address: {
    street: "Flinders st",
    city: "Melbourne",
    zipCode: 3144,
  },
};

interface Address {
  street: string;
  city: string;
  zipCode: number;
}

interface EmployeeX {
  name: string;
  salary: number;
  address: Address;
}
