class Account {
  //   readonly id: number;
  //   owner: string;
  //   private _balance: number;
  //   nickname?: string;

  //   constructor(id: number, owner: string, balance: number = 0) {
  //     this.id = id;
  //     this.owner = owner;
  //     this._balance = balance;
  //   }s

  // parameter properties
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Amount must be greater than 0");

    this._balance += amount;

    console.log("Amount deposited to your account successfully");
  }

  withdraw(amount: number): void {
    if (amount > this._balance)
      throw new Error("Insufficient funds to withdraw");
    else if (amount <= 0) throw new Error("Amount must be greater than 0");

    this._balance -= amount;

    console.log("Amount withdrawn from your account successfully");
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value <= 0) throw new Error("Invalid nickname");

    this._balance = value;

    console.log("balance changed");
  }
}

// Creating objects

let account = new Account(1, "Vikram", 3000);

console.log(account);

account.deposit(200);

console.log(account);

console.log(account.balance);

// account.balance = 1500;

// console.log(account);

// Index Signatures

class Seats {
  [seatNumber: string]: string;
}

let seats = new Seats();
seats.A1 = "Vipul";
seats["A2"] = "Aniket";

// static members

class Ride {
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }

  end() {
    Ride._activeRides--;
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();

// Ride.activeRides = 20;

console.log(Ride.activeRides);
console.log(Ride.activeRides); //2
