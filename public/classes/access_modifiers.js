// classes
// readonly -> can only get -> inside class or outside class
// private -> get be get and set only inside class
// public -> can be get and set anywhere
// class Invoice1 {
//   readonly client: string;
//   private details: string;
//   public amount: number;
//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes £${this.amount} for ${this.details}`;
//   }
// }
// or 
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
