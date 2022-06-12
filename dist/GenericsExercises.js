"use strict";
function echo2(arg) {
    return arg;
}
function printName(obj) {
    console.log(obj.name);
}
class Entity {
    constructor(_UID) {
        this._UID = _UID;
    }
    get UID() {
        return this._UID;
    }
}
const entity1 = new Entity("12ef4gZx");
const entity2 = new Entity(498284982);
const entity3 = new Entity({
    prefix: "GUID",
    mids: 930848294,
    suffix: "mmmm",
});
console.log(entity1.UID);
console.log(entity3.UID.prefix);
function createUser(property, id) {
    console.log({ property, id });
}
createUser("username", 1234);
//# sourceMappingURL=GenericsExercises.js.map