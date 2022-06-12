"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(value) {
    return (constructor) => {
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.options = value;
    };
}
function Pipe(constructor) {
    console.log("Pipe Decorator Called");
    constructor.prototype.pipe = () => {
        console.log("Hii");
    };
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component(1),
    Pipe
], ProfileComponent);
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");
    };
}
class PersonNew {
    say(message) { }
}
__decorate([
    Log
], PersonNew.prototype, "say", null);
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original === null || original === void 0 ? void 0 : original.call(this);
        console.log(result);
        return "newResult";
    };
}
class PersonNew2 {
    constructor(fullNameNew) {
        this.fullNameNew = fullNameNew;
    }
    get fullName() {
        return this.fullNameNew;
    }
}
__decorate([
    Capitalize
], PersonNew2.prototype, "fullName", null);
function Sauce(name) {
    return (constructor) => {
        constructor.prototype.Sauce = name;
    };
}
let Pizza = class Pizza {
};
Pizza = __decorate([
    Sauce("pesto")
], Pizza);
//# sourceMappingURL=Decorator.js.map