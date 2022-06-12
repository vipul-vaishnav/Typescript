// class KeyValuePair {
//   constructor(public key: number | string, public value: string) {}
// }

// let KeyValuePairObj = new KeyValuePair(1, "Vipul");
// let KeyValuePairObj2 = new KeyValuePair("2", "Mayank");

// Generic classes

class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let KeyValuePairObj = new KeyValuePair<string, string>("1", "Vipul");
let KeyValuePairObj2 = new KeyValuePair<number, string>(2, "Mayank");

// Generic functions

function wrapInArray<T>(value: T) {
  return [value];
}

let numbersArr = wrapInArray("1");

// Generic Interfaces

// http://api/v1/users
// http://api/v1/products

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  console.log(url);
  return { data: null, error: null };
}

interface UserI {
  username: string;
}

interface Product {
  title: string;
}

fetch<UserI>("http://api/v1/users/");
fetch<Product>("http://api/v1/products");

// Generic constraints

function echo<T extends boolean | string>(value: T): T {
  return value;
}

echo("1");
echo(true);
// echo(12);

interface ProductX {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  viewFirst(): T {
    return this._objects[0];
  }
}

class CompressibleStore<T> extends Store<T> {
  compress() {}
}

class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.filter((obj) => obj.name === name)[0];
  }
}

class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    console.log(category);
    return [];
  }
}

let store = new CompressibleStore<ProductX>();
store.add({
  name: "Apple iphone 199 ultra pro super duper maximum of max gold captial america edition",
  price: 109_999_999,
});

const productZero = store.viewFirst();
console.log(productZero.name + ": $" + productZero.price);

// Key Mapping

type ReadOnlyProduct = {
  readonly [P in keyof ProductX]: ProductX[P];
};

type OptionalOnlyProduct = {
  [P in keyof ProductX]?: ProductX[P];
};

const obj: ReadOnlyProduct = {
  name: "Apple iphone 199",
  price: 199,
};

// obj.name = "Apple iphone 199"; *READONLY_PRODUCT
