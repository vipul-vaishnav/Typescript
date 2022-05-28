let sales = 123_456_789; //number

let course = "TypeScript"; //string

let is_published = true; //boolean

let level; //any it can take any type of value

level = 1; //number

level = "a"; //string

// Avoid use of any type as much as possible

function render(doc: any) {
  console.log(doc);
}

// =======arrays================

let numbers: number[] = [];

numbers[0] = 1;
// numbers[1] = "2"; this will give error

// =======tuples================ (fixed length array of particular type element)

let user: [number, string, boolean] = [1, "ram", true];

// let user: [number, string] = [1, "Mosh", 0];

// source has three values but it only allows 2

// ========enums==================

// const sm = 1;
// const md = 2;
// const lg = 3;

// ====>

// Pascal Case Convention
const enum Size {
  sm = "small",
  md = "medium",
  lg = "large",
}

let mySize: Size = Size.sm;
console.log(mySize);
