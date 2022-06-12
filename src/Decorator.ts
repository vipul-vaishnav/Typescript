function Component(value: number) {
  return (constructor: Function) => {
    // Here we have a chance to modify members of
    // the target class.
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.options = value;
  };
}

function Pipe(constructor: Function) {
  console.log("Pipe Decorator Called");
  constructor.prototype.pipe = () => {
    console.log("Hii");
  };
}

@Component(1)
@Pipe
class ProfileComponent {}

// Decorator composition
// Multiple decorators are applied in reverse order.
// Pipe followed by Component.

// Method decorators
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  // We get a reference to the original method
  const original = descriptor.value as Function;
  // Then, we redefine the method
  descriptor.value = function (...args: any) {
    // We have a chance to do something first
    console.log("Before");
    // Then, we call the original method
    original.call(this, ...args);
    // And we have a chance to do something after
    console.log("After");
  };
}
class PersonNew {
  @Log
  say(message: string) {}
}
// Accessor decorators
function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    console.log(result);
    return "newResult";
  };
}
class PersonNew2 {
  constructor(public fullNameNew: string) {}
  @Capitalize
  get fullName() {
    return this.fullNameNew;
  }
}
// // Decorators 4
// // Property decorators
// function MinLength(length: number) {
//   return (target: any, propertyName: string) => {
//     // We use this variable to hold the value behind the
//     // target property.
//     let value: string;
//     // We create a descriptor for the target property.
//     const descriptor: PropertyDescriptor = {
//       // We're defining the setter for the target property.
//       set(newValue: string) {
//         if (newValue.length < length) throw new Error();
//         value = newValue;
//       },
//     };
//     // And finally, we redefine the property.
//     Object.defineProperty(target, propertyName, descriptor);
//   };
// }
// class User {
//   @MinLength(4)
//   password: string;
// }

// Exercises Solution

function Sauce(name: string): Function {
  return (constructor: Function): void => {
    constructor.prototype.Sauce = name;
  };
}

@Sauce("pesto")
class Pizza {}

// const pixxa = new Pizza();
// console.log(pixxa.Sauce);
