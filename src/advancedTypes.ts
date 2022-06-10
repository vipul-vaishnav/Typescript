// Type alias
type Marks = {
  marks_in_physics: number;
  marks_in_maths: number;
  marks_in_chemistry: number;
};

type Student = {
  name: string;
  age: number;
  likes_sports?: boolean;
  marks: Marks;
  eligible_for_next_class: () => boolean;
  greeting: (itr: number) => string;
};

// const eligible_for_next_class = (marks: Marks): boolean => {
//   const total_marks =
//     marks.marks_in_chemistry + marks.marks_in_maths + marks.marks_in_physics;

//   if (total_marks < 90) {
//     return false;
//   }

//   return true;
// };

const s1: Student = {
  name: "Mark",
  age: 17,
  likes_sports: false,
  marks: {
    marks_in_physics: 75,
    marks_in_maths: 61,
    marks_in_chemistry: 88,
  },
  eligible_for_next_class(): boolean {
    const total_marks =
      this.marks.marks_in_chemistry +
      this.marks.marks_in_maths +
      this.marks.marks_in_physics;

    if (total_marks < 90) {
      return false;
    }

    return true;
  },
  greeting(itr: number): string {
    let str = "";
    for (let i = 0; i < itr; i++) {
      str += "Hello " + this.name + "\n";
    }
    return str;
  },
};

const s2: Student = {
  name: "Frizzy",
  age: 16,
  marks: {
    marks_in_physics: 31,
    marks_in_maths: 35,
    marks_in_chemistry: 19,
  },
  eligible_for_next_class(): boolean {
    const total_marks =
      this.marks.marks_in_chemistry +
      this.marks.marks_in_maths +
      this.marks.marks_in_physics;

    if (total_marks < 90) {
      return false;
    }

    return true;
  },
  greeting(itr: number) {
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

// Union Types

function meters_to_centimeters(meters: number | string): number {
  // Narrowing
  if (typeof meters === "number") {
    return meters * 100;
  } else {
    return parseInt(meters) * 100;
  }
}

console.log(meters_to_centimeters(10));
console.log(meters_to_centimeters("10m"));

// Intersection Types

type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal type

type Quantity = 50 | 100 | 150;
let quantity: Quantity = 100; // (can only be 50 or 100 or 150)

// Nullable types

function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(null);
greet("Vipul");
greet(undefined);

// Optional Chaining

type Customer = {
  birthDay?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthDay: new Date() };
}

let customer = getCustomer(0);
let customer2 = getCustomer(1);

// old way

// if (customer !== null && customer !== undefined) console.log(customer.birthDay);

// new way
console.log(customer?.birthDay?.getFullYear());
console.log(customer2?.birthDay?.getFullYear());

// Nullish Coaelscing operator

// falsy = 0 ,"", false, null, undefined

let speed: number | null = null;
let ride = {
  speed: speed ?? 30,
  //speed: speed || 30, //(0 is a valid value but will be ommited)
};

// TYPE ASSERTION

// let phone = document.getElementById("phone") as HTMLInputElement;
// HTML element | null
// or
// let phone = <HTMLInputElement>document.getElementById("phone");

// phone.value;

// unknown TYPE

function render3(document: unknown): string {
  // Narrowing
  if (typeof document === "string") return document.toUpperCase();
  else {
    // document.move();
    // document.fly();
    // document.whateverwewant();
    return "";
  }
}

// Never type
function reject(messages: string): never {
  throw new Error(messages);
}

function processEvents(): never {
  while (true) {
    // Reading messages
  }
}

// processEvents();
reject("Error");

// never gonna execute (unreacable code)
console.log("Hello world");
