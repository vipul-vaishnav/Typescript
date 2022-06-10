class PersonClass {
  constructor(public firstName: string, public lastName: string) {}

  get FullName(): string {
    return this.firstName + " " + this.lastName;
  }

  walk(): void {
    console.log("Hii! i am walking");
  }
}

class StudentClass extends PersonClass {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest(): void {
    console.log("Taking Test");
  }
}

class TeacherClass extends PersonClass {
  constructor(
    public teacherId: number,
    public sujectTaught: string,
    firstName: string,
    lastName: string
  ) {
    super(firstName, lastName);
  }

  //   override get FullName(): string {
  //     return "Professor " + this.firstName + " " + this.lastName;
  //   }
  override get FullName(): string {
    return "Professor " + super.FullName;
  }

  teach(): void {
    console.log("I am teaching " + this.sujectTaught);
  }
}

class PrincipalClass extends TeacherClass {
  constructor(
    public principal_of_school: string,
    teacherId: number,
    sujectTaught: string,
    firstName: string,
    lastName: string
  ) {
    super(teacherId, sujectTaught, firstName, lastName);
  }

  override get FullName(): string {
    return "Mr. " + super.FullName;
  }
}

let teacher = new TeacherClass(5, "Science", "John", "Doe");

console.log(teacher.FullName);

// POLYMORPHISM

printNames([
  new StudentClass(1, "Rahul", "Kumar"),
  new TeacherClass(12, "Mathematics", "Adam", "Wathan"),
  new PrincipalClass("St. Annes School", 54, "Biology", "Gunther", "Gallagher"),
]);

function printNames(people: PersonClass[]) {
  for (let person of people) {
    console.log(person.FullName);
  }
}
