"use strict";
class PersonClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get FullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("Hii! i am walking");
    }
}
class StudentClass extends PersonClass {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Taking Test");
    }
}
class TeacherClass extends PersonClass {
    constructor(teacherId, sujectTaught, firstName, lastName) {
        super(firstName, lastName);
        this.teacherId = teacherId;
        this.sujectTaught = sujectTaught;
    }
    get FullName() {
        return "Professor " + super.FullName;
    }
    teach() {
        console.log("I am teaching " + this.sujectTaught);
    }
}
class PrincipalClass extends TeacherClass {
    constructor(principal_of_school, teacherId, sujectTaught, firstName, lastName) {
        super(teacherId, sujectTaught, firstName, lastName);
        this.principal_of_school = principal_of_school;
    }
    get FullName() {
        return "Mr. " + super.FullName;
    }
}
let teacher = new TeacherClass(5, "Science", "John", "Doe");
console.log(teacher.FullName);
printNames([
    new StudentClass(1, "Rahul", "Kumar"),
    new TeacherClass(12, "Mathematics", "Adam", "Wathan"),
    new PrincipalClass("St. Annes School", 54, "Biology", "Gunther", "Gallagher"),
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.FullName);
    }
}
//# sourceMappingURL=Inheritance.js.map