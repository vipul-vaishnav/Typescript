abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

// cannot create an instance of abstract class

// abstract method can only appear in abstract class

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering Circle");
  }
}
