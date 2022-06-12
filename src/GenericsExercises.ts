// Convert the function below to a generic function:
function echo2<T>(arg: T): T {
  return arg;
}

function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}

interface GUID {
  prefix: string;
  mids: number;
  suffix: string;
}

class Entity<T> {
  constructor(private readonly _UID: T) {}

  get UID(): T {
    return this._UID;
  }
}

const entity1 = new Entity<string>("12ef4gZx");
const entity2 = new Entity<number>(498284982);
const entity3 = new Entity<GUID>({
  prefix: "GUID",
  mids: 930848294,
  suffix: "mmmm",
});
console.log(entity1.UID);
console.log(entity3.UID.prefix);

// interface UserX {
//   userId: number;
//   username: string;
// }

// function createUser<T>(property: keyof T, id: number): void {
//   console.log({ property, id });
// }

// createUser<UserX>("username", 1234);
