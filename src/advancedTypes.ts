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
