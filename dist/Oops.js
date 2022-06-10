"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Amount must be greater than 0");
        this._balance += amount;
        console.log("Amount deposited to your account successfully");
    }
    withdraw(amount) {
        if (amount > this._balance)
            throw new Error("Insufficient funds to withdraw");
        else if (amount <= 0)
            throw new Error("Amount must be greater than 0");
        this._balance -= amount;
        console.log("Amount withdrawn from your account successfully");
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value <= 0)
            throw new Error("Invalid nickname");
        this._balance = value;
        console.log("balance changed");
    }
}
let account = new Account(1, "Vikram", 3000);
console.log(account);
account.deposit(200);
console.log(account);
console.log(account.balance);
class Seats {
}
let seats = new Seats();
seats.A1 = "Vipul";
seats["A2"] = "Aniket";
class Ride {
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
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
console.log(Ride.activeRides);
//# sourceMappingURL=Oops.js.map