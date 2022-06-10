let a = 100; // number
let b = "Coffee"; // string
let c = [true, false, false]; // boolean[]
let d = { age: 23 }; // {age: number (20)}
let e = [3]; // number[]
let f; // any
let g = []; // any[]

// let song: {
//   title: string;
//   releaseYear: number;
// } = { title: "My Song" };

// release year property is missing

// solution
let song: {
  title: string;
  releaseYear?: number;
} = { title: "My song" };

// ====================================

// let prices = [100, 200, 300];
// prices[0] = "$100";

// type number expected but string provided

// solution

// either declare it as a string[] or don't assign wrong type

// =====================================

// function myFunc(a: number, b: number): number {}

// expected return type is number but returning undefined (or in case of no implicit return it is returning nothing)

// a and b are unused

// solution

// return a number

// =======================================
