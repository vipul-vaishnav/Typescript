"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let KeyValuePairObj = new KeyValuePair("1", "Vipul");
let KeyValuePairObj2 = new KeyValuePair(2, "Mayank");
function wrapInArray(value) {
    return [value];
}
let numbersArr = wrapInArray("1");
function fetch(url) {
    console.log(url);
    return { data: null, error: null };
}
fetch("http://api/v1/users/");
fetch("http://api/v1/products");
function echo(value) {
    return value;
}
echo("1");
echo(true);
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    viewFirst() {
        return this._objects[0];
    }
}
class CompressibleStore extends Store {
    compress() { }
}
class SearchableStore extends Store {
    find(name) {
        return this._objects.filter((obj) => obj.name === name)[0];
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        console.log(category);
        return [];
    }
}
let store = new CompressibleStore();
store.add({
    name: "Apple iphone 199 ultra pro super duper maximum of max gold captial america edition",
    price: 109999999,
});
const productZero = store.viewFirst();
console.log(productZero.name + ": $" + productZero.price);
const obj = {
    name: "Apple iphone 199",
    price: 199,
};
//# sourceMappingURL=TypescriptGenerics.js.map