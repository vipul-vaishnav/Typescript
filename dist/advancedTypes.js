"use strict";
var _a, _b;
const s1 = {
    name: "Mark",
    age: 17,
    likes_sports: false,
    marks: {
        marks_in_physics: 75,
        marks_in_maths: 61,
        marks_in_chemistry: 88,
    },
    eligible_for_next_class() {
        const total_marks = this.marks.marks_in_chemistry +
            this.marks.marks_in_maths +
            this.marks.marks_in_physics;
        if (total_marks < 90) {
            return false;
        }
        return true;
    },
    greeting(itr) {
        let str = "";
        for (let i = 0; i < itr; i++) {
            str += "Hello " + this.name + "\n";
        }
        return str;
    },
};
const s2 = {
    name: "Frizzy",
    age: 16,
    marks: {
        marks_in_physics: 31,
        marks_in_maths: 35,
        marks_in_chemistry: 19,
    },
    eligible_for_next_class() {
        const total_marks = this.marks.marks_in_chemistry +
            this.marks.marks_in_maths +
            this.marks.marks_in_physics;
        if (total_marks < 90) {
            return false;
        }
        return true;
    },
    greeting(itr) {
        let str = "";
        for (let i = 0; i < itr; i++) {
            str += "Hello " + this.name + "\n";
        }
        return str;
    },
};
console.log(s1.eligible_for_next_class());
console.log(s2.eligible_for_next_class());
console.log(s1.greeting(5));
console.log(s2.greeting(8));
function meters_to_centimeters(meters) {
    if (typeof meters === "number") {
        return meters * 100;
    }
    else {
        return parseInt(meters) * 100;
    }
}
console.log(meters_to_centimeters(10));
console.log(meters_to_centimeters("10m"));
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet(null);
greet("Vipul");
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthDay: new Date() };
}
let customer = getCustomer(0);
let customer2 = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthDay) === null || _a === void 0 ? void 0 : _a.getFullYear());
console.log((_b = customer2 === null || customer2 === void 0 ? void 0 : customer2.birthDay) === null || _b === void 0 ? void 0 : _b.getFullYear());
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
function render3(document) {
    if (typeof document === "string")
        return document.toUpperCase();
    else {
        return "";
    }
}
function reject(messages) {
    throw new Error(messages);
}
function processEvents() {
    while (true) {
    }
}
reject("Error");
console.log("Hello world");
//# sourceMappingURL=advancedTypes.js.map