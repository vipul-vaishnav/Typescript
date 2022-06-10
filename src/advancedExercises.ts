// Advanced Types Exercises

// 1.

type User = {
  name: string;
  age: number;
  occupation?: string;
};

let users: User[] = [
  { name: "John Smith", age: 30, occupation: "Software Engineer" },
  { name: "Kate Muller", age: 28 },
];

// 2.

type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

type Pet = Bird | Fish;

const myPet: Pet = {
  fly: () => {},
};

const myPet2: Pet = {
  swim: () => {},
};

// 3.

type days_of_week = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

let day: days_of_week = "Sun";
// day = "Mar";
day = "Mon";

// 4.

// let user = getUser();
// console.log(user && user.address ? user.address.street : undefined);

// let user = getUser();
// console.log(user?.address?.street);

// let x = foo !== null && foo !== undefined ? foo : bar();

// let x = foo ?? bar();

// 5.

//wrong code
// let value: unknown = "a";

// console.log(value.toUpperCase());

// right code
let value: unknown = "a";
if (typeof value === "string") console.log(value.toUpperCase());
