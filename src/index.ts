let sales = 123_456_789; //number

let course = "TypeScript"; //string

let is_published = true; //boolean

let level; //any it can take any type of value

level = 1; //number

level = "a"; //string

level = true; //boolean

// Avoid use of any type as much as possible

function render(doc: any) {
  console.log(doc);
}

function render2(doc: string) {
  console.log(doc.toLowerCase());
}

// render2(23);
// Argument of type 'number' is not assignable to parameter of type 'string'.

// =======arrays================
let nums = [1, 2, 3, 4, 5];

// let arr: boolean[] = [true, "a", "b", true, 23];

// arr[1] = true;

// console.log(typeof arr);

//nums[3] = "a"; //(Type string is not assignable to parameter of type 'number')

let numbers: number[] = [];

numbers[0] = 1;
// numbers[1] = "2"; this will give error

// =======tuples================ (fixed length array of particular type element)

let user: [number, string, boolean] = [1, "ram", true];

// let user2: [number, string] = [1, "Mosh", 0];

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

enum Type {
  bool = "boolean",
  str = "String",
  num = "number",
  und = "undefined",
}

let myType: Type = Type.bool;
console.log(myType, typeof myType); //boolean String

// FUNCTIONS

function calcTax(income: number): number {
  let tax: number = 20;
  if (income < 50_000) {
    return 0;
  }
  // return "String";
  return (income * tax) / 100;
}

console.log(calcTax(50000));

// OBJECTS

let employee: {
  readonly id: number; //readonly (immutable)
  name: string;
  retire: (date: Date) => void;
  age?: number; //optional
} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};
