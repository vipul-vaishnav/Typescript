"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
level = 1;
level = "a";
level = true;
function render(doc) {
    console.log(doc);
}
function render2(doc) {
    console.log(doc.toLowerCase());
}
let nums = [1, 2, 3, 4, 5];
let numbers = [];
numbers[0] = 1;
let user = [1, "ram", true];
let mySize = "small";
console.log(mySize);
var Type;
(function (Type) {
    Type["bool"] = "boolean";
    Type["str"] = "String";
    Type["num"] = "number";
    Type["und"] = "undefined";
})(Type || (Type = {}));
let myType = Type.bool;
console.log(myType, typeof myType);
function calcTax(income) {
    let tax = 20;
    if (income < 50000) {
        return 0;
    }
    return (income * tax) / 100;
}
console.log(calcTax(50000));
let employee = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    },
};
//# sourceMappingURL=index.js.map